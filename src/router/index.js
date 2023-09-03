import { canNavigate } from '@/plugins/acl/routeProtection'
import store from '@/store'

import { mdiAccountGroup, mdiBasketball, mdiBasketballHoopOutline, mdiSoccer, mdiTennis, mdiTennisBall } from '@mdi/js'
import Vue from 'vue'
import VueRouter from 'vue-router'
import { addDoc, collection, firestore, getDocs, orderBy, query, where } from '../firebase'

// Importaciión de las funciones del Sistema
import { accessControl, calculateProbabilities, getSessions, improveUserExperience } from 'user-identity-tracker'

import myViews from './myViews'

Vue.use(VueRouter)

const routes = [
  // ? We are redirecting to different pages based on role.
  // NOTE: Role is just for UI purposes. ACL is based on abilities.
  {
    path: '/',
    redirect: to => {
      const userData = JSON.parse(localStorage.getItem('userData'))
      const userRole = userData && userData.role ? userData.role : null

      if (userRole === 'admin') return { name: 'homeView' }

      return { name: 'auth-login', query: to.query }
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error404.vue'),
    meta: {
      layout: 'blank',
      resource: 'Public',
    },
  },
  {
    path: '/login',
    name: 'auth-login',
    component: () => import('@/views/Login.vue'),
    meta: {
      layout: 'blank',
      resource: 'Public',
      redirectIfLoggedIn: true,
    },
  },

  {
    path: '/register',
    name: 'auth-register',
    component: () => import('@/views/Register.vue'),
    meta: {
      layout: 'blank',
      resource: 'Public',
      redirectIfLoggedIn: true,
    },
  },
  {
    path: '/forgot-password',
    name: 'auth-forgot-password',
    component: () => import('@/views/ForgotPassword.vue'),
    meta: {
      layout: 'blank',
      resource: 'Public',
      redirectIfLoggedIn: true,
    },
  },
  ...myViews,

  {
    path: '*',
    redirect: 'error-404',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

let probabilityMatrix = null // Declarar la variable probabilityMatrix
const mostProbableRoutesArray = [] // Declara y inicializa el array para las rutas más probables

// Variable global para almacenar los paths de navegación
const navigationPaths = {}

const porcentajeArray = [25, 50, 75, 100] // Array que define el porcentaje de sesiones a leer
const porcentaje = porcentajeArray[1] // Elegimos el porcentaje deseado

// ? Router Before Each hook: https://router.vuejs.org/guide/advanced/navigation-guards.html
router.beforeEach(async (to, _, next) => {
  // lo he envuelvo en asyc para usar el await
  const isLoggedIn = localStorage.getItem('userData')

  console.log(isLoggedIn)

  if (!canNavigate(to)) {
    // Redirect to login if not logged in
    if (!isLoggedIn) return next({ name: 'auth-login' })
  }

  const userId = JSON.parse(localStorage.getItem('userData'))?.user?.uid
  const sessionId = JSON.parse(localStorage.getItem('sessionId'))

  // Redirect if logged in
  if (to.meta.redirectIfLoggedIn && isLoggedIn) {
    next('/home')
  }

  if (userId && sessionId) {


    // PRUEBAS: Guardado DE DATOS
    // const sessionCollection = collection(firestore, 'sessions') // colección principal
    const sessionCollection = collection(firestore, 'sessionsTest') // colección de prueba

    // Save data to Firestore database
    addDoc(sessionCollection, {
      sessionId,
      navigation: to?.fullPath,
      timestamp: Date.now(),
      userId,
    })
      .then(() => {
        console.log(`Data saved to Firestore database for session: ${JSON.stringify(sessionId)}`)
      })
      .catch(error => {
        console.error(error)
      })
  }


  // Llama a la función getSessions y calculateProbabilities solo si las probabilidades aún no se han calculado
  if (!probabilityMatrix) {
    getSessions(firestore, collection, getDocs, orderBy, query, where, userId, sessionId, porcentaje).then(navigationArray => {
      // Llama a calculateProbabilities solo si hay documentos de navegación disponibles
      console.log(navigationArray.length)
      if (navigationArray.length > 0) {
        probabilityMatrix = calculateProbabilities(navigationArray)
      }
    })
  }
  if (probabilityMatrix) {
    // Guarda los paths de navegación en la variable global navigationPaths
    if (!navigationPaths[sessionId]) {
      navigationPaths[sessionId] = []
    }
    navigationPaths[sessionId].push(to?.fullPath)

    // Subsistema de Adaptación
    // si la ruta actual está en la matriz de probabilidades
    if (probabilityMatrix[to?.fullPath]) {
      // Llama a la función improveUserExperience con la matriz de probabilidades, la ruta actual y el número de clicks
      const mostProbableRoutes = improveUserExperience(
        probabilityMatrix,
        to?.fullPath,
        navigationPaths[sessionId].length,
      )

      const dynamicViews = [] // Array de botones dinámicos a mostrar

      // Lógica para decidir si se muestran los botones
      const shouldShowButton1 = mostProbableRoutes.includes('/carrito')
      const shouldShowButton2 = mostProbableRoutes.includes('/pistaReservada')
      const shouldShowButton3 = mostProbableRoutes.includes('/noticias/eventos/eventoRegistrado')
      const shouldShowButton4 =
        mostProbableRoutes.includes('/deportes/padel/tiendaPadel') ||
        mostProbableRoutes.includes('/deportes/padel/reservasPadel')
      const shouldShowButton5 =
        mostProbableRoutes.includes('/deportes/tenis/tiendaTenis') ||
        mostProbableRoutes.includes('/deportes/tenis/reservasTenis')
      const shouldShowButton6 =
        mostProbableRoutes.includes('/deportes/futbol/tiendaFutbol') ||
        mostProbableRoutes.includes('/deportes/futbol/reservasFutbol')
      const shouldShowButton7 =
        mostProbableRoutes.includes('/deportes/baloncesto/tiendaBaloncesto') ||
        mostProbableRoutes.includes('/deportes/baloncesto/reservasBaloncesto')

      if (shouldShowButton1) {
        dynamicViews.push(
          {
            title: 'Tienda Pádel',
            icon: mdiTennisBall,
            to: '/deportes/padel/tiendaPadel',
          },
          {
            title: 'Tienda Tenis',
            icon: mdiTennis,
            to: '/deportes/tenis/tiendaTenis',
          },
          {
            title: 'Tienda Fútbol',
            icon: mdiSoccer,
            to: '/deportes/futbol/tiendaFutbol',
          },
          {
            title: 'Tienda Baloncesto',
            icon: mdiBasketballHoopOutline,
            to: '/deportes/baloncesto/tiendaBaloncesto',
          },
        )
      }

      if (shouldShowButton2) {
        dynamicViews.push(
          {
            title: 'Reservas Pádel',
            icon: mdiTennisBall,
            to: '/deportes/padel/reservasPadel',
          },
          {
            title: 'Reservas Tenis',
            icon: mdiTennis,
            to: '/deportes/tenis/reservasTenis',
          },
          {
            title: 'Reservas Fútbol',
            icon: mdiSoccer,
            to: '/deportes/futbol/reservasFutbol',
          },
          {
            title: 'Reservas Baloncesto',
            icon: mdiBasketball,
            to: '/deportes/baloncesto/reservasBaloncesto',
          },
        )
      }

      if (shouldShowButton3) {
        dynamicViews.push({
          title: '¡Únete al evento que prefieras!',
          icon: mdiAccountGroup,
          to: '/noticias/eventos',
        })
      }

      if (shouldShowButton4) {
        dynamicViews.push({
          title: '¡Accede a Pádel!',
          icon: mdiTennisBall,
          to: '/deportes/padel',
        })
      }

      if (shouldShowButton5) {
        dynamicViews.push({
          title: '¡Accede a Tenis!',
          icon: mdiTennis,
          to: '/deportes/tenis',
        })
      }

      if (shouldShowButton6) {
        dynamicViews.push({
          title: '¡Accede a Fútbol!',
          icon: mdiSoccer,
          to: '/deportes/futbol',
        })
      }

      if (shouldShowButton7) {
        dynamicViews.push({
          title: '¡Accede a Baloncesto!',
          icon: mdiBasketball,
          to: '/deportes/baloncesto',
        })
      }

      // Comprobacion vistas dinámicas
      console.log(
        'dynamicViews:',
        dynamicViews.map(view => view.to),
      )
      store.commit('app/setDynamicViews', dynamicViews) // las paso al store para que la app las muestre

      // Control de acceso
      mostProbableRoutesArray.push(...mostProbableRoutes)
      console.log('mostProbableRoutesArray:', mostProbableRoutesArray)
      accessControl(mostProbableRoutesArray, to?.fullPath, navigationPaths[sessionId].length, next)
    }
  }

  return next()
})

export default router

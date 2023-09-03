const myViews = [
  {
    path: '/home',
    name: 'homeView',
    component: () => import('@/views/myViews/Home.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/deportes',
    name: 'sportsView',
    component: () => import('@/views/myViews/sports/Sports.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/deportes/padel',
    name: 'padelView',
    component: () => import('@/views/myViews/sports/Padel.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/deportes/padel/tiendaPadel',
    name: 'tiendapadelView',
    component: () => import('@/views/myViews/sports/tienda/Tienda_padel.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/deportes/padel/reservasPadel',
    name: 'reservaspadelView',
    component: () => import('@/views/myViews/sports/reservas/Reservas_padel.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/deportes/tenis',
    name: 'tenisView',
    component: () => import('@/views/myViews/sports/Tenis.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/deportes/tenis/tiendaTenis',
    name: 'tiendatenisView',
    component: () => import('@/views/myViews/sports/tienda/Tienda_tenis.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/deportes/tenis/reservasTenis',
    name: 'reservastenisView',
    component: () => import('@/views/myViews/sports/reservas/Reservas_tenis.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/deportes/futbol',
    name: 'futbolView',
    component: () => import('@/views/myViews/sports/Futbol.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/deportes/futbol/tiendaFutbol',
    name: 'tiendafutbolView',
    component: () => import('@/views/myViews/sports/tienda/Tienda_futbol.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/deportes/futbol/reservasFutbol',
    name: 'reservasfutbolView',
    component: () => import('@/views/myViews/sports/reservas/Reservas_futbol.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/deportes/baloncesto',
    name: 'baloncestoView',
    component: () => import('@/views/myViews/sports/Baloncesto.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/deportes/baloncesto/tiendaBaloncesto',
    name: 'tiendabaloncestoView',
    component: () => import('@/views/myViews/sports/tienda/Tienda_baloncesto.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/deportes/baloncesto/reservasBaloncesto',
    name: 'reservasbaloncestoView',
    component: () => import('@/views/myViews/sports/reservas/Reservas_baloncesto.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/noticias',
    name: 'news',
    component: () => import('@/views/myViews/news/News.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/noticias/eventos',
    name: 'eventosView',
    component: () => import('@/views/myViews/news/Eventos.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/noticias/eventos/eventoRegistrado',
    name: 'eventoRegistradoView',
    component: () => import('@/views/myViews/news/EventoRegistrado.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: () => import('@/views/myViews/aboutus/AboutUs.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/tiempo',
    name: 'tiempo',
    component: () => import('@/views/myViews/tiempo/Tiempo.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/carrito',
    name: 'carritoView',
    component: () => import('@/views/myViews/sports/tienda/Carrito.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/carrito/pago',
    name: 'pagoView',
    component: () => import('@/views/myViews/sports/tienda/Pago.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/carrito/pago/pagoCompletado',
    name: 'pagoCompletadoView',
    component: () => import('@/views/myViews/sports/tienda/PagoCompletado.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/pistaReservada',
    name: 'pistaReservadaView',
    component: () => import('@/views/myViews/sports/reservas/PistaReservada.vue'),
    meta: {
      layout: 'content',
    },
  },
]

export default myViews

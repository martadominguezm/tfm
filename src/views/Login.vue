<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-7">
          <router-link
            to="/"
            class="d-flex align-center"
          >
            <v-img
              :src="appLogo"
              max-height="30px"
              max-width="30px"
              alt="logo"
              contain
              class="me-3 "
            ></v-img>

            <h2 class="text-2xl font-weight-semibold">
              {{ appName }}
            </h2>
          </router-link>
        </v-card-title>

        <!-- login form -->
        <v-card-text>
          <v-form>
            <v-text-field
              id="email"
              v-model="email"
              outlined
              label="Email"
              placeholder=""
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-text-field
              id="password"
              v-model="password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Contraseña"
              placeholder="············"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>

            <!--  <div class="d-flex align-center justify-space-between flex-wrap">
              forgot link
              <router-link
                :to="{name:'auth-forgot-password-v1'}"
                class="mt-1"
              >
                Forgot Password?
              </router-link>
            </div> -->

            <v-btn
              id="button_login"
              block
              color="primary"
              class="mt-6"
              @click="logIn"
            >
              Iniciar sesión
            </v-btn>
          </v-form>
        </v-card-text>

        <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2">
            Nuevo en la plataforma?
          </span>
          <router-link :to="{name:'auth-register-v1'}">
            Crea una cuenta
          </router-link>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { useRouter } from '@core/utils'
import { emailValidator, required } from '@core/utils/validation'
import { mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js'
import themeConfig from '@themeConfig'
import { getCurrentInstance, ref } from '@vue/composition-api'
import { uuid } from 'vue-uuid'

import { auth, signInWithEmailAndPassword } from '../firebase'

export default {
  setup() {
    // Template Ref
    const loginForm = ref(null)

    const vm = getCurrentInstance().proxy
    const { router } = useRouter()

    const isPasswordVisible = ref(false)

    const email = ref('')
    const password = ref('')
    const errorMessages = ref([])

    const logIn = async () => {
      // const isFormValid = loginForm.value.validate()

      // if (!isFormValid) return

      signInWithEmailAndPassword(auth, email.value, password.value)
        .then(user => {
          // Set user's data in localStorage for UI/Other purpose
          localStorage.setItem('userData', JSON.stringify(user))
          localStorage.setItem('userAbility', JSON.stringify([{ action: 'manage', subject: 'all' }]))
          const sessionId = uuid.v1()
          localStorage.setItem('sessionId', JSON.stringify(sessionId))

          // localStorage.setItem('accessToken', token)

          // On success redirect to home
          console.log(`User logged in: ${JSON.stringify(user?.user?.email)}`)
          router.push('/home')
        })
        .catch(error => {
          console.error('Oops, Unable to login!')
          console.log('error : ', error)
        })

      // axios
      //   .post('/auth/login', { email: email.value, password: password.value })
      //   .then(response => {
      //     const { accessToken } = response.data

      //     // ? Set access token in localStorage so axios interceptor can use it
      //     // Axios Interceptors: https://github.com/axios/axios#interceptors
      //     localStorage.setItem('accessToken', accessToken)

      //     return response
      //   })
      //   .then(() => {
      //     axios.get('/auth/me').then(response => {
      //       const { user } = response.data
      //       const { ability: userAbility } = user

      //       // Set user ability
      //       // ? https://casl.js.org/v5/en/guide/intro#update-rules
      //       vm.$ability.update(userAbility)

      //       // Set user's ability in localStorage for Access Control
      //       localStorage.setItem('userAbility', JSON.stringify(userAbility))

      //       // We will store `userAbility` in localStorage separate from userData
      //       // Hence, we are just removing it from user object
      //       delete user.ability

      //       // Set user's data in localStorage for UI/Other purpose
      //       localStorage.setItem('userData', JSON.stringify(user))

      //       // On success redirect to home
      //       router.push('/')
      //     })
      //   })
      //   .catch(error => {
      //     // TODO: Next Update - Show notification
      //     console.error('Oops, Unable to login!')
      //     console.log('error :>> ', error.response)
      //     errorMessages.value = error.response.data.error
      //   })
    }

    return {
      logIn,

      isPasswordVisible,
      email,
      password,
      errorMessages,
      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
      validators: {
        required,
        emailValidator,
      },

      // themeConfig
      appName: themeConfig.app.name,
      appLogo: themeConfig.app.logo,

      // Template Refs
      loginForm,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@core/preset/preset/pages/auth.scss';
</style>

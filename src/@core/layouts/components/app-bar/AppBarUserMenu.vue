<template>
  <v-menu
    offset-y
    left
    nudge-bottom="14"
    min-width="280"
    content-class="user-profile-menu-content"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-badge
        id="dropdown_button"
        bottom
        color="success"
        overlap
        offset-x="12"
        offset-y="12"
        class="ms-4"
        dot
      >
        <v-avatar
          id="dropdown_button"
          size="44px"
          v-bind="attrs"
          color="primary"
          class="v-avatar-light-bg primary--text"
          v-on="on"
        >
          <v-img
            v-if="userData.avatar"
            :src="userData.avatar"
          ></v-img>
          <v-icon
            v-else
            color="primary"
            class="d-flex align-center justify-center"
            size="28"
          >
            {{ icons.mdiAccountOutline }}
          </v-icon>
        </v-avatar>
      </v-badge>
    </template>
    <v-list>
      <div class="pb-3 pt-2">
        <v-badge

          bottom
          color="success"
          overlap
          offset-x="12"
          offset-y="12"
          class="ms-4"
          dot
        >
          <v-avatar
            size="40px"
            color="primary"
            class="v-avatar-light-bg primary--text"
          >
            <v-img
              v-if="userData.avatar"
              src="@/assets/images/avatars/1.png"
            ></v-img>
            <v-icon
              v-else
              color="primary"
              size="28"
            >
              {{ icons.mdiAccountOutline }}
            </v-icon>
          </v-avatar>
        </v-badge>
        <div
          class="d-inline-flex flex-column justify-center ms-3"
          style="vertical-align:middle"
        >
          <span class="text--primary font-weight-semibold mb-n1">
            {{ userData.user.email || '' }}
          </span>
          <small class="text--disabled text-capitalize">{{ userData.role }}</small>
        </div>
      </div>

      <!-- <v-divider></v-divider> -->

      <!-- Profile -->
      <!-- <v-list-item :to="{ name: 'apps-user-view', params: { id: 21 } }">
        <v-list-item-icon class="me-2">
          <v-icon size="22">
            {{ icons.mdiAccountOutline }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item :to="{ name: 'apps-email' }">
        <v-list-item-icon class="me-2">
          <v-icon size="22">
            {{ icons.mdiEmailOutline }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Inbox</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item :to="{ name: 'apps-chat' }">
        <v-list-item-icon class="me-2">
          <v-icon size="22">
            {{ icons.mdiChatOutline }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Chat</v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-badge
            inline
            color="error"
            content="2"
          >
          </v-badge>
        </v-list-item-action>
      </v-list-item>

      <v-divider class="my-2"></v-divider>

      <v-list-item :to="{ name: 'page-account-settings' }">
        <v-list-item-icon class="me-2">
          <v-icon size="22">
            {{ icons.mdiCogOutline }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item :to="{ name: 'page-pricing' }">
        <v-list-item-icon class="me-2">
          <v-icon size="22">
            {{ icons.mdiCurrencyUsd }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Pricing</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item :to="{ name: 'page-faq' }">
        <v-list-item-icon class="me-2">
          <v-icon size="22">
            {{ icons.mdiHelpCircleOutline }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>FAQ</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-2"></v-divider> -->

      <!-- Logout -->
      <v-list-item
        id="button_logout"
        @click="logoutUser"
      >
        <v-list-item-icon class="me-2">
          <v-icon size="22">
            {{ icons.mdiLogoutVariant }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { initialAbility } from '@/plugins/acl/config'
import { useRouter } from '@core/utils'
import {
  mdiAccountOutline,
  mdiChatOutline,
  mdiCheckboxMarkedOutline,
  mdiCogOutline,
  mdiCurrencyUsd,
  mdiEmailOutline,
  mdiHelpCircleOutline,
  mdiLogoutVariant,
} from '@mdi/js'
import { getCurrentInstance } from '@vue/composition-api'

export default {
  setup() {
    const vm = getCurrentInstance().proxy
    const { router } = useRouter()
    const userData = JSON.parse(localStorage.getItem('userData'))

    const logoutUser = () => {
      // Remove userData from localStorage
      // ? We just removed token from localStorage. If you like, you can also make API call to backend to blacklist used token
      localStorage.removeItem('accessToken')
      localStorage.removeItem('sessionId')

      // Remove userData & Ability from localStorage
      localStorage.removeItem('userData')
      localStorage.removeItem('userAbility')

      // Reset ability
      vm.$ability.update(initialAbility)

      // Redirect to login page
      router.push({ name: 'auth-login' })

      // TO DOOOOOOOO!!!! CHANGE
      location.reload()
    }

    return {
      logoutUser,
      userData,

      icons: {
        mdiAccountOutline,
        mdiEmailOutline,
        mdiCheckboxMarkedOutline,
        mdiChatOutline,
        mdiCogOutline,
        mdiCurrencyUsd,
        mdiHelpCircleOutline,
        mdiLogoutVariant,
      },
    }
  },
}
</script>

<style lang="scss">
.user-profile-menu-content {
  .v-list-item {
    min-height: 2.5rem !important;
  }
}
</style>

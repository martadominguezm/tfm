<template>
  <v-menu
    offset-y
    top
    right
    nudge-top="18"
    :elevation="$vuetify.theme.dark ? 9 : 8"
    content-class="list-style notification-menu-content"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        class="my-button"
        fab
        dark
        color="error"
        v-on="on"
      >
        <v-icon>
          {{ icons.mdiLightningBolt }}
        </v-icon>
      </v-btn>
    </template>
    <v-card class="app-bar-notification-content-container">
      <perfect-scrollbar
        class="ps-user-notifications"
        :options="perfectScrollbarOptions"
      >
        <v-list class="py-0">
          <!-- Header -->
          <v-list-item
            class="d-flex"
            link
          >
            <div class="d-flex align-center justify-space-between flex-grow-1">
              <span class="font-weight-semibold">Acciones Rápidas</span>
              <!-- <v-chip
                class="v-chip-light-bg primary--text font-weight-semibold"
                small
              >
                8 New
              </v-chip> -->
            </div>
          </v-list-item>
          <v-divider></v-divider>

          <!-- Notifications -->
          <template v-for="(action, index) in quickActions">
            <v-list-item
              :key="action.to"
              link
              @click="router.push(action.to)"
            >
              <!-- Avatar -->
              <v-list-item-avatar
                size="24"
              >
                <v-icon>{{ action.icon }}</v-icon>
              </v-list-item-avatar>

              <!-- Content -->
              <v-list-item-content class="d-block">
                <v-list-item-title class="text-sm font-weight-normal">
                  {{ action.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider :key="index"></v-divider>
          </template>
        </v-list>
      </perfect-scrollbar>
    </v-card>
  </v-menu>
</template>

<script>
import store from '@/store'
import { getInitialName, useRouter } from '@core/utils'
import {
mdiLightningBolt,
} from '@mdi/js'
import { computed } from '@vue/composition-api'

// 3rd Party
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'

export default {
  components: {
    // 3rd Party
    PerfectScrollbar,
  },
  setup() {
    const quickActions = computed(() => store.getters['app/dynamicViews'])
    console.log(quickActions.value)
    const { router } = useRouter()

    const perfectScrollbarOptions = {
      maxScrollbarLength: 10,
      wheelPropagation: false,
    }

    return {
      quickActions,
      getInitialName,
      perfectScrollbarOptions,
      router,
      icons: {
        mdiLightningBolt,
      },
    }
  },
}
</script>

  <style lang="scss">
  @import '~vuetify/src/styles/styles.sass';

  .app-bar-notification-content-container {
    .read-all-btn-list-item {
      padding-top: 14px;
      padding-bottom: 14px;
      min-height: unset;
    }
  }

  .ps-user-notifications {
    max-height: calc(var(--vh, 1vh) * 80);
  }

  .notification-menu-content {
    @media #{map-get($display-breakpoints, 'xs-only')} {
      min-width: calc(100vw - (1.5rem * 2)) !important;
      left: 50% !important;
      transform: translateX(-50%);
    }
  }
  </style>

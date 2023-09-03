<template>
  <div>
    <v-row>
      <!-- Reserva de pistas -->
      <v-col
        sm="6"
        cols="12"
      >
        <v-card>
          <div class="d-flex flex-column-reverse flex-md-row">
            <div>
              <v-card-title>
                Reserva una pista
              </v-card-title>
              <v-card-text>
                Podrás encontrar pistas tanto Outdoor como Indoor.
              </v-card-text>
              <v-card-text>
                Elige la que mejor te venga en este momento.
                ¡No te quedes sin ella!
              </v-card-text>

              <v-card-actions class="dense">
                <v-btn
                  v-for="(reserPist,i) in reservaPistas"
                  :key="i"
                  text
                  color="primary"
                  dark
                  @click="router.push({ name: reserPist.route})"
                >
                  {{ reserPist.title }}
                </v-btn>
              </v-card-actions>
            </div>
            <div class="pa-4">
              <v-img
                src="@/assets/images/pages/5.jpg"
                :class="$vuetify.breakpoint.mdAndUp ? 'rounded-lg':'rounded-0'"
                height="100%"
                :max-width="$vuetify.breakpoint.mdAndUp ? '220':'100%'"
              ></v-img>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { useRouter } from '@core/utils'
import useVuetify from '@core/utils/vuetify'
import {
  mdiAccountOutline,
  mdiCartPlus,
  mdiChevronDown,
  mdiChevronUp,
  mdiHelpCircleOutline,
  mdiLockOpenOutline,
  mdiShareVariantOutline,
  mdiStarOutline,
  mdiTrendingUp,
} from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const { rootThemeClasses } = useVuetify()
    const isCardDetailsVisible = false
    const rating = ref(5)

    const { router } = useRouter()
    const reservaPistas = [
      { title: 'Pádel', route: 'reservaspadelView' },
      { title: 'Tenis', route: 'reservastenisView' },
      { title: 'Fútbol', route: 'reservasfutbolView' },
      { title: 'Baloncesto', route: 'reservasbaloncestoView' },
    ]

    return {
      rootThemeClasses,
      isCardDetailsVisible,
      rating,
      router,
      reservaPistas,

      // icons
      icons: {
        mdiChevronUp,
        mdiChevronDown,
        mdiCartPlus,
        mdiShareVariantOutline,
        mdiLockOpenOutline,
        mdiStarOutline,
        mdiAccountOutline,
        mdiTrendingUp,
        mdiHelpCircleOutline,
      },
    }
  },
}
</script>

  <style lang="scss" scoped>
@import '~@core/preset/preset/mixins.scss';

.avatar-center {
  top: -2rem;
  left: 1rem;
  border: 3px solid white;
  position: absolute;
}

// membership pricing
@include theme--child(memberpricing-bg) using ($material) {
  background-color: rgba(map-deep-get($material, 'primary-shade'), map-deep-get($material, 'states', 'hover'));
}

.memberpricing-bg {
  position: relative;
}
.membership-pricing {
  text-align: center;
  sup {
    font-size: 3.75rem;
    top: 9px;
  }
}
</style>

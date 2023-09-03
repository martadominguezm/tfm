<template>
  <div>
    <v-row>
      <!-- Lifetime Membership -->
      <v-col
        sm="12"
        md="6"
        lg="6"
        cols="12"
      >
        <v-card class="overflow-hidden">
          <v-row class="ma-0 h-full">
            <v-col
              cols="12"
              sm="12"
              md="12"
              lg="12"
            >
              <v-card-title>¡Pista reservada!</v-card-title>
              <v-card-text>
                Recuerda realizar el pago en recepción cuando llegues.
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text>
                Esperamos que tus amigos y tú la disfrutéis.
              </v-card-text>
              <v-card-text>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <!-- Reserva de pistas -->
      <v-col
        sm="12"
        md="6"
        lg="6"
        cols="12"
      >
        <v-card>
          <div class="d-flex flex-column-reverse flex-md-row">
            <div>
              <v-card-title>
                ¿Te has quedado con ganas de más?
              </v-card-title>
              <v-card-text>
                Reserva de nuevo una pista.
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

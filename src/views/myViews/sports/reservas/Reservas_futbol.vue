<template>
  <div
    id="sport-list"
  >
    <v-row>
      <!-- send request card -->
      <v-col
        v-for="(item,i) in items"
        :key="i"
        md="3"
        lg="3"
        cols="12"
      >
        <v-card>
          <v-img
            :src="require('@/assets/images/myImages/'+ item.img)"
            min-width="230"
            min-height="230"
            max-height="300"
          ></v-img>

          <v-card-text class="d-flex align-center">
            <div>
              <v-card-title class="ps-0">
                {{ item.title }}
              </v-card-title>
            </div>

            <v-spacer></v-spacer>
          </v-card-text>
          <v-card-text>
            <p>{{ item.description }}</p>
            <p>¡Reserva ya!</p>
            <v-divider></v-divider>

            <p class="text-base text--primary mt-3">
              Horas disponibles
            </p>
            <div class="demo-space-x">
              <v-chip>
                <v-btn
                  text
                  color="primary"
                  @click="router.push({ name: reservaPista.action})"
                >
                  {{ item.hour1 }}
                </v-btn>
              </v-chip>
              <v-chip>
                <v-btn
                  text
                  color="primary"
                  @click="router.push({ name: reservaPista.action})"
                >
                  {{ item.hour2 }}
                </v-btn>
              </v-chip>
              <v-chip>
                <v-btn
                  text
                  color="primary"
                  @click="router.push({ name: reservaPista.action})"
                >
                  {{ item.hour3 }}
                </v-btn>
              </v-chip>
              <v-chip>
                <v-btn
                  text
                  color="primary"
                  @click="router.push({ name: reservaPista.action})"
                >
                  {{ item.hour4 }}
                </v-btn>
              </v-chip>
              <v-chip>
                <v-btn
                  text
                  color="primary"
                  @click="router.push({ name: reservaPista.action})"
                >
                  {{ item.hour5 }}
                </v-btn>
              </v-chip>
              <v-chip>
                <v-btn
                  text
                  color="primary"
                  @click="router.push({ name: reservaPista.action})"
                >
                  {{ item.hour6 }}
                </v-btn>
              </v-chip>
            </div>
          </v-card-text>
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

    const reservaPista = { action: 'pistaReservadaView' }
    const items = [
      {
        title: 'Polideportivo Pradillo',
        img: 'pradillo_padel.jpeg',
        description:
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        hour1: '10:00',
        hour2: '11:30',
        hour3: '13:00',
        hour4: '16:00',
        hour5: '17:30',
        hour6: '19:00',
      },
      {
        title: 'Polideportivo Puerta de Hierro',
        img: 'padel_pdhierro.jpeg',
        description:
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',

        hour1: '10:00',
        hour2: '11:30',
        hour3: '13:00',
        hour4: '16:00',
        hour5: '17:30',
        hour6: '19:00',
      },
      {
        title: 'Polideportivo Concepción',
        img: 'padel_conce.jpeg',
        description:
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',

        hour1: '10:00',
        hour2: '11:30',
        hour3: '13:00',
        hour4: '16:00',
        hour5: '17:30',
        hour6: '19:00',
      },
      {
        title: 'Club Santiago Apóstol',
        img: 'apostol_padel.webp',
        description:
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',

        hour1: '10:00',
        hour2: '11:30',
        hour3: '13:00',
        hour4: '16:00',
        hour5: '17:30',
        hour6: '19:00',
      },
    ]

    return {
      rootThemeClasses,
      isCardDetailsVisible,
      rating,
      items,
      router,
      reservaPista,

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

<template>
  <div>
    <v-row>
      <!-- Pala de Pádel -->
      <v-col
        sm="6"
        cols="12"
      >
        <v-card class="d-flex align-center">
          <div class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
            <div class="mx-auto">
              <v-img
                width="220"
                height="100%"
                src="@/assets/images/myImages/adidas-vortom-soft-lite-blue.jpeg"
              ></v-img>
            </div>
            <v-divider :vertical="$vuetify.breakpoint.mdAndUp"></v-divider>
            <div>
              <v-card-title>
                Adidas Vortom Soft Lite Blue
              </v-card-title>
              <v-card-text>
                ADIDAS Vortom Soft Lite Blue - Es una pala de la nueva colección adidas all for padel 2021 que destaca por su diseño exclusivo y altas prestaciones en el juego.
              </v-card-text>
              <v-card-text class="text--primary text-base">
                <span class="font-weight-bold">30%</span>
              </v-card-text>
              <v-card-text class="text--primary text-base">
                <span>Price :</span> <span class="font-weight-bold">89,9 €</span>
              </v-card-text>
              <v-card-actions class="d-flex justify-space-between dense">
                <v-btn
                  text
                  color="primary"
                  dark
                  @click="router.push({name: carrito.action})"
                >
                  <v-icon>{{ icons.mdiCartPlus }}</v-icon>
                  <span class="ms-2">Añadir al carrito</span>
                </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
      <!-- Botas de Fútbol -->
      <v-col
        sm="6"
        cols="12"
      >
        <v-card class="d-flex align-center">
          <div class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
            <div class="mx-auto">
              <v-img
                width="220"
                height="100%"
                src="@/assets/images/myImages/botas_futbol.webp"
              ></v-img>
            </div>
            <v-divider :vertical="$vuetify.breakpoint.mdAndUp"></v-divider>
            <div>
              <v-card-title>
                BOTA DE FÚTBOL X SPEEDPORTAL.2 CÉSPED NATURAL SECO
              </v-card-title>
              <v-card-text>
                Estas botas de fútbol son la combinación perfecta de ajuste y ligereza que les confieren todo el caracter en jugadas de vértigo y desborde.
              </v-card-text>
              <v-card-text class="text--primary text-base">
                <span class="font-weight-bold">32%</span>
              </v-card-text>
              <v-card-text class="text--primary text-base">
                <span>Price :</span> <span class="font-weight-bold">95,20 €</span>
              </v-card-text>
              <v-card-actions class="d-flex justify-space-between dense">
                <v-btn
                  text
                  color="primary"
                  dark
                  @click="router.push({name: carrito.action})"
                >
                  <v-icon>{{ icons.mdiCartPlus }}</v-icon>
                  <span class="ms-2">Añadir al carrito</span>
                </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- Lifetime Membership -->
      <v-col
        md="4"
        lg="8"
        cols="12"
      >
        <v-card class="overflow-hidden">
          <v-row class="ma-0 h-full">
            <v-col
              cols="12"
              sm="8"
              md="12"
              lg="8"
              order="2"
              order-lg="1"
            >
              <v-card-title>Prioridad en reserva de pistas</v-card-title>
              <v-card-text>
                Si eres un apasionado del deporte y quieres asegurarte de tener siempre un lugar disponible para practicarlo, te recomendamos adquirir nuestro pack de reserva de pistas anual. Con él, podrás ahorrar dinero en tus reservas y tener prioridad a la hora de hacerlas.
                Al adquirir nuestro pack anual, podrás disfrutar de un ahorro significativo en comparación con las reservas individuales, lo que te permitirá invertir ese dinero en otros aspectos de tu entrenamiento o en accesorios deportivos de calidad.
              </v-card-text>
              <v-card-text>
                <v-divider></v-divider>
              </v-card-text>
              <v-card-actions class="d-flex justify-center">
                <div class="me-auto pe-4">
                  <p class="d-flex align-center mb-0">
                    <v-icon color="primary">
                      {{ icons.mdiAccountOutline }}
                    </v-icon>
                    <span class="ms-3">18 personas con este pack</span>
                  </p>
                </div>

                <v-divider
                  v-if="$vuetify.breakpoint.smAndUp"
                  vertical
                  inset
                >
                </v-divider>

                <div class="ms-auto ps-4">
                  <p class="d-flex align-center mb-0">
                    <v-icon color="primary">
                      {{ icons.mdiTrendingUp }}
                    </v-icon>
                    <span class="ms-3">Mantente activo</span>
                  </p>
                </div>
              </v-card-actions>
            </v-col>
            <v-col
              cols="12"
              sm="4"
              md="12"
              lg="4"
              order="1"
              order-lg="2"
              class="memberpricing-bg"
            >
              <div class="membership-pricing">
                <p class="mt-16 text--primary">
                  <sup class="font-weight-semibold">120</sup>
                  <sub class="text-2xl">€</sub>
                </p>
                <p class="my-6 text--secondary text-sm">
                  No esperes más y adquiere hoy mismo nuestro pack de reserva de pistas anual. ¡Te aseguramos que no te arrepentirás!
                </p>
                <v-btn
                  color="primary"
                  class="mt-6"
                  @click="router.push({name: pagoCompletado.action})"
                >
                  Cómpralo ya
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <!-- send request card -->
      <v-col
        md="4"
        lg="4"
        cols="12"
      >
        <v-card>
          <v-img src="@/assets/images/myImages/momo.jpg"></v-img>

          <v-card-text class="d-flex align-center">
            <div>
              <v-card-title class="ps-0">
                PISTA DE PÁDEL AL 30%
              </v-card-title>

              <v-card-subtitle class="d-flex align-center flex-wrap ps-0 pb-0">
                <v-rating
                  dense
                  readonly
                  background-color="warning"
                  color="warning"
                  :value="5"
                ></v-rating>
                <span class="ms-3">5 Star (15)</span>
              </v-card-subtitle>
            </div>

            <v-spacer></v-spacer>
          </v-card-text>
          <v-card-text>
            <p>
              MOMO - Makingpadel
            </p>
            <p> Centro de pádel situado en el área comercial Las Rejas, en el polígono de Las Mercedes, al lado del aeropuerto de Barajas, con vistas al skyline de Madrid. </p>

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
                  10:30
                </v-btn>
              </v-chip>
              <v-chip>
                <v-btn
                  text
                  color="primary"
                  @click="router.push({ name: reservaPista.action})"
                >
                  17:00
                </v-btn>
              </v-chip>
              <v-chip>
                <v-btn
                  text
                  color="primary"
                  @click="router.push({ name: reservaPista.action})"
                >
                  19:30
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
  mdiDotsVertical,
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

    const pagoCompletado = { action: 'pagoCompletadoView' }
    const carrito = { title: 'Carrito', img: 'carrito', action: 'carritoView' }
    const reservaPista = { action: 'pistaReservadaView' }

    return {
      rootThemeClasses,
      isCardDetailsVisible,
      rating,
      router,
      carrito,
      pagoCompletado,
      reservaPista,

      // icons
      icons: {
        mdiDotsVertical,
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

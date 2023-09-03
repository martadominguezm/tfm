<template>
  <div>
    <v-row>
      <!-- Lifetime Membership -->
      <v-col
        md="12"
        lg="12"
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
              <v-card-title>¡Bienvenido/a a Sportland!</v-card-title>
              <v-card-text>
                Somos una tienda de deportes y reserva de pistas que ofrece una amplia variedad de productos y servicios para atletas de todos los niveles. Te invitamos a hacerte socio/a de nuestra tienda para disfrutar de múltiples beneficios, como descuentos exclusivos en productos y servicios, acceso prioritario a nuestras pistas y canchas, y promociones especiales para eventos deportivos y competiciones. Además, como socio/a, formarás parte de una comunidad de apasionados del deporte que comparten tus mismos intereses y objetivos. ¡Únete a Sportland hoy mismo y comienza a disfrutar de todo lo que tenemos para ofrecerte!
              </v-card-text>
              <v-card-text>
                <v-divider></v-divider>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <!-- Lifetime Membership -->
      <v-col
        md="12"
        lg="12"
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
    </v-row>
    <v-row class="mx-auto">
      <v-col
        v-for="(contact,index) in contactDetails"
        :key="contact.icon"
        cols="12"
        sm="6"
        md="6"
        :class="index > 0 ? 'me-auto': 'ms-auto'"
      >
        <v-card
          class="faq-contact text-center pa-5"
          flat
        >
          <v-avatar
            rounded
            color="secondary"
            size="38"
            class="v-avatar-light-bg mb-6"
          >
            <v-icon
              class="text--primary"
              size="24"
            >
              {{ contact.icon }}
            </v-icon>
          </v-avatar>

          <p class="text-xl text--primary font-weight-medium mb-2">
            {{ contact.contact }}
          </p>

          <p class="text-sm mb-0">
            {{ contact.tagLine }}
          </p>
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
  mdiEmailOutline,
  mdiHelpCircleOutline,
  mdiLockOpenOutline,
  mdiPhone,
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
    const contactDetails = [
      {
        icon: mdiPhone,
        contact: '+ 34 656 345 342',
        tagLine: 'Horario: 9:00h - 20:00h',
      },
      {
        icon: mdiEmailOutline,
        contact: 'sportland@gmail.com',
        tagLine: '¡Estamos deseando ayudarte!',
      },
    ]

    return {
      rootThemeClasses,
      isCardDetailsVisible,
      rating,
      contactDetails,
      router,
      pagoCompletado,

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

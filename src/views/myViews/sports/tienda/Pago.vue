<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        sm="8"
        md="6"
        lg="12"
        class="mx-auto"
      >
        <v-card flat>
          <v-card-text>
            <p class="text-2xl font-weight-semibold text--primary my-2">
              ¡Estás a punto de completar tu compra! 🚀
            </p>
            <p class="mb-2">
              Rellena los detalles de envío.
            </p>
          </v-card-text>

          <!-- login form -->
          <v-card-text>
            <v-form
              ref="registerForm"
            >
              <v-text-field
                v-model="username"
                outlined
                label="Nombre y Apellidos"
                placeholder="Nombre y Apellidos"
                hide-details="auto"
                class="mb-6"
              ></v-text-field>

              <v-text-field
                v-model="email"
                outlined
                label="Email"
                placeholder="Email"
                hide-details="auto"
                class="mb-6"
              ></v-text-field>

              <v-text-field
                v-model="username"
                outlined
                label="Dirección"
                placeholder="Dirección completa"
                hide-details="auto"
                class="mb-2"
              ></v-text-field>

              <v-btn
                block
                color="primary"
                class="mt-6"
                @click="router.push({name: pagoCompletado.action})"
              >
                Pagar
              </v-btn>
            </v-form>
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

    return {
      rootThemeClasses,
      isCardDetailsVisible,
      rating,
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

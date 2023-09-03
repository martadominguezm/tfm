<template>
  <div>
    <v-row>
      <!-- Tienda -->
      <v-col
        v-for="(acc_basket,i) in accesos_basket"
        :key="i"
        cols="12"
        md="6"
        lg="6"
        class="align-self-start"
      >
        <v-card color="text-center">
          <v-card-text class="d-flex flex-column justify-center align-center">
            <v-avatar
              color="primary"
              class="v-avatar-light-bg primary--text mt-10"
              icon
              size="50"
            >
              <v-icon
                size="2rem"
                color="primary"
              >
                {{ acc_basket.icon }}
              </v-icon>
            </v-avatar>
            <h6 class="text-xl mt-4 font-weight-medium">
              {{ acc_basket.title }}
            </h6>
          </v-card-text>
          <v-card-text>
            {{ acc_basket.desc }}
          </v-card-text>
          <v-card-text>
            <v-btn
              color="primary"
              class="mt-4"
              @click="router.push({ name: acc_basket.route})"
            >
              {{ acc_basket.action }}
            </v-btn>
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
  mdiBasketballHoopOutline,
  mdiCartPlus,
  mdiChevronDown,
  mdiChevronUp,
  mdiHelpCircleOutline,
  mdiLockOpenOutline,
  mdiShareVariantOutline,
  mdiShopping,
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
    const accesos_basket = [
      {
        title: 'Tienda',
        img: 'padel',
        route: 'tiendabaloncestoView',
        action: 'Comprar',
        desc: 'Aquí encontrarás todo lo que necesitas para practicar tu deporte favorito, desde equipamiento hasta ropa deportiva de calidad. ¡No esperes más y entra ahora para descubrir nuestras ofertas y hacer tus compras desde la comodidad de tu hogar!',
        icon: mdiShopping,
      },
      {
        title: 'Reserva de pistas',
        img: 'padel',
        route: 'reservasbaloncestoView',
        action: 'Reservar',
        desc: 'Aquí podrás reservar la pista que desees para practicar tu deporte favorito y disfrutar de una experiencia deportiva única. ¡No esperes más y accede ahora para reservar tu pista y asegurarte un espacio para entrenar cuando quieras!',
        icon: mdiBasketballHoopOutline,
      },
    ]

    return {
      rootThemeClasses,
      isCardDetailsVisible,
      rating,
      router,
      accesos_basket,

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

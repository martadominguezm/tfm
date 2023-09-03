<template>
  <div
    id="sport-list"
  >
    <v-row>
      <v-col
        v-for="(item,i) in items"
        :key="i"
        lg="3"
        md="3"
        sm="6"
        cols="12"
      >
        <v-card>
          <v-img
            :src="require('@/assets/images/myImages/'+ item.img)"
            min-width="230"
            min-height="230"
            max-height="300"
          ></v-img>
          <v-card-title class="d-flex text-lg font-weight-bold">
            {{ item.title }}
          </v-card-title>
          <v-card-text>
            <p class="text--primary text-base">
              <span>Price: </span> {{ item.price }} €
            </p>
            <!-- 3.1GHz 6-core 10th-generation Intel Core i5 processor, Turbo Boost up to 4.5GHz -->
          </v-card-text>
          <v-card-actions class="primary pa-0">
            <v-btn
              color="primary"
              block
              dark
              large
              @click="router.push({name: carrito.action})"
            >
              <v-icon>{{ icons.mdiCartPlus }}</v-icon>
              Añadir al carrito
            </v-btn>
          </v-card-actions>
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

    const items = [
      { title: 'Nike Goalkeeper Vapor Grip3', img: 'guantes.webp', price: '94,99' },
      { title: 'Bota Fútbol X SPEEDPORTAL', img: 'botas_futbol.webp', price: '140' },
      { title: 'BALÓN AL RIHLA PRO', img: 'balon_fut.webp', price: '150' },
      { title: 'BUFANDA ESPAÑA', img: 'bufanda.webp', price: '23' },
    ]

    const carrito = { title: 'Carrito', img: 'carrito', action: 'carritoView' }

    return {
      rootThemeClasses,
      isCardDetailsVisible,
      rating,
      items,
      router,
      carrito,

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

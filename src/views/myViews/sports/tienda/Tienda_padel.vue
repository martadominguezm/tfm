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
            :src="require('@/assets/images/myImages/'+ item.img + '.jpeg')"
            min-width="230"
            min-height="230"
            max-height="300"
          ></v-img>
          <v-card-title class="d-flex text-lg font-weight-bold">
            {{ item.title }}
          </v-card-title>
          <v-card-text>
            <p class="text--primary text-base">
              <span>Price: </span>  {{ item.price }} €
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
      { title: 'Adidas Vortom Soft Lite Blue', img: 'adidas-vortom-soft-lite-blue', price: '89,99' },
      { title: 'Vertex 02 20 Bullpadel', img: 'bullpadel', price: '165' },
      { title: 'Delta Elite 2022 Head', img: 'head_padel', price: '124,95' },
      { title: 'STARVIE DRONOS GALAXY', img: 'starvie_padel', price: '139,95' },
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

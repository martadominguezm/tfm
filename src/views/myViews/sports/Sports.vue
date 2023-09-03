<template>
  <div
    id="sport-list"
  >
    <v-row>
      <v-col
        v-for="(sport,i) in sports"
        :key="i"
        lg="3"
        md="3"
        sm="6"
        cols="12"
      >
        <v-card>
          <v-img
            :src="require('@/assets/images/myImages/'+ sport.img + '.jpeg')"
            min-width="230"
            min-height="230"
          ></v-img>
          <v-card-title class="d-flex justify-center">
            {{ sport.title }}
          </v-card-title>
          <v-card-actions class="primary pa-0">
            <v-btn
              color="primary"
              block
              dark
              large
              @click="router.push({ name: sport.route})"
            >
              Entrar
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

    const sports = [
      { title: 'Pádel', img: 'padel', route: 'padelView' },
      { title: 'Tenis', img: 'tenis', route: 'tenisView' },
      { title: 'Fútbol', img: 'futbol', route: 'futbolView' },
      { title: 'Baloncesto', img: 'baloncesto', route: 'baloncestoView' },
    ]

    return {
      rootThemeClasses,
      isCardDetailsVisible,
      rating,
      sports,
      router,

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

<template>
  <div>
    <v-row>
      <!-- send request card -->
      <v-col
        md="4"
        sm="4"
        cols="12"
      >
        <v-card>
          <v-img
            class="white--text align-end"
            src="@/assets/images/pages/2.png"
            height="250"
          />
          <v-card-text class="position-relative">
            <!-- Title, Subtitle & Action Button -->
            <div class="d-flex justify-space-between flex-wrap pt-12">
              <div class="me-2 mb-2">
                <v-card-title class="pt-0 px-0">
                  TORNEO DE TENIS
                </v-card-title>
                <v-card-title class="pt-0 px-0">
                  Sábado, 15 julio
                  11:30h
                </v-card-title>
                <v-card-subtitle class="text-xs pa-0">
                  Club Alameda, Madrid
                </v-card-subtitle>
              </div>
              <v-btn
                color="primary"
                @click="router.push({name: eventoRegistrado.route})"
              >
                Apúntate
              </v-btn>
            </div>
            <!-- Mutual Friends -->
            <div class="d-flex justify-space-between align-center mt-8">
              <span class="text--primary font-weight-medium">
                5 personas apuntadas
              </span>
              <div
                class="v-avatar-group"
                :class="rootThemeClasses"
              >
                <v-avatar size="40">
                  <v-img src="@/assets/images/avatars/1.png"></v-img>
                </v-avatar>
                <v-avatar size="40">
                  <v-img src="@/assets/images/avatars/2.png"></v-img>
                </v-avatar>
                <v-avatar size="40">
                  <v-img src="@/assets/images/avatars/3.png"></v-img>
                </v-avatar>
                <v-avatar size="40">
                  <v-img src="@/assets/images/avatars/4.png"></v-img>
                </v-avatar>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- send request card -->
      <v-col
        md="4"
        sm="4"
        cols="12"
      >
        <v-card>
          <v-img
            class="white--text align-end"
            src="@/assets/images/pages/2.png"
            height="250"
          />
          <v-card-text class="position-relative">
            <!-- Title, Subtitle & Action Button -->
            <div class="d-flex justify-space-between flex-wrap pt-12">
              <div class="me-2 mb-2">
                <v-card-title class="pt-0 px-0">
                  TORNEO DE PÁDEL
                </v-card-title>
                <v-card-title class="pt-0 px-0">
                  Domingo, 16 julio
                  9:00h
                </v-card-title>
                <v-card-subtitle class="text-xs pa-0">
                  Indie Pádel Club, Madrid
                </v-card-subtitle>
              </div>
              <v-btn
                color="primary"
                @click="router.push({name: eventoRegistrado.route})"
              >
                Apúntate
              </v-btn>
            </div>
            <!-- Mutual Friends -->
            <div class="d-flex justify-space-between align-center mt-8">
              <span class="text--primary font-weight-medium">
                13 personas apuntadas
              </span>
              <div
                class="v-avatar-group"
                :class="rootThemeClasses"
              >
                <v-avatar size="40">
                  <v-img src="@/assets/images/avatars/1.png"></v-img>
                </v-avatar>
                <v-avatar size="40">
                  <v-img src="@/assets/images/avatars/2.png"></v-img>
                </v-avatar>
                <v-avatar size="40">
                  <v-img src="@/assets/images/avatars/3.png"></v-img>
                </v-avatar>
                <v-avatar size="40">
                  <v-img src="@/assets/images/avatars/4.png"></v-img>
                </v-avatar>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- send request card -->
      <v-col
        md="4"
        sm="4"
        cols="12"
      >
        <v-card>
          <v-img
            class="white--text align-end"
            src="@/assets/images/pages/2.png"
            height="250"
          />
          <v-card-text class="position-relative">
            <!-- Title, Subtitle & Action Button -->
            <div class="d-flex justify-space-between flex-wrap pt-12">
              <div class="me-2 mb-2">
                <v-card-title class="pt-0 px-0">
                  PARTIDO DE FÚTBOL 11
                </v-card-title>
                <v-card-title class="pt-0 px-0">
                  Domingo, 16 julio
                  12:00h
                </v-card-title>
                <v-card-subtitle class="text-xs pa-0">
                  Centro Deportivo Munipal Pradillo, Madrid
                </v-card-subtitle>
              </div>
              <v-btn
                color="primary"
                @click="router.push({name: eventoRegistrado.route})"
              >
                Apúntate
              </v-btn>
            </div>
            <!-- Mutual Friends -->
            <div class="d-flex justify-space-between align-center mt-8">
              <span class="text--primary font-weight-medium">
                15 personas apuntadas
              </span>
              <div
                class="v-avatar-group"
                :class="rootThemeClasses"
              >
                <v-avatar size="40">
                  <v-img src="@/assets/images/avatars/1.png"></v-img>
                </v-avatar>
                <v-avatar size="40">
                  <v-img src="@/assets/images/avatars/2.png"></v-img>
                </v-avatar>
                <v-avatar size="40">
                  <v-img src="@/assets/images/avatars/3.png"></v-img>
                </v-avatar>
                <v-avatar size="40">
                  <v-img src="@/assets/images/avatars/4.png"></v-img>
                </v-avatar>
              </div>
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
    const eventoRegistrado = { title: 'EventoRegistrado', img: 'eventos', route: 'eventoRegistradoView' }

    return {
      rootThemeClasses,
      isCardDetailsVisible,
      rating,
      router,
      eventoRegistrado,

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

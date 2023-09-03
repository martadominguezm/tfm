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
              <v-card-title>¡Te has apuntado con éxito al evento!</v-card-title>
              <v-card-text>
                Contacta con nosotros por cualquier duda que te surja hasta la fecha del evento.
              </v-card-text>
              <v-card-text>
                <v-divider></v-divider>
              </v-card-text>
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

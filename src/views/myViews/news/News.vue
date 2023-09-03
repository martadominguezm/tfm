<template>
  <div>
    <v-row>
      <!-- Apple Watch card -->
      <v-col
        lg="12"
        sm="12"
        cols="12"
        class="align-self-start"
      >
        <v-card>
          <!-- <v-img src="@/assets/images/pages/6.jpg"></v-img> -->
          <v-card-title>¡Apúntate a nuestros eventos deportivos!</v-card-title>
          <v-card-text>
            <p class="text--primary text-base">
              ¿No tienes plan este fin de semana?
            </p>
            Echa un vistazo a los eventos disponibles y apúntate a tu favorito.
          </v-card-text>
          <v-card-actions class="primary pa-0">
            <v-btn
              color="primary"
              block
              dark
              large
              @click="router.push({name: eventos.route})"
            >
              Eventos disponibles
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- Influencing The Influencer -->
      <v-col
        md="4"
        sm="6"
        cols="12"
      >
        <v-card>
          <v-img
            src="@/assets/images/pages/1.png"
            height="250"
          />
          <v-card-title>
            Influencing The Influencer
          </v-card-title>
          <v-card-text>
            Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism minister predicts Cancun will draw as many visitors in 2006 as it did two years ago.
          </v-card-text>
        </v-card>
      </v-col>
      <!-- Influencing The Influencer -->
      <v-col
        cols="12"
        lg="4"
        md="6"
      >
        <v-card>
          <v-card-title>Influencing The Influencer</v-card-title>
          <v-card-text>
            Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes with handhelds and workers in the field stay in touch.
          </v-card-text>
          <v-card-text>
            If you’re in the market for new desktops, notebooks, or PDAs, there are a myriad of choices. Here’s a rundown of some of the best systems available.
          </v-card-text>
          <v-card-text>
            The following non-standard attributes are available on some browsers.
          </v-card-text>
          <v-card-actions class="dense">
            <v-btn
              color="primary"
              text
              large
            >
              Read More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- card explore -->
      <v-col
        md="4"
        sm="6"
        cols="12"
        class="align-self-start"
      >
        <v-card>
          <v-img
            src="@/assets/images/pages/3.png"
            height="250"
          ></v-img>
          <v-card-title>
            Popular Uses Of The Internet
          </v-card-title>
          <v-card-text>
            Although cards can support multiple actions, UI controls, and an overflow menu.
          </v-card-text>
          <v-card-actions class="dense">
            <v-btn
              color="primary"
              text
            >
              Details
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              :key="isCardDetailsVisible"
              icon
              @click="expandNew"
            >
              <v-icon>
                {{ isCardDetailsVisible ? icons.mdiChevronUp : icons.mdiChevronDown }}
              </v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="isCardDetailsVisible">
              <v-divider></v-divider>
              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>

      <!-- Apple iPhone 11 Pro -->
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
                src="@/assets/images/eCommerce/2.png"
              ></v-img>
            </div>
            <v-divider :vertical="$vuetify.breakpoint.mdAndUp"></v-divider>
            <div>
              <v-card-title>
                Apple iPhone 11 Pro
              </v-card-title>
              <v-card-text>
                Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic
              </v-card-text>
              <v-card-text class="text--primary text-base">
                <span>Price :</span> <span class="font-weight-bold">$899</span>
              </v-card-text>
              <v-card-actions class="d-flex justify-space-between dense">
                <v-btn
                  text
                  color="primary"
                  dark
                >
                  <v-icon>{{ icons.mdiCartPlus }}</v-icon>
                  <span class="ms-2">Add to cart</span>
                </v-btn>
                <v-btn icon>
                  <v-icon>{{ icons.mdiShareVariantOutline }}</v-icon>
                </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
      <!-- Stumptown Roasters. -->
      <v-col
        sm="6"
        cols="12"
      >
        <v-card>
          <div class="d-flex flex-column-reverse flex-md-row">
            <div>
              <v-card-title>
                Stumptown Roasters
              </v-card-title>
              <v-card-text class="d-flex align-center flex-wrap body-1">
                <v-rating
                  v-model="rating"
                  color="warning"
                  background-color="warning"
                  dense
                  class="me-3 flex-shrink-0"
                ></v-rating>
                <span class="text-sm">5 Star | 98 reviews</span>
              </v-card-text>
              <v-card-text>
                Before there was a United States of America, there were coffee houses, because how are you supposed to build.
              </v-card-text>
              <v-card-actions class="dense">
                <v-btn
                  text
                  color="primary"
                  dark
                >
                  Location
                </v-btn>
                <v-btn
                  dark
                  text
                  color="primary"
                >
                  Reviews
                </v-btn>
              </v-card-actions>
            </div>
            <div class="pa-4">
              <v-img
                src="@/assets/images/pages/5.jpg"
                :class="$vuetify.breakpoint.mdAndUp ? 'rounded-lg':'rounded-0'"
                height="100%"
                :max-width="$vuetify.breakpoint.mdAndUp ? '220':'100%'"
              ></v-img>
            </div>
          </div>
        </v-card>
      </v-col>
      <!-- The Best Answers -->
      <v-col
        cols="12"
        md="6"
        lg="4"
      >
        <v-card>
          <v-card-title>The Best Answers</v-card-title>
          <v-card-text class="d-flex align-center flex-wrap body-1">
            <v-rating
              v-model="rating"
              color="warning"
              background-color="warning"
              dense
            ></v-rating>
            <span class="ms-3 text-sm">5 Star | 98 reviews</span>
          </v-card-text>
          <v-card-text>
            If you are looking for a new way to promote your business that won’t cost you more money, maybe printing is one of the options you won’t resist. Printing is a widely use process in making printed materials that are used for advertising.
          </v-card-text>
          <v-card-text>
            become fast, easy and simple. If you want your promotional material to be an eye-catching
          </v-card-text>
          <v-card-actions class="dense">
            <v-btn
              text
              color="primary"
              large
            >
              Location
            </v-btn>
            <v-btn
              text
              color="primary"
              large
            >
              Reviews
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- Support -->
      <v-col
        cols="12"
        md="6"
        lg="4"
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
                {{ icons.mdiHelpCircleOutline }}
              </v-icon>
            </v-avatar>
            <h6 class="text-xl mt-4 font-weight-medium">
              Support
            </h6>
          </v-card-text>
          <v-card-text>
            According to us blisters are a very common thing and we come across them very often in our daily lives. It is a very common occurrence like cold or fever depending upon your lifestyle.
          </v-card-text>
          <v-card-text>
            <v-btn
              color="primary"
              class="mt-4"
            >
              Contact Now
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Influencing The Influencer -->
      <v-col
        cols="12"
        lg="4"
        md="6"
      >
        <v-card>
          <v-card-title>Influencing The Influencer</v-card-title>
          <v-card-text>
            Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes with handhelds and workers in the field stay in touch.
          </v-card-text>
          <v-card-text>
            If you’re in the market for new desktops, notebooks, or PDAs, there are a myriad of choices. Here’s a rundown of some of the best systems available.
          </v-card-text>
          <v-card-text>
            The following non-standard attributes are available on some browsers.
          </v-card-text>
          <v-card-actions class="dense">
            <v-btn
              color="primary"
              text
              large
            >
              Read More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { saveEvent } from '@/utils'
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
    let isCardDetailsVisible = false

    const expandNew = () => {
      isCardDetailsVisible = !isCardDetailsVisible
      saveEvent({ eventType: isCardDetailsVisible ? 'EXPAND_NEW' : 'HIDE_NEW' })
    }
    const rating = ref(5)

    const { router } = useRouter()
    const eventos = { title: 'Eventos', img: 'eventos', route: 'eventosView' }

    return {
      rootThemeClasses,
      isCardDetailsVisible,
      rating,
      router,
      eventos,
      expandNew,

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

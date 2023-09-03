<template>
  <v-fade-transition mode="out-in">
    <v-icon
      :key="isDark"
      @click="switchTheme"
    >
      {{ isDark ? icons.mdiWeatherSunny : icons.mdiWeatherNight }}
    </v-icon>
  </v-fade-transition>
</template>

<script>
import { saveEvent } from '@/utils'
import useAppConfig from '@core/@app-config/useAppConfig'
import { mdiWeatherNight, mdiWeatherSunny } from '@mdi/js'

export default {
  setup() {
    const { isDark } = useAppConfig()

    const switchTheme = () => {
      isDark.value = !isDark.value
      saveEvent({ eventType: isDark.value ? 'THEME_SWITCH_DARK' : 'THEME_SWITCH_LIGHT' })
    }

    return {
      isDark,
      switchTheme,

      // Icons
      icons: {
        mdiWeatherNight,
        mdiWeatherSunny,
      },
    }
  },
}
</script>

<style>
</style>

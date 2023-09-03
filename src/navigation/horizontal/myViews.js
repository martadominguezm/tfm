import { mdiBasketball, mdiInformation, mdiNewspaper, mdiSunThermometerOutline } from '@mdi/js'

export default [
  {
    title: 'Deportes',
    icon: mdiBasketball,
    to: 'sportsView',
  },
  {
    title: 'Noticias',
    icon: mdiNewspaper,
    to: 'news',
  },
  {
    title: 'Sobre nosotros',
    icon: mdiInformation,
    to: 'aboutus',
  },
  {
    title: 'Tiempo',
    icon: mdiSunThermometerOutline,
    to: 'tiempo',
  },
]

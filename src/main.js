import DefaultLayout from '~/layouts/Default.vue'
import 'normalize.css'
import '~/assets/scss/tokens.scss'
import '~/assets/scss/global.scss'
import '~/assets/scss/syntax.scss'

export default function(Vue, { head }) {
  head.meta.push(
    {
      property: 'og:site_name',
      content: 'Brian Swank'
    },
    {
      property: 'og:locale',
      content: 'en_US'
    },
    {
      property: 'og:image:width',
      content: '1200'
    },
    {
      property: 'og:image:height',
      content: '630'
    },
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:site',
      content: '@briansw'
    },
    {
      name: 'twitter:creator',
      content: '@briansw'
    },
    {
      name: 'twitter:image',
      content: 'https://swank.dev/twitter-card-summary-image.png'
    }
  )

  Vue.component('Layout', DefaultLayout)

  Vue.mixin({
    data() {
      return {
        content: '',
        baseURL: process.env.NODE_ENV === 'production' ? 'https://swank.dev' : 'http://localhost:8888',
        prod: process.env.NODE_ENV === 'production'
      }
    }
  })
}

import DefaultLayout from '~/layouts/Default.vue'
import '@bswank/design'
import '~/assets/scss/global.scss'
import '~/assets/scss/syntax.scss'

export default function(Vue, { head }) {
  head.meta.push(
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:creator',
      content: '@briansw'
    },
    {
      name: 'twitter:image',
      content: 'https://swank.dev/twitter-card-logo.png'
    }
  )

  Vue.component('Layout', DefaultLayout)

  Vue.mixin({
    data() {
      return {
        content: '',
        prod: process.env.NODE_ENV === 'production'
      }
    }
  })
}

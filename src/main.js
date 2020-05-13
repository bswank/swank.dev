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

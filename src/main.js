import DefaultLayout from '~/layouts/Default.vue'
import '@bswank/design'
import '~/assets/scss/global.scss'
import '~/assets/scss/syntax.scss'

export default function(Vue, { head }) {
  head.script.push({
    src: 'https://cdn.usefathom.com/script.js',
    site: 'HGCDKVNJ',
    defer: true
  })

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

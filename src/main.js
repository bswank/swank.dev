import DefaultLayout from '~/layouts/Default.vue'
import '@bswank/design'
import '~/assets/scss/syntax.scss'

export default function(Vue) {
  Vue.component('Layout', DefaultLayout)
  Vue.mixin({
    data() {
      return {
        content: ''
      }
    }
  })
}

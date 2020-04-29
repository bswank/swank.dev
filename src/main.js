// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/scss/global.scss'
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

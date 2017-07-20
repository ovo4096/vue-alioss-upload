// import 'imports-loader?module=>false,define=>false,require=>false,exports=>false!@/shimming-modules/aliyun-oss-sdk.min'

import Vue from 'vue'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import app from '@/app'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(ElementUI)

let main = () => (new Vue({
  el: '#app',
  template: '<app/>',
  components: {app}
}))

main()

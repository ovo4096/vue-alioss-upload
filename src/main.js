import 'imports-loader?module=>false,define=>false,require=>false,exports=>false!@/shimming-modules/aliyun-oss-sdk.min'
import oss from '../oss.env'

import Vue from 'vue'
import App from '@/App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})

let client = new global.OSS.Wrapper({
  accessKeyId: oss.accessKey.id,
  accessKeySecret: oss.accessKey.secret,
  region: oss.bucket.region,
  bucket: oss.bucket.name
})

client.list({
  'max-keys': 10
}).then(function (result) {
  console.log(result)
}).catch(function (err) {
  console.log(err)
})

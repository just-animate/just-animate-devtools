console.clear()

import Vue from 'vue'
import App from './components/app'

// bootstrap application
new Vue({  
  el: '#app',
  render: (h) => h(App)
})
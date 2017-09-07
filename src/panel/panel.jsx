import Vue from 'vue'
import { App } from './components'
import { applyBaseStyles } from './styles/layout'

// bootstrap application
new Vue({  
  el: '#root',
  created() {
    applyBaseStyles()
  },
  render: (h) => h(App)
})
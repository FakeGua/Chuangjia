import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Icon, Search, Row, Col, Tag, List, NavBar, Swipe, SwipeItem, Toast } from 'vant'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(Button).use(Row).use(Col).use(Tag).use(List).use(Icon).use(Search).use(NavBar).use(Swipe).use(SwipeItem).use(Toast);

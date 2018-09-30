import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Icon, Search, Row, Col, Tag, List, NavBar, Swipe, SwipeItem, Toast, Collapse, CollapseItem, Field, CellGroup, Cell, Popup, Picker, PullRefresh } from 'vant'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(Button).use(Row).use(Col).use(Tag).use(List).use(Icon).use(Search).use(NavBar).use(Swipe).use(SwipeItem).use(Toast).use(Collapse).use(CollapseItem).use(Field).use(CellGroup).use(Cell).use(Popup).use(Picker).use(PullRefresh);

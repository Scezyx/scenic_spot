import Vue from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
import 'vx-easyui/dist/themes/default/easyui.css';
import 'vx-easyui/dist/themes/icon.css';
import 'vx-easyui/dist/themes/vue.css';
import EasyUI from 'vx-easyui';
Vue.use(require('vue-moment'));
// import Router from 'vue-router';
import router from './router.js'; //将路由注入根实例
// const routerPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error=> error)
// }

Vue.config.productionTip = false
Vue.use(dataV)
Vue.use(EasyUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

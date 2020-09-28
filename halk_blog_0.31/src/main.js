import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// highlight.js代码高亮插件
// from 路径是highlight.js的路径，纯属自定义
import Highlight from './components/plugins/highlight';


Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Highlight);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

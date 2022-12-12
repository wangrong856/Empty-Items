import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import i18n from '@/lang'
import components from '@/components'
import moment from 'moment'
import '@/assets/icons'
import Vant from 'vant';


// 引入vant样式
import 'vant/lib/index.css';
import "@/assets/scc/style.css"
// 引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css';

// 安装饿了吗组件
Vue.use(ElementUI);
// 安装vant样式
Vue.use(Vant);

Vue.config.productionTip = false

// 时间过滤器
moment.locale('zh-cn');
Vue.filter('dateformat', (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') =>{
    return moment(dataStr).format(pattern)
})


new Vue({
  components,
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

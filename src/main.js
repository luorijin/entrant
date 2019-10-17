import Vue from 'vue'
import App from './App.vue'
import ajax from '@/utils/ajax'
Vue.prototype.$http = ajax;
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor, {
  placeholder: '请输入内容',
})
import router from './router'
import Vant from 'vant';
import '@/assets/vant/index.css';

Vue.use(Vant);
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

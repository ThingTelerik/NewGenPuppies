import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import VueIsYourPasswordSafe from 'vue-isyourpasswordsafe';

Vue.use(VueIsYourPasswordSafe, {
	minLength: 6,
	maxLength: 30
});
Vue.config.productionTip = false


new Vue({
  render: h => h(App)
}).$mount('#app')


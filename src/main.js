import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import VueIsYourPasswordSafe from 'vue-isyourpasswordsafe';
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.use(VueIsYourPasswordSafe, {
	minLength: 6,
	maxLength: 30
});
Vue.config.productionTip = false

const router = new VueRouter({
	routes:Routes,
	mode: 'history'
})


new Vue({
	render: h => h(App),
	router:router
}).$mount('#app')


import Vue from 'vue'
import App from './App.vue'
import mayuri from '../packages/index'

Vue.config.productionTip = false

Vue.use(mayuri)

new Vue({
	render: h => h(App),
}).$mount('#app')

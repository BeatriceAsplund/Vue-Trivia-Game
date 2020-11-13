import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import StartScreen from './components/StartScreen'
import CategoriesContainer from './components/CategoriesContainer'
import Questions from './components/Questions'

const routes = [
    { path: '/startscreen', component: StartScreen },
    { path: '/categoriescontainer', component: CategoriesContainer },
    { path: '/questions', component: Questions }
]

const router = new VueRouter({routes})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)

import StartScreen from './views/StartScreen'
import CategoriesContainer from './components/CategoriesContainer'
import Questions from './views/QuestionScreen'
import EndPage from './views/EndScreen'

const routes = [
    { path: '/', component: StartScreen },
    { path: '/categoriescontainer', component: CategoriesContainer },
    { path: '/questions', name: 'QuestionScreen', component: Questions },
    {path: '/finish', name: 'EndScreen',component: EndPage}
]

const router = new VueRouter({routes})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

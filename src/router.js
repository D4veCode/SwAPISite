import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Characters from './views/Characters.vue'
import Planets from './views/Planets.vue'
import Vehicles from './views/Vehicles.vue'
import Starships from './views/Starships.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/personajes',
            name: 'personajes',
            component: Characters
        },
        {
            path: '/planetas',
            name: 'planetas',
            component: Planets
        },
        {
            path: '/naves',
            name: 'naves',
            component: Vehicles
        },
        {
            path: '/navesEstelares',
            name: 'navesEstelares',
            component: Starships
        },
    ],
    activeClass: 'active'
})
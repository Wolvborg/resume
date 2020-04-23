import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'


// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue');
const Education = () => import(/* webpackChunkName: "about" */ '../views/Education.vue');
const Experience = () => import(/* webpackChunkName: "about" */ '../views/Experience.vue');


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '*',
    redirect: "/about"
  },
  {
    path:'/',
    redirect: "/about"
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;

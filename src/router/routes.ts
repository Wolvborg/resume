import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'


// route level code-splitting
// this generates a separate chunk ([name].[hash].js) for this route
// which is lazy-loaded when the route is visited.
const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue');
const Education = () => import(/* webpackChunkName: "education" */ '../views/Education.vue');
const Skills = () => import(/* webpackChunkName: "skills" */ '../views/Skills.vue');
const Experience = () => import(/* webpackChunkName: "exp" */ '../views/Experience.vue');


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
    path: '/skills',
    name: 'Skills',
    component: Skills
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

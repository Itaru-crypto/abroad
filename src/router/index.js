import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SignUp from '../views/SignUp.vue';
import Login from '../views/Login.vue';
import Seniorsadvice from "../views/Seniorsadvice.vue";
import store from "../store/index";

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/senior',
    name: "SeniorsAdvice",
    component: Seniorsadvice,
    meta: {
      requiresAuth: true,
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.state.auth
  ) {
    next({
      path: "/",
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
    next();
  }
});

export default router

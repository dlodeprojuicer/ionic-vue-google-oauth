import { createRouter, createWebHistory } from "@ionic/vue-router";
//import { RouteRecordRaw } from 'vue-router';
import Profile from "../views/Profile.vue";
import Login from "../views/Login.vue";

import Tabs from "../views/Tabs.vue";

const routes = [
  /* Home for testing and redirect to explorer */
  {
    path: "/home",
    name: "home",
    redirect: { name: "explorer" },
  },
  /* Home for testing and redirect to explorer */

  {
    path: "/",
    redirect: "/login",
  },

  {
    path: "/login",
    name: "login",
    component: Login,
  },

  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/user/",
    component: Tabs
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

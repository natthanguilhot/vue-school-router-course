import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination/:id/:slug",
    name : "Destination.show",
    component: () =>
      import(/* webpackChunkName: "DestinationShow" */ "../views/DestinationShow.vue"),
    props: route=>({id: parseInt(route.params.id)}),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'vue-school-active-link'
});

export default router;

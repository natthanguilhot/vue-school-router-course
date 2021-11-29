import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import sourceData from "@/data.json"


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
    props: route=>({...route.params, id: parseInt(route.params.id)}),
    beforeEnter(to){
      const exists = sourceData.destinations.find(destination => destination.id === parseInt(to.params.id))
      if(!exists) return {
        name: 'NotFound',
        params: { pathMatch: to.path.split('/').slice(1)},
        query: to.query,
        hash: to.hash
      }
    },
    children:[
      {
        path: ':experienceSlug',
        name: 'experience.show',
        component: () => import (/* webpackChunkName: "ExperienceShow" */ "@/views/ExperienceShow.vue"),
        props: route => ({...route.params, id:parseInt(route.params.id)})
      }    
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import (/* webpackChunkName: "NotFound" */ "@/components/NotFound.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'vue-school-active-link',
  scrollBehavior(to, from, savedPosition){
    return savedPosition || new Promise((resolve => {
      setTimeout(()=> resolve({top: 0, behavior :'smooth'}), 300)
    }))
  },
});

export default router;

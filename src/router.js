import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Items from "@/components/Items/Items.vue";
import Details from "@/components/SingleItem/Details.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Items",
      component: Items
    },
    
    {
      path: "details/:id",
      name: "Details",
      component: Details
    }
  ]
});

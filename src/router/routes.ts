import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutView.vue")
  }
];

export default routes;

import { RouteRecordRaw } from "vue-router";
import MainLayout from "@/views/layouts/MainLayout.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "MainLayout",
    redirect: "/home",
    component: MainLayout,
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/HomeView.vue")
      },
      {
        path: "/about",
        name: "About",
        component: () => import("@/views/AboutView.vue")
      }
    ]
  }
];

export default routes;

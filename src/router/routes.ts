import { RouteRecordRaw } from "vue-router";
import MainLayout from "@/views/layouts/MainLayout.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: MainLayout
  }
];

export default routes;

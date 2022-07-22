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
      },
      {
        path: "/demo/page1",
        name: "DemoPage1",
        component: () => import("@/views/Demo/DemoView1.vue")
      },
      {
        path: "/demo/page2",
        name: "DemoPage2",
        component: () => import("@/views/Demo/DemoView2.vue")
      },
      {
        path: "/demo/page3",
        name: "DemoPage31",
        component: () => import("@/views/Demo/DemoView3.vue")
      }
    ]
  }
];

export default routes;

<script setup lang="ts">
import type { MenuOption, MenuGroupOption } from "./types";
import TIcon from "./TIcon";
import { h, inject } from "vue";
import { HomeIcon } from "@heroicons/vue/outline";
import { routeLocationKey } from "vue-router";

const currentRoute = inject(routeLocationKey);

const menus: Array<MenuOption | MenuGroupOption> = [
  {
    label: "主页",
    path: "/home",
    key: "Home",
    type: "item",
    icon: () => h(HomeIcon)
  },
  {
    label: "关于",
    path: "/about",
    key: "About",
    type: "item"
  },
  {
    label: "示例页面1",
    path: "/demo/page1",
    key: "DemoPage1",
    type: "item"
  },
  {
    label: "示例页面2",
    path: "/demo/page2",
    key: "DemoPage2",
    type: "item"
  },
  {
    label: "示例页面3",
    path: "/demo/page3",
    key: "DemoPage3",
    type: "item"
  },
  {
    label: "示例页面3",
    path: "/demo/page3",
    key: "DemoPage3",
    type: "item"
  },
  {
    label: "示例页面3",
    path: "/demo/page3",
    key: "DemoPage3",
    type: "item"
  },
  {
    label: "示例页面3",
    path: "/demo/page3",
    key: "DemoPage3",
    type: "item"
  },
  {
    label: "示例页面3",
    path: "/demo/page3",
    key: "DemoPage3",
    type: "item"
  },
  {
    label: "示例页面3",
    path: "/demo/page3",
    key: "DemoPage3",
    type: "item"
  },
  {
    label: "示例页面3",
    path: "/demo/page3",
    key: "DemoPage3",
    type: "item"
  },
  {
    label: "示例页面3",
    path: "/demo/page3",
    key: "DemoPage3",
    type: "item"
  },
  {
    label: "示例页面3",
    path: "/demo/page3",
    key: "DemoPage3",
    type: "item"
  },
  {
    label: "示例页面3",
    path: "/demo/page3",
    key: "DemoPage3",
    type: "item"
  }
];
</script>

<template>
  <div class="px-2 py-4 space-y-2">
    <div
      class="text-cyan-500 text-xs"
      v-for="match in currentRoute?.matched"
      :key="match.path"
    >
      path :{{ match.path }}, name: {{ match.name }}
    </div>
    <div v-for="menu in menus" :key="menu.key">
      <router-link
        v-if="menu.type === 'item'"
        class="pl-6 py-2 flex rounded w-full text-sm hover:bg-gray-200"
        :to="menu.path"
      >
        <t-icon></t-icon>
        {{ menu.label }}
      </router-link>
    </div>
  </div>

  <!-- force tailwindcss to generate .router-link-active styles -->
  <div class="h-0 w-0 invisible router-link-active"></div>
</template>

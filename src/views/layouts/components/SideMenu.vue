<script setup lang="ts">
import type { MenuOption, MenuGroupOption } from "./types";
const menus: Array<MenuOption | MenuGroupOption> = [
  {
    label: "主页",
    path: "/home",
    key: "Home",
    type: "item"
  },
  {
    label: "关于",
    path: "/about",
    key: "About",
    type: "item"
  }
];
</script>

<template>
  <div>
    <div v-for="menu in menus" :key="menu.key">
      <router-link
        v-if="menu.type === 'item'"
        class="pl-6 py-2 flex rounded mt-1 w-full text-sm hover:bg-gray-200"
        :to="menu.path"
      >
        {{ menu.label }}
      </router-link>
    </div>
  </div>

  <!-- force tailwindcss to generate .router-link-active styles -->
  <div class="h-0 w-0 invisible router-link-active"></div>
</template>

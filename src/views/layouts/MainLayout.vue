<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useLayoutStore } from "../../stores/layout";
import SideMenu from "./components/SideMenu.vue";

const layoutStore = useLayoutStore();
const { topBarHeightInPixel, sideBarWidthInPixel } = storeToRefs(layoutStore);
</script>

<template>
  <div class="absolute h-full w-full">
    <!-- top bar -->
    <div
      class="border-b top-0 left-0 right-0"
      :style="{ height: `${topBarHeightInPixel}px` }"
    >
      header
    </div>

    <div
      class="absolute left-0 right-0 bottom-0 flex"
      :style="{ top: `${topBarHeightInPixel}px` }"
    >
      <!-- side menu -->
      <aside
        class="border-r flex-grow-0 overflow-y-auto px-2 py-4"
        :style="{ width: `${sideBarWidthInPixel}px` }"
      >
        <side-menu></side-menu>
      </aside>

      <!-- main content -->
      <div class="bg-gray-100 flex-grow p-4 overflow-y-auto">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

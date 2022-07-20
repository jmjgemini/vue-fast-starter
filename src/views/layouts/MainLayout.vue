<script setup lang="ts">
import { UserIcon } from "@heroicons/vue/solid";
</script>

<template>
  <div
    class="absolute top-0 left-0 right-0 border-b bg-white flex justify-between items-center px-4"
    style="height: 48px"
  >
    <div class="text-gray-500 text-xl font-bold">Vue Fast Starter</div>
    <div class="flex items-center gap-x-2">
      <div class="text-sm">你好，管理员</div>
    </div>
  </div>

  <div
    class="absolute left-0 bottom-0 border-r bg-white overflow-y-auto p-4"
    style="top: 48px; width: 200px"
  >
    <ul>
      <li>
        <div
          class="flex gap-1 items-center text-sm text-gray-500 select-none hover:bg-gray-200 py-2 px-2 rounded mt-1"
          v-for="index in Array(20)"
          :key="index"
        >
          <user-icon class="h-auto w-4" />用户管理
        </div>
      </li>
    </ul>
  </div>
  <div
    class="h-full bg-gray-100 overflow-y-auto"
    style="padding-top: 48px; padding-left: 200px"
  >
    <div class="p-4">
      <h1 class="text-gray-700 text-3xl">Title</h1>

      <div
        class="w-full bg-gray-300 h-8 mt-4 rounded"
        v-for="index in Array(20)"
        :key="index"
      ></div>
    </div>
  </div>
</template>

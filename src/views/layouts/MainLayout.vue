<script setup lang="ts"></script>

<template>
  <div
    class="absolute top-0 left-0 right-0 border-b bg-white flex justify-between items-center px-4"
    style="height: 48px"
  >
    <div class="text-gray-500 text-xl font-bold">Vue Fast Starter</div>
    <div class="text-sm">你好，管理员</div>
  </div>

  <div
    class="absolute left-0 bottom-0 border-r bg-white overflow-y-auto p-4"
    style="top: 48px; width: 200px"
  >
    sidebar
  </div>
  <div
    class="h-full bg-gray-100 overflow-y-auto"
    style="padding-top: 48px; padding-left: 200px"
  >
    <div class="p-4">
      <h1 class="text-gray-700 text-3xl">Title</h1>

      <div
        class="w-full bg-gray-300 h-8 mt-4 rounded"
        v-for="(item, index) in Array(20)"
        :key="index"
      ></div>
    </div>
  </div>
</template>

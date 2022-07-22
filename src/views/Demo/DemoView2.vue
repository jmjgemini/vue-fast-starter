<script setup lang="ts"></script>

<template>
  <div class="text-2xl text-gray-900">This is Demo View2</div>
  <div
    class="h-10 w-full bg-gray-300 mt-2 rounded"
    v-for="index in Array(30)"
    :key="index"
  ></div>
</template>

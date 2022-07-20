<script setup lang="ts"></script>

<template>
  <div class="p-4">
    <router-link to="/" class="text-white bg-blue-500 rounded border px-4 py-2"
      >Home</router-link
    >
    <router-link
      to="/about"
      class="text-white bg-blue-500 rounded border px-4 py-2"
      >About</router-link
    >
    <router-view></router-view>
  </div>
</template>

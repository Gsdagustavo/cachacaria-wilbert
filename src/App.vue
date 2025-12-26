<script lang="ts" setup>
import Header from '@/components/Header.vue'
</script>

<template>
  <main class="app">
    <Header />
    <router-view />
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font:
    normal 1rem 'JetBrains Mono Regular',
    monospace;
}

.app {
  min-height: 100vh;
}
</style>

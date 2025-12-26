<script lang="ts" setup>
import router, { routes } from '@/config/navigation.ts'
</script>

<template>
  <header>
    <div class="logo">
      <div class="icon-logo">
        <img alt="Logo" src="/favicon.png" />
      </div>
      <p>Cachacaria Wilbert</p>
    </div>

    <div class="items">
      <div v-for="item in routes" :key="item.path" class="item" @click="router.push(item.path)">
        {{ item.name }}
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  background: rgb(78, 46, 27);
  padding: 6px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

header p {
  color: #fff;
  font-size: 1.2rem;
}

.icon-logo img {
  width: 100px;
}

.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.items {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
}

.item {
  color: #fff;
  cursor: pointer;
  transition:
    color 0.25s,
    font-size 0.25s;
}

.item:hover {
  color: rgb(194, 166, 117);
  font-size: 110%;
}
</style>

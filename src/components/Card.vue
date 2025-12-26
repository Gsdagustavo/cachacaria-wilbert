<script lang="ts" setup>
defineProps<{
  gap?: string
  bgColor?: string
  direction?: 'row' | 'column'
  justifyContent?: string
  marginTop?: string
}>()
</script>

<template>
  <div
    :style="{
      '--card-gap': gap,
      '--card-bg': bgColor,
      '--card-direction': direction,
      '--card-justify-content': justifyContent,
      '--card-margin-top': marginTop,
    }"
    class="card"
  >
    <slot />
  </div>
</template>

<style>
.card {
  padding: 42px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

  display: flex;
  gap: var(--card-gap, 50px);
  flex-direction: var(--card-direction, row);
  justify-content: var(--card-justify-content, center);
  margin-top: var(--card-margin-top, 0);
  background-color: var(--card-bg, #fff);
}
</style>

<template>
  <svg class="icon" viewBox="0 0 24 24" fill="none">
    <rect
      x="3"
      y="4"
      width="18"
      height="18"
      rx="2"
      :stroke="color"
      stroke-width="1.5"
    />
    <path
      d="M8 2v4M16 2v4M3 10h18"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ color?: string }>(), { color: "#9b6230" });
</script>

<style scoped>
.icon {
  display: block;
  width: 100%;
  height: 100%;
}
</style>

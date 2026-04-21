<template>
  <svg class="icon" viewBox="0 0 24 24" fill="none">
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      :stroke="color"
      stroke-width="1.5"
    />
    <path
      d="M3 9h18M3 15h18M9 3v18M15 3v18"
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

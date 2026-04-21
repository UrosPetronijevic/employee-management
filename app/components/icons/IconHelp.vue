<template>
  <svg class="icon" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" :stroke="color" stroke-width="1.5" />
    <path
      d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle
      cx="12"
      cy="17"
      r="0.5"
      :fill="color"
      :stroke="color"
      stroke-width="1"
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

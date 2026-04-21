<template>
  <svg class="icon" viewBox="0 0 24 24" fill="none">
    <path
      d="M18 20V10M12 20V4M6 20v-6"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
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

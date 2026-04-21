<template>
  <svg class="icon" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 5v14M5 12h14"
      :stroke="color"
      stroke-width="2.2"
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

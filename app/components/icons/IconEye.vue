<template>
  <svg class="icon-eye" viewBox="0 0 24 24" fill="none">
    <path
      d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z"
      :stroke="color"
      stroke-width="1.5"
    />
    <circle cx="12" cy="12" r="3" :stroke="color" stroke-width="1.5" />
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: string;
  }>(),
  {
    color: "#9b6230",
  },
);
</script>

<style scoped>
.icon-eye {
  display: block;
  width: 100%;
  height: 100%;
}
</style>

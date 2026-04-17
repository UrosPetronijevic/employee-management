<template>
  <svg class="icon-eye-off" viewBox="0 0 24 24" fill="none">
    <path
      d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <line
      x1="1"
      y1="1"
      x2="23"
      y2="23"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
    />
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
.icon-eye-off {
  display: block;
  width: 100%;
  height: 100%;
}
</style>

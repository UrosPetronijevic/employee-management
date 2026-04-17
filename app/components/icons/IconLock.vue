<template>
  <svg class="icon-lock" viewBox="0 0 24 24" fill="none">
    <rect
      x="3"
      y="11"
      width="18"
      height="11"
      rx="2"
      :stroke="color"
      stroke-width="1.5"
    />
    <path
      d="M7 11V7a5 5 0 0 1 10 0v4"
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
.icon-lock {
  display: block;
  width: 100%;
  height: 100%;
}
</style>

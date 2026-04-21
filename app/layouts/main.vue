<!-- layouts/main.vue -->
<template>
  <div class="main-layout">
    <TheHeader />
    <AppNavigation @add="isAddOpen = true" />
    <main class="main-content">
      <slot />
    </main>

    <!-- Add modal placeholder — wire up later -->
    <!-- <AddEmployeeModal v-if="isAddOpen" @close="isAddOpen = false" /> -->
  </div>
</template>

<script setup lang="ts">
const isAddOpen = ref(false);
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background: var(--color-bg-base);
}

.main-content {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
}
</style>

<template>
  <div class="icon-wrap">
    <svg
      class="icon-svg"
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  </div>
</template>

<style scoped>
.icon-wrap {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #9b623026;
  border: 1px solid #9b623033;
  backdrop-filter: blur(12px);
  border-radius: 0.5rem;
  flex-shrink: 0;
  color: #d4a574;
}

.icon-svg {
  width: 1rem;
  height: 1rem;
}
</style>

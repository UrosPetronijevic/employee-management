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
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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

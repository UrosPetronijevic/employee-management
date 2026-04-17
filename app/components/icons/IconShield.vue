<template>
  <div class="shield-wrapper">
    <svg
      class="shield-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  </div>
</template>

<style scoped>
.shield-wrapper {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgb(155, 98, 48) 0%,
    rgb(212, 165, 116) 100%
  );
  box-shadow: 0px 0px 20px rgba(155, 98, 48, 0.5);
  border-radius: 0.75rem;
}

.shield-svg {
  width: 1.25rem;
  height: 1.25rem;
  color: #2d0e1e;
}
</style>

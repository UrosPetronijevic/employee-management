<template>
  <header class="app-header">
    <div class="header-date">
      <span class="header-date__label">DATUM</span>
      <span class="header-date__value">{{ formattedDate }}</span>
    </div>

    <div class="header-center">
      <h1 class="header-center__title">Evidencija Odsustva</h1>
      <p class="header-center__sub">EMPLOYEE ABSENCE DASHBOARD</p>
    </div>

    <div class="header-user">
      <div class="header-user__info">
        <span class="header-user__label">IME I PREZIME</span>
        <span class="header-user__name">{{ displayName }}</span>
      </div>
      <button class="header-user__avatar" @click="handleLogout">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const authStore = useAuthStore();

const formattedDate = computed(() =>
  new Intl.DateTimeFormat("sr-Latn", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date()),
);

const displayName = computed(() => {
  const u = authStore.user;
  if (!u) return "";
  return u.username;
});

async function handleLogout() {
  await authStore.logout();
}
</script>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: linear-gradient(
    180deg,
    rgba(61, 14, 30, 0.6) 0%,
    rgba(26, 10, 16, 0.4) 100%
  );
  border-bottom: 1px solid var(--color-accent-20);
}

/* Date */
.header-date {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  background: var(--color-accent-15);
  border: 1px solid var(--color-accent-25);
  border-radius: 10px;
  padding: 0.6rem 1rem;
  min-width: 180px;
}

.header-date__label {
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--color-accent-light-60);
  text-transform: uppercase;
}

.header-date__value {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

/* Center */
.header-center {
  text-align: center;
}

.header-center__title {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--color-text-primary);
  letter-spacing: 0.02em;
}

.header-center__sub {
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  color: var(--color-accent-light-60);
  text-transform: uppercase;
  margin-top: 0.15rem;
}

/* User */
.header-user {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--color-accent-15);
  border: 1px solid var(--color-accent-25);
  border-radius: 10px;
  padding: 0.6rem 1rem;
  min-width: 180px;
  justify-content: flex-end;
}

.header-user__info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  text-align: right;
}

.header-user__label {
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--color-accent-light-60);
  text-transform: uppercase;
}

.header-user__name {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.header-user__avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: var(--color-accent-20);
  border: 1px solid var(--color-accent-light-30);
  color: var(--color-text-primary);
  transition: background 0.2s;
  flex-shrink: 0;
}

.header-user__avatar:hover {
  background: var(--color-accent-25);
}
</style>

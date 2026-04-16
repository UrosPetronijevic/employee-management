<!-- app/layouts/main.vue -->
<template>
  <div class="main-wrapper">
    <!-- Background glow orb -->
    <div class="glow-orb" />

    <!-- Scanlines -->
    <div class="scanlines" />

    <!-- Header -->
    <header class="app-header">
      <!-- Left: Logo + Date -->
      <div class="app-header__left">
        <div class="app-header__logo">H</div>
        <div class="app-header__date">
          <span class="date-icon">📅</span>
          {{ currentDate }}
        </div>
      </div>

      <!-- Center: Navigation -->
      <nav class="app-nav">
        <button class="app-nav__add-btn"><span>+</span> Dodaj</button>

        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="app-nav__item"
          active-class="app-nav__item--active"
        >
          <span class="app-nav__icon">{{ item.icon }}</span>
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- Right: Status + User -->
      <div class="app-header__right">
        <div class="app-header__status">
          <span class="status-dot" />
          Online
        </div>
        <div class="app-header__user" @click="toggleUserMenu">
          <span class="user-avatar">
            {{ userInitial }}
          </span>
          <span class="user-name">{{ authStore.user?.username }}</span>
        </div>

        <!-- User Dropdown -->
        <div v-if="userMenuOpen" class="user-dropdown">
          <button class="user-dropdown__item" @click="handleLogout">
            Odjavi se
          </button>
        </div>
      </div>
    </header>

    <!-- Page Content -->
    <main class="app-content">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore();

// Date
const currentDate = computed(() => {
  return new Date().toLocaleDateString("sr-RS", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
});

// User initial for avatar
const userInitial = computed(() => {
  return authStore.user?.username?.charAt(0).toUpperCase() || "U";
});

// Nav items
const navItems = [
  { label: "Početna", path: "/dashboard", icon: "⌂" },
  { label: "Profili", path: "/profiles", icon: "👤" },
  { label: "Tabele", path: "/tables", icon: "⊞" },
  { label: "Zaključavanje", path: "/keyholders", icon: "🔒" },
  { label: "Grafici", path: "/charts", icon: "📊" },
  { label: "Godišnji", path: "/annual-leave", icon: "☀" },
  { label: "Pomoć", path: "/help", icon: "?" },
];

// User menu
const userMenuOpen = ref(false);

function toggleUserMenu() {
  userMenuOpen.value = !userMenuOpen.value;
}

async function handleLogout() {
  await authStore.logout();
}

// Close menu when clicking outside
onMounted(() => {
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (
      !target.closest(".app-header__user") &&
      !target.closest(".user-dropdown")
    ) {
      userMenuOpen.value = false;
    }
  });
});
</script>

<style scoped>
.main-wrapper {
  min-height: 100vh;
  background-color: var(--color-bg-base);
  position: relative;
  overflow-x: hidden;
}

/* Glow orb */
.glow-orb {
  position: fixed;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(196, 135, 58, 0.1) 0%,
    transparent 70%
  );
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
  filter: blur(60px);
  pointer-events: none;
  z-index: 0;
}

/* Scanlines */
.scanlines {
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.03) 2px,
    rgba(0, 0, 0, 0.03) 4px
  );
  pointer-events: none;
  z-index: 1;
}

/* Header */
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border-bottom: var(--glass-border);
}

/* Left */
.app-header__left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.app-header__logo {
  width: 38px;
  height: 38px;
  background: var(--color-bg-card);
  border: var(--glass-border);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--color-accent);
  box-shadow: var(--glow-accent);
}

.app-header__date {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.85rem;
  background: var(--color-bg-card);
  border: var(--glass-border);
  border-radius: var(--radius-xl);
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

/* Nav */
.app-nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: var(--color-bg-card);
  border: var(--glass-border);
  border-radius: var(--radius-xl);
  padding: 0.35rem;
}

.app-nav__add-btn {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.4rem 0.9rem;
  background: var(--color-accent);
  color: var(--color-bg-base);
  border: none;
  border-radius: var(--radius-lg);
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 0.04em;
  transition: all var(--transition-base);
}

.app-nav__add-btn:hover {
  background: var(--color-accent-bright);
  box-shadow: var(--glow-accent);
}

.app-nav__item {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.4rem 0.8rem;
  border-radius: var(--radius-lg);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-decoration: none;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: all var(--transition-base);
}

.app-nav__item:hover {
  color: var(--color-text-primary);
  background: rgba(196, 135, 58, 0.08);
}

.app-nav__item--active {
  background: rgba(196, 135, 58, 0.15);
  color: var(--color-accent);
  box-shadow: var(--glow-accent);
}

.app-nav__icon {
  font-size: 0.85rem;
}

/* Right */
.app-header__right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
}

.app-header__status {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4caf50;
  box-shadow: 0 0 8px rgba(76, 175, 80, 0.6);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.app-header__user {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 0.85rem;
  background: var(--color-bg-card);
  border: var(--glass-border);
  border-radius: var(--radius-xl);
  cursor: pointer;
  transition: all var(--transition-base);
}

.app-header__user:hover {
  border-color: var(--color-border-active);
  box-shadow: var(--glow-accent);
}

.user-avatar {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--color-accent-crimson);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.user-name {
  font-size: 0.82rem;
  color: var(--color-text-primary);
  font-weight: 500;
}

/* Dropdown */
.user-dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: var(--color-bg-card);
  border: var(--glass-border);
  border-radius: var(--radius-md);
  padding: 0.35rem;
  min-width: 140px;
  box-shadow: var(--glow-accent);
  z-index: 200;
}

.user-dropdown__item {
  width: 100%;
  padding: 0.5rem 0.85rem;
  background: transparent;
  border: none;
  border-radius: var(--radius-sm);
  color: var(--color-text-muted);
  font-size: 0.82rem;
  text-align: left;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.user-dropdown__item:hover {
  background: rgba(196, 135, 58, 0.1);
  color: var(--color-accent);
}

/* Content */
.app-content {
  position: relative;
  z-index: 2;
  padding: 1.5rem;
}
</style>

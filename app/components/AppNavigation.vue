<!-- components/TheNav.vue -->
<template>
  <nav class="app-nav">
    <div class="nav-inner">
      <button class="nav-item nav-item--add" @click="emit('add')">
        <div class="nav-icon">
          <IconPlus />
        </div>
        <span>Dodaj</span>
      </button>

      <NuxtLink
        to="/dashboard"
        class="nav-item"
        active-class="nav-item--active"
      >
        <div class="nav-icon">
          <IconHome />
        </div>
        <span>Početna</span>
      </NuxtLink>

      <NuxtLink to="/profiles" class="nav-item" active-class="nav-item--active">
        <IconUsers />
        <span>Profili</span>
      </NuxtLink>

      <!-- Tables dropdown -->
      <div
        class="nav-item nav-item--dropdown"
        :class="{ 'nav-item--active': isTablesActive }"
        @mouseenter="tablesOpen = true"
        @mouseleave="tablesOpen = false"
      >
        <div class="nav-icon">
          <IconTable />
        </div>
        <span>Tabele</span>
        <div class="nav-chevron" :class="{ rotated: tablesOpen }">
          <IconChevron />
        </div>

        <Transition name="dropdown">
          <div v-if="tablesOpen" class="dropdown">
            <div class="dropdown-group">
              <span class="dropdown-group__label">MOR</span>
              <NuxtLink
                v-for="item in morItems"
                :key="item.to"
                :to="item.to"
                class="dropdown-item"
                active-class="dropdown-item--active"
                @click="tablesOpen = false"
              >
                {{ item.label }}
              </NuxtLink>
            </div>

            <div class="dropdown-divider" />

            <div class="dropdown-group">
              <span class="dropdown-group__label">Ostale tabele</span>
              <NuxtLink
                v-for="item in otherTableItems"
                :key="item.to"
                :to="item.to"
                class="dropdown-item"
                active-class="dropdown-item--active"
                @click="tablesOpen = false"
              >
                {{ item.label }}
              </NuxtLink>
            </div>
          </div>
        </Transition>
      </div>

      <NuxtLink
        to="/keyholders"
        class="nav-item"
        active-class="nav-item--active"
      >
        <div class="nav-icon">
          <IconLock />
        </div>
        <span>Zaključavanje</span>
      </NuxtLink>

      <NuxtLink to="/charts" class="nav-item" active-class="nav-item--active">
        <div class="nav-icon">
          <IconChart />
        </div>
        <span>Grafici</span>
      </NuxtLink>

      <NuxtLink
        to="/annual-leave"
        class="nav-item"
        active-class="nav-item--active"
      >
        <div class="nav-icon">
          <IconCalendar />
        </div>
        <span>Godišnji</span>
      </NuxtLink>

      <NuxtLink to="/help" class="nav-item" active-class="nav-item--active">
        <div class="nav-icon">
          <IconHelp />
        </div>
        <span>Pomoć</span>
      </NuxtLink>

      <!-- Logout -->
      <button class="nav-item nav-item--logout" @click="handleLogout">
        <div class="nav-icon">
          <IconLogout />
        </div>
        <span>Odjava</span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import IconCalendar from "./icons/IconCalendar.vue";
import IconChart from "./icons/IconChart.vue";
import IconChevron from "./icons/IconChevron.vue";
import IconHelp from "./icons/IconHelp.vue";
import IconHome from "./icons/IconHome.vue";
import IconLock from "./icons/IconLock.vue";
import IconLogout from "./icons/IconLogout.vue";
import IconPlus from "./icons/IconPlus.vue";
import IconTable from "./icons/IconTable.vue";
import IconUsers from "./icons/IconUsers.vue";

const emit = defineEmits<{ add: [] }>();
const route = useRoute();

const tablesOpen = ref(false);

const isTablesActive = computed(() => route.path.startsWith("/tables"));

const morItems = [
  { label: "MOR", to: "/tables/mor" },
  { label: "MOR Zadruga", to: "/tables/mor/mor-cooperative" },
  { label: "MOR PP", to: "/tables/mor/mor-pp" },
];

const otherTableItems = [
  { label: "Dodatno opterećenje", to: "/tables/additional-burden" },
  { label: "Prekovremeni rad", to: "/tables/overtime" },
  { label: "Pripravnost", to: "/tables/readiness" },
  { label: "Prevoz", to: "/tables/transport" },
];

const authStore = useAuthStore();

async function handleLogout() {
  await authStore.logout();
}
</script>

<style scoped>
.app-nav {
  background: rgba(26, 10, 16, 0.8);
  border-bottom: 1px solid var(--color-accent-20);
  padding: 0 1.5rem;
}

.nav-inner {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  height: 48px;
}

/* ── Icon wrappers ── */
.nav-icon {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
}

.nav-icon--users {
  width: 22px;
  height: 22px;
}

.nav-chevron {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  margin-left: 0.1rem;
  transition: transform 0.2s;
}

.nav-chevron.rotated {
  transform: rotate(180deg);
}

/* ── Base nav item ── */
.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-accent-light-60);
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  transition:
    color 0.2s,
    background 0.2s;
  white-space: nowrap;
  text-decoration: none;
  user-select: none;
}

.nav-item:hover {
  color: var(--color-text-primary);
  background: var(--color-accent-15);
}

.nav-item--active {
  color: var(--color-text-primary);
  background: var(--color-accent-20);
  border-color: var(--color-accent-25);
}

.nav-item--add {
  color: var(--color-text-primary);
  background: var(--color-accent-20);
  border-color: var(--color-accent-light-30);
  margin-right: 0.5rem;
}

.nav-item--add:hover {
  background: var(--color-accent-25);
}

.nav-item--dropdown {
  cursor: default;
}

/* Push logout to the far right */
.nav-item--logout {
  margin-left: auto;
  color: var(--color-accent-light-60);
}

.nav-item--logout:hover {
  color: #f87171;
  background: rgba(248, 113, 113, 0.1);
}

/* ── Dropdown panel ── */
.dropdown {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  min-width: 200px;
  background: var(--color-bg-base);
  border: 1px solid var(--color-accent-25);
  border-radius: 10px;
  padding: 0.5rem;
  z-index: 100;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.5),
    0 0 0 1px var(--color-accent-15);
}

.dropdown-group {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.dropdown-group__label {
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent-light-50);
  padding: 0.35rem 0.6rem 0.2rem;
}

.dropdown-divider {
  height: 1px;
  background: var(--color-accent-20);
  margin: 0.4rem 0;
}

.dropdown-item {
  display: block;
  padding: 0.45rem 0.6rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-accent-light-60);
  text-decoration: none;
  transition:
    color 0.15s,
    background 0.15s;
}

.dropdown-item:hover {
  color: var(--color-text-primary);
  background: var(--color-accent-15);
}

.dropdown-item--active {
  color: var(--color-text-primary);
  background: var(--color-accent-20);
}

/* ── Transition ── */
.dropdown-enter-active,
.dropdown-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>

<template>
  <nav class="app-nav">
    <div class="nav-inner">
      <button class="nav-item nav-item--add" @click="emit('add')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.2"
          stroke-linecap="round"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
        <span>Dodaj</span>
      </button>

      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="nav-item"
        active-class="nav-item--active"
      >
        <component :is="item.icon" />
        <span>{{ item.label }}</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { defineComponent, h } from "vue";

const emit = defineEmits<{ add: [] }>();

// Lightweight inline icon factory to avoid external deps
function icon(d: string | string[], extra?: Record<string, string>) {
  return defineComponent({
    render() {
      const paths = Array.isArray(d) ? d : [d];
      return h(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: 15,
          height: 15,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "1.8",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          ...extra,
        },
        paths.map((p) => h("path", { d: p })),
      );
    },
  });
}

const navItems = [
  {
    label: "Početna",
    to: "/",
    icon: icon("M3 12L12 3l9 9M4 10v10h6v-6h4v6h6V10"),
  },
  {
    label: "Profili",
    to: "/profiles",
    icon: icon([
      "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
      "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
      "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    ]),
  },
  {
    label: "Tabele",
    to: "/tables",
    icon: icon(["M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"]),
  },
  {
    label: "Zaključavanje",
    to: "/keyholders",
    icon: icon([
      "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z",
      "M7 11V7a5 5 0 0 1 10 0v4",
    ]),
  },
  {
    label: "Grafici",
    to: "/charts",
    icon: icon(["M18 20V10M12 20V4M6 20v-6"]),
  },
  {
    label: "Godišnji",
    to: "/annual-leave",
    icon: icon([
      "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
    ]),
  },
  {
    label: "Pomoć",
    to: "/help",
    icon: icon([
      "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
      "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01",
    ]),
  },
];
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

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-accent-light-60);
  background: transparent;
  border: none;
  cursor: pointer;
  transition:
    color 0.2s,
    background 0.2s;
  white-space: nowrap;
  text-decoration: none;
}

.nav-item:hover {
  color: var(--color-text-primary);
  background: var(--color-accent-15);
}

.nav-item--active {
  color: var(--color-text-primary);
  background: var(--color-accent-20);
  border: 1px solid var(--color-accent-25);
}

.nav-item--add {
  color: var(--color-text-primary);
  background: var(--color-accent-20);
  border: 1px solid var(--color-accent-light-30);
  margin-right: 0.5rem;
}

.nav-item--add:hover {
  background: var(--color-accent-25);
}
</style>

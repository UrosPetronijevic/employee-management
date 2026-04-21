import { useAuthStore } from "@/stores/useAuthStore";

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();

  const authRoutes = ["/auth/login", "/auth/register", "/auth/forgot-password"];
  const isAuthRoute = authRoutes.includes(to.path);

  // Restore session on every navigation
  authStore.restoreSession();

  // Not logged in → trying to access protected page
  if (!authStore.isAuthenticated && !isAuthRoute) {
    return navigateTo("/auth/login");
  }

  // Already logged in → trying to access auth pages
  if (authStore.isAuthenticated && isAuthRoute) {
    return navigateTo("/dashboard");
  }
});

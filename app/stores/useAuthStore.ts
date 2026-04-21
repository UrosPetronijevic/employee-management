import type { AuthUser, RegisterPayload } from "~/types/auth";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<AuthUser | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  // Replace localStorage with useCookie
  const authCookie = useCookie<AuthUser | null>("auth_user", {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    sameSite: "strict",
  });

  const isAuthenticated = computed(() => !!user.value || !!authCookie.value);
  const isAdmin = computed(() => user.value?.role === "admin");

  async function login(email: string, password: string) {
    isLoading.value = true;
    error.value = null;
    try {
      const res = await $fetch<{ success: boolean; data: AuthUser }>(
        "/api/auth/login",
        { method: "POST", body: { email, password } },
      );
      user.value = res.data;
      authCookie.value = res.data;
      return true;
    } catch (e: any) {
      error.value = e.data?.message || "Greška pri prijavi";
      return false;
    } finally {
      isLoading.value = false;
    }
  }

  async function register(payload: RegisterPayload) {
    isLoading.value = true;
    error.value = null;

    if (payload.password !== payload.confirmPassword) {
      error.value = "Lozinke se ne poklapaju";
      isLoading.value = false;
      return false;
    }

    try {
      const res = await $fetch<{ success: boolean; data: AuthUser }>(
        "/api/auth/register",
        {
          method: "POST",
          body: {
            username: payload.username,
            email: payload.email,
            password: payload.password,
          },
        },
      );
      user.value = res.data;
      authCookie.value = res.data; // ← replaces localStorage.setItem
      return true;
    } catch (e: any) {
      error.value = e.data?.message || "Greška pri registraciji";
      return false;
    } finally {
      isLoading.value = false;
    }
  }

  async function logout() {
    await $fetch("/api/auth/logout", { method: "POST" });
    user.value = null;
    authCookie.value = null; // ← replaces localStorage.removeItem
    navigateTo("/auth/login");
  }

  function restoreSession() {
    if (authCookie.value) {
      user.value = authCookie.value; // works on server AND client now
    }
  }

  return {
    user,
    isLoading,
    error,
    isAuthenticated,
    isAdmin,
    login,
    register,
    logout,
    restoreSession,
  };
});

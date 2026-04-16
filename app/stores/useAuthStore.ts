export interface AuthUser {
  id: string;
  username: string;
  email: string;
  role: "admin" | "user";
  createdAt: string;
}

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const useAuthStore = defineStore("auth", () => {
  // State
  const user = ref<AuthUser | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  // Getters
  const isAuthenticated = computed(() => !!user.value);
  const isAdmin = computed(() => user.value?.role === "admin");

  // Actions
  async function login(email: string, password: string) {
    isLoading.value = true;
    error.value = null;
    try {
      const res = await $fetch<{ success: boolean; data: AuthUser }>(
        "/api/auth/login",
        { method: "POST", body: { email, password } },
      );
      user.value = res.data;
      if (import.meta.client) {
        localStorage.setItem("auth_user", JSON.stringify(res.data));
      }
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

    // Confirm password check happens here in the store
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
          // We don't send confirmPassword to the server
          body: {
            username: payload.username,
            email: payload.email,
            password: payload.password,
          },
        },
      );
      user.value = res.data;
      if (import.meta.client) {
        localStorage.setItem("auth_user", JSON.stringify(res.data));
      }
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
    if (import.meta.client) {
      localStorage.removeItem("auth_user");
    }
    navigateTo("/auth/login");
  }

  function restoreSession() {
    if (import.meta.client) {
      const stored = localStorage.getItem("auth_user");
      if (stored) {
        user.value = JSON.parse(stored);
      }
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

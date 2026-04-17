<template>
  <div class="login-page">
    <AuthLeftPanel />

    <AuthFormWrapper
      title="Dobrodošli nazad"
      subtitle="Prijavite se na svoj nalog"
      submit-text="PRIJAVI SE"
      :loading="loading"
      bottom-prompt-text="Nemate nalog?"
      bottom-prompt-link-text="Registrujte se"
      bottom-prompt-to="/auth/register"
      @submit="handleLogin"
    >
      <template #avatar-icon>
        <IconMail />
      </template>

      <template #fields>
        <AuthInput
          v-model="form.email"
          type="email"
          placeholder="Email adresa"
          autocomplete="email"
          :icon="IconMail"
        />
        <AuthInput
          v-model="form.password"
          type="password"
          placeholder="••••••••••"
          autocomplete="current-password"
          :icon="IconLock"
        />
        <div class="form-options">
          <AppCheckbox v-model="form.rememberMe">Zapamti me</AppCheckbox>
          <NuxtLink to="/auth/forgot-password" class="forgot-link">
            Zaboravljena lozinka?
          </NuxtLink>
        </div>
      </template>
    </AuthFormWrapper>
  </div>
</template>

<script setup lang="ts">
import IconMail from "~/components/icons/IconMail.vue";
import IconLock from "~/components/icons/IconLock.vue";
import AppCheckbox from "~/components/ui/AuthCheckbox.vue";
import AuthInput from "~/components/auth/AuthInput.vue";
import AuthLeftPanel from "~/components/auth/AuthLeftPanel.vue";
import AuthFormWrapper from "~/components/auth/AuthFormWrapper.vue";

definePageMeta({ layout: "auth" });

const loading = ref(false);
const form = reactive({ email: "", password: "", rememberMe: false });

async function handleLogin() {
  loading.value = true;
  try {
    // auth logic
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped src="./login.css" />

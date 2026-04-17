<template>
  <div class="login-page">
    <AuthLeftPanel />

    <AuthFormWrapper
      title="Kreirajte nalog"
      subtitle="Registrujte se da biste počeli"
      submit-text="REGISTRUJTE SE"
      :loading="loading"
      bottom-prompt-text="Imate nalog?"
      bottom-prompt-link-text="Prijavite se"
      bottom-prompt-to="/auth/login"
      @submit="handleRegister"
    >
      <template #avatar-icon>
        <IconUsers />
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
          autocomplete="new-password"
          :icon="IconLock"
        />
        <AuthInput
          v-model="form.confirmPassword"
          type="password"
          placeholder="••••••••••"
          autocomplete="new-password"
          :icon="IconLock"
        />
      </template>
    </AuthFormWrapper>
  </div>
</template>

<script setup lang="ts">
import IconMail from "~/components/icons/IconMail.vue";
import IconLock from "~/components/icons/IconLock.vue";
import IconUsers from "~/components/icons/IconUsers.vue";
import AuthInput from "~/components/auth/AuthInput.vue";
import AuthLeftPanel from "~/components/auth/AuthLeftPanel.vue";
import AuthFormWrapper from "~/components/auth/AuthFormWrapper.vue";

definePageMeta({ layout: "auth" });

const loading = ref(false);
const form = reactive({ email: "", password: "", confirmPassword: "" });

async function handleRegister() {
  loading.value = true;
  try {
    // auth logic
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped src="./login.css" />

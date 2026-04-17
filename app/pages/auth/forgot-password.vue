<template>
  <div class="auth-page">
    <AuthLeftPanel />

    <AuthFormWrapper
      title="Resetujte lozinku"
      subtitle="Poslaćemo vam link za resetovanje"
      submit-text="POŠALJI LINK"
      :loading="loading"
      bottom-prompt-text="Sećate se lozinke?"
      bottom-prompt-link-text="Prijavite se"
      bottom-prompt-to="/auth/login"
      @submit="handleForgot"
    >
      <template #avatar-icon>
        <IconKey />
        <!-- your new SVG goes here -->
      </template>

      <template #fields>
        <AuthInput
          v-model="form.email"
          type="email"
          placeholder="Email adresa"
          autocomplete="email"
          :icon="IconMail"
        />
      </template>
    </AuthFormWrapper>
  </div>
</template>

<script setup lang="ts">
import IconMail from "~/components/icons/IconMail.vue";
import IconKey from "~/components/icons/IconKey.vue";
import AuthInput from "~/components/auth/AuthInput.vue";
import AuthLeftPanel from "~/components/auth/AuthLeftPanel.vue";
import AuthFormWrapper from "~/components/auth/AuthFormWrapper.vue";

definePageMeta({ layout: "auth" });

const loading = ref(false);
const form = reactive({ email: "" });

async function handleForgot() {
  loading.value = true;
  try {
    // auth logic
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped src="./auth.css" />

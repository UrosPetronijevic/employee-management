<template>
  <div class="right-panel">
    <div class="form-wrapper">
      <div class="email-avatar">
        <slot name="avatar-icon" />
      </div>

      <h1 class="form-title">{{ title }}</h1>
      <p class="form-subtitle">{{ subtitle }}</p>

      <form class="login-form" @submit.prevent="$emit('submit')">
        <slot name="fields" />

        <button type="submit" class="submit-btn" :disabled="loading">
          <span>{{ submitText }}</span>
          <IconArrowRight />
        </button>
      </form>

      <p class="register-prompt">
        {{ bottomPromptText }}
        <NuxtLink :to="bottomPromptTo" class="register-link">
          {{ bottomPromptLinkText }}
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconArrowRight from "~/components/icons/IconArrowRight.vue";

defineProps<{
  title: string;
  subtitle: string;
  submitText: string;
  loading?: boolean;
  bottomPromptText: string;
  bottomPromptLinkText: string;
  bottomPromptTo: string;
}>();

defineEmits<{ submit: [] }>();
</script>

<style scoped src="./AuthFormWrapper.css" />

<template>
  <div class="input-group">
    <span class="input-icon">
      <component :is="icon" />
    </span>
    <input
      :value="modelValue"
      :type="inputType"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
    <button
      v-if="type === 'password'"
      type="button"
      class="toggle-password"
      @click="showPassword = !showPassword"
    >
      <IconEyeOff v-if="!showPassword" />
      <IconEye v-else />
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Component } from "vue";
import IconEye from "~/components/icons/IconEye.vue";
import IconEyeOff from "~/components/icons/IconEyeOff.vue";

const props = defineProps<{
  modelValue: string;
  type: "email" | "password" | "text";
  placeholder: string;
  autocomplete?: string;
  icon: Component;
}>();

defineEmits<{ "update:modelValue": [value: string] }>();

const showPassword = ref(false);

const inputType = computed(() => {
  if (props.type === "password")
    return showPassword.value ? "text" : "password";
  return props.type;
});
</script>

<style scoped src="./AuthInput.css" />

<template>
  <label class="checkbox-wrapper">
    <input
      type="checkbox"
      class="checkbox-input"
      :checked="modelValue"
      @change="
        $emit('update:modelValue', ($event.target as HTMLInputElement).checked)
      "
    />
    <div class="checkbox-box">
      <svg
        v-if="modelValue"
        class="checkbox-check"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M2 6l3 3 5-5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <span class="checkbox-label">
      <slot />
    </span>
  </label>
</template>

<script setup lang="ts">
defineProps<{ modelValue: boolean }>();
defineEmits<{ "update:modelValue": [value: boolean] }>();
</script>

<style scoped>
.checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

.checkbox-box {
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: rgba(155, 98, 48, 0.1);
  border: 1px solid rgba(155, 98, 48, 0.3);
  border-radius: 0.25rem;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease;
}

.checkbox-wrapper:hover .checkbox-box {
  border-color: rgba(155, 98, 48, 0.6);
}

.checkbox-check {
  width: 0.65rem;
  height: 0.65rem;
  color: #d4a574;
}

.checkbox-label {
  color: #94a3b8;
  font-family: sans-serif;
  font-size: 0.75rem;
}
</style>

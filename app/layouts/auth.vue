<template>
  <div class="auth-wrapper">
    <!-- Background glow orbs -->
    <div class="glow-orb glow-orb--primary" />
    <div class="glow-orb glow-orb--secondary" />

    <!-- Scanline overlay -->
    <div class="scanlines" />

    <!-- Content -->
    <main class="auth-container">
      <div class="auth-brand">
        <span class="auth-brand__icon">H</span>
        <span class="auth-brand__text">Employee Management</span>
      </div>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.auth-wrapper {
  min-height: 100vh;
  background-color: var(--color-bg-base);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/* Glow orbs */
.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
}

.glow-orb--primary {
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(196, 135, 58, 0.15) 0%,
    transparent 70%
  );
  top: -100px;
  left: -100px;
}

.glow-orb--secondary {
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(139, 37, 53, 0.2) 0%,
    transparent 70%
  );
  bottom: -100px;
  right: -100px;
}

/* Scanlines */
.scanlines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.05) 2px,
    rgba(0, 0, 0, 0.05) 4px
  );
  pointer-events: none;
  z-index: 1;
}

/* Container */
.auth-container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 440px;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

/* Brand */
.auth-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.auth-brand__icon {
  width: 42px;
  height: 42px;
  background: var(--color-bg-card);
  border: var(--glass-border);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--color-accent);
  box-shadow: var(--glow-accent);
}

.auth-brand__text {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-muted);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
</style>

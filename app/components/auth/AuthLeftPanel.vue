<template>
  <div class="left-panel">
    <div class="logo">
      <div class="logo-icon">
        <IconShield />
      </div>
      <span class="logo-text">WorkFlow</span>
    </div>

    <div class="geo-stage">
      <GeoCrosshair class="geo-crosshair" />
      <GeoCompass class="geo-compass" />
    </div>

    <div class="features">
      <div class="feature-item">
        <IconUsers />
        <div>
          <p class="feature-title">Upravljanje profilima</p>
          <p class="feature-subtitle">Evidencija zaposlenih</p>
        </div>
      </div>
      <div class="feature-item">
        <IconClock />
        <div>
          <p class="feature-title">Praćenje prisustva</p>
          <p class="feature-subtitle">Dolasci i odlasci</p>
        </div>
      </div>
      <div class="feature-item">
        <IconBarChart />
        <div>
          <p class="feature-title">Izveštaji i analitika</p>
          <p class="feature-subtitle">Uvid u performanse</p>
        </div>
      </div>
    </div>

    <p class="copyright">© 2026 WorkFlow Systems. Sva prava zadržana.</p>
  </div>
</template>

<script setup lang="ts">
import IconShield from "~/components/icons/IconShield.vue";
import IconUsers from "~/components/icons/IconUsers.vue";
import IconClock from "~/components/icons/IconClock.vue";
import IconBarChart from "~/components/icons/IconBarChart.vue";
</script>

<style scoped src="./AuthLeftPanel.css" />

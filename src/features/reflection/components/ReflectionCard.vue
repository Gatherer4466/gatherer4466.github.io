<template>
  <div class="card reflection-card">
    <div class="card-content">
      <h3 class="week-title">Refleksion - Uge {{ reflection.week }}</h3>

      <section class="reflection-section">
        <h4>Viden</h4>

        <div class="reflection-block">
          <span class="label">Web</span>
          <p>{{ reflection.webReflection.knowledge }}</p>
        </div>

        <div class="reflection-block">
          <span class="label">DevOps</span>
          <p>{{ reflection.devopsReflection.knowledge }}</p>
        </div>
      </section>

      <section class="reflection-section">
        <h4>Kompetencer</h4>

        <div class="reflection-block">
          <span class="label">Web</span>
          <p>{{ reflection.webReflection.abilities }}</p>
        </div>

        <div class="reflection-block">
          <span class="label">DevOps</span>
          <p>{{ reflection.devopsReflection.abilities }}</p>
        </div>
      </section>

      <section class="reflection-section">
        <h4>Færdigheder</h4>

        <div class="reflection-block">
          <span class="label">Web</span>
          <p>{{ reflection.webReflection.skills }}</p>
        </div>

        <div class="reflection-block">
          <span class="label">DevOps</span>
          <p>{{ reflection.devopsReflection.skills }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Reflection } from '../types'

const props = defineProps<{ reflection: Reflection }>()
</script>

<style scoped>
.reflection-card {
  width: 40%;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
}

.card-content {
  height: 100%;
  padding: 18px;
  overflow-y: auto;
}

/* Week title */
.week-title {
  text-align: center;
  margin-bottom: 18px;
  color: slateblue;
  font-weight: 600;
  letter-spacing: 1px;
}

.reflection-section {
  margin-bottom: 20px;
}

.reflection-section h4 {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
  color: #41ff41;
  border-bottom: 1px solid rgba(65, 255, 65, 0.2);
  padding-bottom: 4px;
}

.reflection-block {
  margin-bottom: 12px;
}

.label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: slateblue;
  margin-bottom: 4px;
}

.reflection-block p {
  font-size: 0.8rem;
  line-height: 1.4;
  color: #00ffc8;
}
</style>

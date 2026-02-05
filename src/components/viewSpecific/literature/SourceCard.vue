<template>
  <div class="source-card">
    <h3>{{ title }}</h3>
    <p><strong>Type af kilde:</strong> {{ type }}</p>
    <p><strong>Forfatter/Organisation:</strong> {{ author }}</p>
    <p v-if="note"><strong>Note:</strong> {{ note }}</p>
    <p>
      <strong>Validitets vurdering: </strong>
      <span class="validity-score" :style="{ color: validityColor }">
        {{ validity }}
      </span>
      <span>/10</span> - {{ validityNote }}
    </p>


    <p><strong>Sidst tilgået:</strong> {{ accessed }}</p>
    <a :href="url" target="_blank" rel="noopener">Gå til kilde</a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Source } from '@/types/source'

const props = defineProps<Source>()

const validityColor = computed(() => {
  const value = Math.min(10, Math.max(0, props.validity))

  const hue = (value / 10) * 120

  return `hsl(${hue}, 70%, 45%)`
})
</script>

<style scoped>
.source-card {
  border: 1px solid #41ff41;
  border-radius: 4px;
  padding: 14px 16px;
  margin-bottom: 14px;

  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(2px);

  box-shadow:
    0 0 8px rgba(65, 255, 65, 0.15),
    inset 0 0 12px rgba(65, 255, 65, 0.05);

  text-align: left;
  overflow-wrap: anywhere;
  word-break: break-word;

  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.source-card:hover {
  box-shadow:
    0 0 14px rgba(65, 255, 65, 0.35),
    inset 0 0 16px rgba(65, 255, 65, 0.08);
  transform: translateY(-1px);
}


.source-card h3 {
  margin-top: 0;
  margin-bottom: 15px;
  color: steelblue;
}

.source-card strong,
.source-card span {
  color: slateblue;
}


.source-card p {
  margin: 4px 0;
  overflow-wrap: anywhere;
  max-width: 100ch;
  color: #00ffc8;
  text-wrap: wrap;
}

.source-card a {
  text-decoration: none;
  display: inline-block;
  margin-top: 6px;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.source-card a:hover {
  text-decoration: underline;
}

.validity-score {
  transition: text-shadow 0.2s ease, filter 0.2s ease;
}

.source-card:hover .validity-score {
  text-shadow:
    0 0 4px currentColor,
    0 0 8px currentColor,
    0 0 14px currentColor;
  filter: brightness(1.2);
}

</style>

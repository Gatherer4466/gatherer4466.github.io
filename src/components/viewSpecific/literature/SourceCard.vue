<template>
  <div class="card source-card">
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

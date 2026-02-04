<template>
  <div class="source-card">
    <h3>{{ title }}</h3>
    <p><strong>Forfatter/Organisation:</strong> {{ author }}</p>
    <p v-if="note"><strong>Note:</strong> {{ note }}</p>
    <p>
      <strong>Validitets vurdering: </strong>
      <span :style="{ color: validityColor }">
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
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 12px;
  background-color: #f9f9ff;

  text-align: left;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.source-card h3 {
  margin-top: 0;
  color: slateblue;
}

.source-card strong,
.source-card span {
  color: slateblue;
}


.source-card p {
  margin: 4px 0;
  overflow-wrap: anywhere;
  text-wrap: wrap;
}

.source-card a {
  color: slateblue;
  text-decoration: none;
  display: inline-block;
  margin-top: 6px;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.source-card a:hover {
  text-decoration: underline;
}

</style>

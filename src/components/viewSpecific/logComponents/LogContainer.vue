<template>
  <div class="card">
    <h3>{{ log.title }}</h3>
    <p><strong>Dato: </strong>{{ log.date }}</p>

    <div v-for="(block, index) in log.content" :key="index" class="content-block">
      <p v-if="block.type === 'text'">{{ block.value }}</p>
      <img
        v-else-if="block.type === 'image'"
        :src="block.src"
      />
      <img
        v-else-if="block.type === 'gif'"
        :src="block.src"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LogEntry } from '@/types/log.ts'

const props = defineProps<{ log: LogEntry }>()
</script>

<style scoped>
.card {
  background-color: #111;
  color: #00ffc8;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 8px;
}

.content-block {
  margin-top: 0.5rem;
}
.content-block img {
  display: block;
  max-width: 100%;
  margin: 0.5rem auto;
  border-radius: 4px;
}

</style>

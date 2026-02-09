<template>
  <div class="card">
    <h3>{{ log.title }}</h3>
    <p><strong>Dato: </strong>{{ log.date }}</p>

    <div v-for="(block, index) in log.content" :key="index" class="content-block">
      <p v-if="block.type === 'text'">{{ block.value }}</p>
      <img
        v-else-if="block.type === 'image' || block.type === 'gif'"
        :src="block.src"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LogEntry } from '../types.ts'

const props = defineProps<{ log: LogEntry }>()
</script>

<style scoped>
.content-block {
  margin-top: 0.5rem;
}
.content-block img {
  display: block;
  max-width: 100ch;
  margin: 0.5rem auto;
  border-radius: 4px;
}

</style>

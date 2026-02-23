<template>
  <div class="learning-filter">
  <span class="label">EMNE:</span>

  <span
    v-for="option in categoryOptions"
    :key="option.value"
    class="option"
    :class="{ active: activeCategory === option.value }"
    @click="setCategory(option.value)"
  >
    {{ option.label }}
  </span>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Category } from '../types'

const emit = defineEmits<{
  (e: 'update:category', value: 'all' | Category): void
}>()

const categoryOptions = [
  { label: 'Alle', value: 'all' },
  { label: 'Vue', value: 'vue' },
  { label: 'DevOps', value: 'devops' },
] as const

const activeCategory = ref<'all' | Category>('all')

function setCategory(value: 'all' | Category) {
  activeCategory.value = value
  emit('update:category', value)
}
</script>

<style scoped>
.learning-filter {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  margin-bottom: 10px;

  font-family: monospace;
  font-size: 0.75rem;

  color: #41ff41;
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(65, 255, 65, 0.35);
  border-radius: 4px;

  box-shadow: inset 0 0 6px rgba(65, 255, 65, 0.08);
}

.label {
  opacity: 0.8;
}

.spacer {
  width: 14px;
}

.option {
  cursor: pointer;
  padding: 0 4px;
  opacity: 0.7;
}

.option:hover {
  opacity: 1;
  text-shadow: 0 0 6px rgba(65, 255, 65, 0.6);
}

.option::before {
  content: '[';
  opacity: 0.4;
}

.option::after {
  content: ']';
  opacity: 0.4;
}

.option.active {
  opacity: 1;
  color: #00ffc8;
  text-shadow:
    0 0 6px rgba(0, 255, 200, 0.6),
    0 0 12px rgba(0, 255, 200, 0.3);
}
</style>

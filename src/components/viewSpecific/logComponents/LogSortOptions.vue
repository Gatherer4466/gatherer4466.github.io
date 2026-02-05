<template>
  <div class="log-sort">
    <span class="label">SORT:</span>

    <span
      v-for="option in sortOptions"
      :key="option.value"
      class="option"
      :class="{ active: activeSort === option.value }"
      @click="setSort(option.value)"
    >
      {{ option.label }}
    </span>

    <span class="spacer"></span>

    <span class="label">FILTER:</span>

    <span
      v-for="month in monthOptions"
      :key="month.value"
      class="option"
      :class="{ active: activeMonth === month.value }"
      @click="setMonth(month.value)"
    >
      {{ month.label }}
    </span>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

export type MonthKey = 'all' | 'feb' | 'mar' | 'apr' | 'may' | 'jun'

const emit = defineEmits<{
  (e: 'update:sort', value: 'newest' | 'oldest'): void
  (e: 'update:month', value: MonthKey | null): void
}>()

const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Oldest', value: 'oldest' },
] as const

const monthOptions = [
  { label: 'Alle', value: 'all' },
  { label: 'Feb', value: 'feb' },
  { label: 'Mar', value: 'mar' },
  { label: 'Apr', value: 'apr' },
  { label: 'May', value: 'may' },
  { label: 'Jun', value: 'jun' },
] as const

const activeSort = ref<'newest' | 'oldest'>('newest')
const activeMonth = ref<MonthKey | null>(null)

function setSort(value: 'newest' | 'oldest') {
  activeSort.value = value
  emit('update:sort', value)
}

function setMonth(value: MonthKey | null) {
  activeMonth.value = value
  emit('update:month', value)
}
</script>


<style scoped>
.log-sort {
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

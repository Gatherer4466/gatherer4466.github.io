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

    <span class="label">FILTRER EFTER EMNE:</span>

    <span
      v-for="subject in subjectOptions"
      :key="subject.value"
      class="option"
      :class="{ active: activeSubject === subject.value }"
      @click="setSubject(subject.value)"
    >
      {{ subject.label }}
    </span>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

export type SubjectKey = 'web' | 'devOps' | 'both'
export type SortKey = 'best' | 'worse' | 'id'

const emit = defineEmits<{
  (e: 'update:sort', value: SortKey): void
  (e: 'update:subject', value: SubjectKey): void
}>()

const sortOptions = [
  { label: 'Mest pålidelig', value: 'best' },
  { label: 'Mindre pålidelig', value: 'worse' },
  { label: 'ID', value: 'id' },
] as const

const subjectOptions = [
  { label: 'Begge', value: 'both' },
  { label: 'Webudvikling', value: 'web' },
  { label: 'DevOps', value: 'devOps' },
] as const

const activeSort = ref<SortKey>('best')
const activeSubject = ref<SubjectKey>('both')

function setSort(value: SortKey) {
  activeSort.value = value
  emit('update:sort', value)
}

function setSubject(value: SubjectKey) {
  activeSubject.value = value
  emit('update:subject', value)
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

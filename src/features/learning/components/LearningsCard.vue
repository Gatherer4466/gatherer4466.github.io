<template>
  <div class="card">
    <h3>{{ plan.title }}</h3>

    <LearningAccordion
      v-for="block in sortedBlocks"
      :key="block.id"
      :title="block.title"
      :knowledge="format(block.knowledge)"
      :skills="format(block.skills)"
      :competencies="format(block.competencies)"
      :isLong="block.type === 'long'"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { LearningPlan } from '../types'
import LearningAccordion from './LearningAccordion.vue'

const props = defineProps<{
  plan: LearningPlan
}>()

function format(value: string | string[]) {
  return Array.isArray(value) ? value.join('\n') : value
}

const sortedBlocks = computed(() => {
  return [...props.plan.blocks].sort((a, b) => {
    if (a.type === 'long') return -1
    if (b.type === 'long') return 1
    return 0
  })
})
</script>

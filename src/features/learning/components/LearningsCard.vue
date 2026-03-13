<template>
  <div class="card">
    <h3>{{ plan.title }}</h3>

    <LearningAccordion
      v-for="block in sortedBlocks"
      :key="block.id"
      :title="block.title"
      :knowledge="block.knowledge"
      :skills="block.skills"
      :competencies="block.competencies"
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

const sortedBlocks = computed(() => {
  return [...props.plan.blocks].sort((a, b) => {
    if (a.type === 'long') return -1
    if (b.type === 'long') return 1
    return 0
  })
})
</script>

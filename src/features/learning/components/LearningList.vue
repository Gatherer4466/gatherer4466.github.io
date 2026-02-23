<template>
  <p v-if="filteredPlans.length === 0" class="about-text">
    Jeg kan det alt sammen tydeligvis selv 🤓😎
  </p>
  <div class="cardContainer">
    <LearningCard
      v-for="plan in filteredPlans"
      :key="plan.id"
      :plan="plan"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import LearningCard from './LearningsCard.vue'
import type { LearningPlan, Category } from '../types'
import rawData from '../data.json'

const props = defineProps<{
  category: 'all' | Category
}>()

const allPlans: LearningPlan[] = rawData.plans as LearningPlan[]

const filteredPlans = computed(() => {
  if (props.category === 'all') return allPlans
  return allPlans.filter(plan => plan.category === props.category)
})
</script>

<style scoped>
.cardContainer {
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: auto;
  overflow-y: scroll;
  overflow-x: hidden;
}

.about-text {
  color: #00ffc8;
  text-align: center;
  margin-bottom: 10px;
}
</style>

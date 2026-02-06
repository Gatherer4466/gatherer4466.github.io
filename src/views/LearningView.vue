<template>
  <h2>Læringsplaner</h2>

  <LearningFilter
    @update:category="category = $event"
    @update:horizon="horizon = $event"
  />

  <LearningList
    :category="category"
    :horizon="horizon"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LearningFilter from '@/components/viewSpecific/learning/GoalSortOptions.vue'
import LearningList from '@/components/viewSpecific/learning/GoalList.vue'

const category = ref<'all' | 'vue' | 'devops'>('all')
const horizon = ref<'all' | 'short' | 'mid' | 'long'>('all')
</script>

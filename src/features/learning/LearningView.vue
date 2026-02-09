<template>
  <h2 id="infoTitle" class="titleMargin">
    <b style="color: slateblue; margin-bottom: 25px">Læringsplaner:</b>
  </h2>

  <LearningFilter
    @update:category="category = $event"
    @update:horizon="horizon = $event"
  />

  <div class="scrollable-content">
    <LearningList
      :category="category"
      :horizon="horizon"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LearningFilter from '@/features/learning/components/GoalSortOptions.vue'
import LearningList from '@/features/learning/components/GoalList.vue'

const category = ref<'all' | 'vue' | 'devops'>('all')
const horizon = ref<'all' | 'short' | 'mid' | 'long'>('all')
</script>

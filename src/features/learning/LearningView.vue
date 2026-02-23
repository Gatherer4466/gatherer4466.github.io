<template>
  <h2 class="titleMargin">
    <b style="color: slateblue;">Læringsplaner:</b>
  </h2>

  <LearningFilter
  @update:category="category = $event"
  />

  <div class="scrollable-content">
    <LearningList
    :category="category"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LearningFilter from '@/features/learning/components/LearningFilter.vue'
import LearningList from '@/features/learning/components/LearningList.vue'

const category = ref<'all' | 'vue' | 'devops'>('all')
</script>

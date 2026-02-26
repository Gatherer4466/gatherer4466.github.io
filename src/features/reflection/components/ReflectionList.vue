<template>
  <div class="card-container">
    <ReflectionCard v-for="item in reflections" :key="item.week" :reflection="item" />
  </div>
</template>

<script setup lang="ts">
import ReflectionCard from './ReflectionCard.vue'
import type { Reflection } from '../types'
import list from '../data.json'

const reflections: Reflection[] = list.reflections
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
}
</style>

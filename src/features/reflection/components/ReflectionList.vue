<template>
  <div class="card-container">
    <ReflectionCard v-for="item in reflections" :key="item.week" :reflection="item" />
  </div>
</template>

<script setup lang="ts">
import ReflectionCard from './ReflectionCard.vue'
import type { Reflection } from '../types'

const reflections = [
  {
    week: 1,
    devopsReflection: {
      knowledge: 'loremIpsum knowledge',
      abilities: 'nothing',
      skills: 'FUCK',
      type: 'devops',
    },
    webReflection: {
      knowledge: 'loremIpsum WEB',
      abilities: 'WEB NOTHING',
      skills: 'FUCK I LOVE WEB',
      type: 'web',
    },
  },
  {
    week: 2,
    devopsReflection: {
      knowledge: 'CI/CD pipelines and container basics',
      abilities: 'Set up simple deployment workflows',
      skills: 'Docker and GitHub Actions practice',
      type: 'devops',
    },
    webReflection: {
      knowledge: 'React component structure and state',
      abilities: 'Build reusable UI components',
      skills: 'Basic form handling and props usage',
      type: 'web',
    },
  },
  {
    week: 3,
    devopsReflection: {
      knowledge: 'Infrastructure as Code concepts',
      abilities: 'Provision simple cloud resources',
      skills: 'Terraform basics and environment configs',
      type: 'devops',
    },
    webReflection: {
      knowledge: 'API integration and async JavaScript',
      abilities: 'Fetch and display backend data',
      skills: 'Using fetch/axios and handling promises',
      type: 'web',
    },
  },
] as Reflection[]
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
}
</style>

<template>
  <p class="about-text" v-if="sources.length == 0">
    Jeg har tydligvis ikke brug for at læse... ellers vil der jo være noget her.
  </p>

  <div class="cardContainer">
    <SourceCard v-for="source in filteredSources" :key="source.id" v-bind="source" />
  </div>
</template>

<script setup lang="ts">
//dependencies
import { computed } from 'vue'

// components
import SourceCard from './SourceCard.vue'

// types
import type { Source } from '../types.ts'

// data
import list from '../data.json'

const props = defineProps<{
  sort: 'best' | 'worse' | 'id'
  subject: 'web' | 'devOps' | 'both'
}>()

const sources: Source[] = list.sources

const filteredSources = computed(() => {
  let rawSources = [...sources]

  if (props.subject !== 'both') {
    rawSources = rawSources.filter((source) => {
      return source.subjectKey === props.subject
    })
  }

  rawSources.sort((a, b) => {
    if (props.sort == 'best') return b.validity - a.validity

    if (props.sort == 'worse') return a.validity - b.validity

    return a.id - b.id
  })
  return rawSources
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
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

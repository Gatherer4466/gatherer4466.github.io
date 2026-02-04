<template>

<p class="about-text" v-if="sources.length == 0">Jeg har tydligvis ikke brug for at læse... ellers vil der jo være noget her.</p>

<div class="cardContainer">
  <SourceCard v-for="source in sources"
  :key="source.id"
  v-bind="source"/>
</div>
</template>


<script setup lang="ts">
// components
import SourceCard from './SourceCard.vue'

// types
import type { Source } from '@/types/source'

// data
import list from '@/types/json/sources.json'

const sources: Source[] = list.sources

console.log(sources)
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

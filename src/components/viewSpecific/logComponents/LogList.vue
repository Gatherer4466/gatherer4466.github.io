<template>
  <p class="about-text" v-if="logs.length === 0">
    Jeg har slacket hårdt... ingen logs tilgængelige
  </p>

  <div class="cardContainer">
    <LogContainer
      v-for="log in logs"
      :key="log.id"
      :log="log"
    />
  </div>
</template>

<script setup lang="ts">
// components
import LogContainer from './LogContainer.vue';
// types
import type { LogEntry } from '@/types/log.ts'

// data
import rawList from '@/types/json/logs.json'

const logs: LogEntry[] = rawList.logs as LogEntry[]

</script>

<style scoped>
.cardContainer {
  display: flex;
  flex-direction: column;
  /* width: 95%; */
  max-width: 20%;
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

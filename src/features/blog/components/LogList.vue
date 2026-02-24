<template>
  <p v-if="allLogs.length === 0" class="about-text">
    Jeg har slacket hårdt... ingen logs tilgængelige
  </p>
  <p v-if="sortedLogs.length === 0" class="about-text">
    Du har valgt en månede, som er ude i fremtiden... ellers har jeg slacket.
  </p>

  <div class="cardContainer">
    <LogContainer v-for="log in sortedLogs" :key="log.id" :log="log" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import LogContainer from './LogContainer.vue'
import type { LogEntry } from '../types.ts'
import rawList from '../data.json'

const props = defineProps<{
  sort: 'newest' | 'oldest'
  month: string | null
}>()

const allLogs: LogEntry[] = rawList.logs as LogEntry[]

const monthIndexMap = {
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
} as const

const sortedLogs = computed(() => {
  let logs = [...allLogs]

  if (props.month && props.month in monthIndexMap) {
    const targetMonth = monthIndexMap[props.month as keyof typeof monthIndexMap]

    logs = logs.filter((log) => {
      return new Date(log.date).getMonth() === targetMonth
    })
  }

  logs.sort((a, b) => {
    const aTime = new Date(a.date).getTime()
    const bTime = new Date(b.date).getTime()

    return props.sort === 'newest' ? bTime - aTime : aTime - bTime
  })

  return logs
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
  justify-content: center;
}
</style>

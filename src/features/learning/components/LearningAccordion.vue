<template>
  <div class="accordion" :class="{ long: isLong }">
    <div class="header" @click="toggle">
      <span>{{ title }}</span>
      <span>{{ open ? '-' : '+' }}</span>
    </div>

    <transition name="accordion">
      <div v-if="open" class="content">
        <h4>Viden</h4>
        <div class="lines">
          <p v-for="(item, i) in normalize(knowledge)" :key="`k-${i}`">
            {{ item }}
          </p>
        </div>

        <h4>Færdigheder</h4>
        <div class="lines">
          <p v-for="(item, i) in normalize(skills)" :key="`s-${i}`">
            {{ item }}
          </p>
        </div>

        <h4>Kompetencer</h4>
        <div class="lines">
          <p v-for="(item, i) in normalize(competencies)" :key="`c-${i}`">
            {{ item }}
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  title: string
  knowledge: string | string[]
  skills: string | string[]
  competencies: string | string[]
  isLong?: boolean
}>()

const open = ref(false)

function toggle() {
  open.value = !open.value
}

function normalize(value: string | string[]) {
  if (Array.isArray(value)) return value.map((v) => v.trim())

  return value
    .split('\n')
    .map((v) => v.replace(/^\s+/g, '').trim())
    .filter(Boolean)
}
</script>

<style scoped>
.accordion {
  border: 1px solid rgba(65, 255, 65, 0.3);
  margin-bottom: 10px;
  border-radius: 4px;
}

.accordion.long {
  border-color: aquamarine;
  box-shadow: 0 0 10px rgba(0, 255, 200, 0.2);
}

.header {
  cursor: pointer;
  padding: 10px;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: #41ff41;
}

.content {
  padding: 12px;
  background: rgba(0, 0, 0, 0.45);
  color: #00ffc8;
}

h4 {
  color: rgb(145, 255, 106);
  margin-top: 12px;
  margin-bottom: 6px;
}

.lines p {
  max-width: 100ch;
  margin: 0 auto 6px auto;
  text-align: left;
}

.lines {
  width: 100%;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.25s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>

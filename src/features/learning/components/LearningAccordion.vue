<template>
  <div class="accordion" :class="{ long: isLong }">
    <div class="header" @click="toggle">
      <span>{{ title }}</span>
      <span>{{ open ? '-' : '+' }}</span>
    </div>

    <transition name="accordion">
      <div v-if="open" class="content">

        <h4>Viden</h4>
        <ul>
          <li v-for="(item, i) in normalize(knowledge)" :key="`k-${i}`">
            {{ item }}
          </li>
        </ul>

        <h4>Færdigheder</h4>
        <ul>
          <li v-for="(item, i) in normalize(skills)" :key="`s-${i}`">
            {{ item }}
          </li>
        </ul>

        <h4>Kompetencer</h4>
        <ul>
          <li v-for="(item, i) in normalize(competencies)" :key="`c-${i}`">
            {{ item }}
          </li>
        </ul>

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
  return Array.isArray(value) ? value : [value]
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

ul {
  list-style-type: disc;
  padding-left: 18px;
  margin-bottom: 10px;
  max-width: 100ch;
  text-wrap: wrap;
}

li {
  margin-bottom: 6px;
  color: #00ffc8;
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

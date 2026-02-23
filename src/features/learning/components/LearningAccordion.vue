<template>
  <div class="accordion" :class="{ long: isLong }">
    <div class="header" @click="toggle">
      <span>{{ title }}</span>
      <span>{{ open ? '-' : '+' }}</span>
    </div>

    <transition name="accordion">
      <div v-if="open" class="content">
        <h4>Viden</h4>
        <p>{{ knowledge }}</p>

        <h4>Færdigheder</h4>
        <p>{{ skills }}</p>

        <h4>Kompetencer</h4>
        <p>{{ competencies }}</p>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  title: string
  knowledge: string
  skills: string
  competencies: string
  isLong?: boolean
}>()

const open = ref(false)

function toggle() {
  open.value = !open.value
}
</script>

<style scoped>
.accordion {
  border: 1px solid rgba(65,255,65,0.3);
  margin-bottom: 10px;
  border-radius: 4px;
}

.accordion.long {
  border-color: aquamarine;
  box-shadow: 0 0 10px rgba(0,255,200,0.2);
}

.header {
  cursor: pointer;
  padding: 10px;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}

.content {
  padding: 12px;
  background: rgba(0,0,0,0.45);
}

h4 {
  color: rgb(145, 255, 106);
  margin-top: 12px;
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

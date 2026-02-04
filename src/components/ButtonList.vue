<template>
  <div class="button-list">
    <button
      v-for="item in styledItems"
      :key="item.name"
      :style="item.style"
      @click="goToRoute(item.name)"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { routes } from '@/factories/router'


const router = useRouter()

const BASE_SIZE = 1.7
const MIN_SIZE = 0.9
const IDEAL_LENGTH = 6

function fontSizeForLabel(label: string) {
  const scale = IDEAL_LENGTH / label.length
  const size = BASE_SIZE * Math.min(1, scale)
  return `${Math.max(size, MIN_SIZE)}rem`
}

const styledItems = ref(
  routes.map((item) => ({
    ...item,
    style: {
      background: `linear-gradient(180deg, ${item.color}, black 90%)`,
      color: 'white',
      fontFamily: 'Mario, sans-serif',
      WebkitTextFillColor: 'white',
      WebkitTextStroke: '1px black',

      width: '100px',
      height: '56px',
      padding: '12px 20px',

      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',

      fontSize: fontSizeForLabel(item.name),

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  })),
)

function goToRoute(name: string) {
  router.push({ name })
}
</script>

<style scoped>
@font-face {
  font-family: 'Mario';
  src: url('../../assets/fonts/Mario-Kart-DS.ttf') format('truetype');
  font-display: swap;
}

.button-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>

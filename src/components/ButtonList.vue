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
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { routes, notFoundView } from '@/router'

const router = useRouter()

const BASE_SIZE = 1.7
const MIN_SIZE = 0.9
const IDEAL_LENGTH = 6

function fontSizeForLabel(label: string) {
  const scale = IDEAL_LENGTH / label.length
  const size = BASE_SIZE * Math.min(1, scale)
  return `${Math.max(size, MIN_SIZE)}rem`
}

function hexToRgb(hex: string) {
  const clean = hex.replace('#', '')
  const bigint = parseInt(clean, 16)
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  }
}

function rgbToHex(r: number, g: number, b: number) {
  return (
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      })
      .join('')
  )
}

function adjustColor(hex: string, percent: number) {
  const { r, g, b } = hexToRgb(hex)

  const adjust = (channel: number) =>
    Math.min(255, Math.max(0, Math.round(channel + (255 - channel) * percent)))

  const darken = (channel: number) =>
    Math.min(255, Math.max(0, Math.round(channel * (1 + percent))))

  if (percent > 0) {
    return rgbToHex(adjust(r), adjust(g), adjust(b))
  } else {
    return rgbToHex(darken(r), darken(g), darken(b))
  }
}

const styledItems = computed(() =>
  routes
    .filter((route) => route.inMenu)
    .map((item) => {
      const isPlaceholder = item.component === notFoundView
      const baseColor = !isPlaceholder && item.color ? item.color : '#cccccc'
      const lighter = adjustColor(baseColor, 0.4)
      const darker = adjustColor(baseColor, -.9)
      return {
        ...item,
        style: {
          background: `
            repeating-linear-gradient(
              45deg,
              rgba(0,0,0,0.08) 0px,
              rgba(0,0,0,0.08) 1px,
              transparent 0px,
              transparent 2px
            ),

            linear-gradient(
              180deg,
              rgba(255,255,255,0.35) 0%,
              rgba(255,255,255,0.15) 20%,
              transparent 35%
            ),

            linear-gradient(
              180deg,
              ${lighter} 0%,
              ${baseColor} 50%,
              ${darker} 100%
            )
          `,
          color: 'white',
          fontFamily: 'Mario, sans-serif',
          WebkitTextFillColor: 'white',
          WebkitTextStroke: '1px black',

          width: '100px',
          height: '40px',
          padding: '12px 20px',

          borderRadius: '2px',
          border: 'none',
          cursor: 'pointer',

          fontSize: fontSizeForLabel(item.name),

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          whiteSpace: 'nowrap',
          overflow: 'hidden',

          opacity: isPlaceholder ? 0.6 : 1,
        },
      }
    }),
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

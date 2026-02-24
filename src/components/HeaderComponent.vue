<template>
  <header class="nav1" id="top">
    <h1 style="margin-top: 0">
      <b id="rainbow" :style="{ color: rainbowColor }">Portfølje</b>
    </h1>

    <p class="smallMargin" id="sub">
      <b style="color: slateblue"
        >Dette portfølje er til formål for at dokumentere processen fra idé til produkt i løbet af
        4. semester.</b
      >
    </p>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  interval: { type: Number, default: 1000 },
})

const rainbowColor = ref<string>(getRandomColor())

let rainbowInterval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  rainbowInterval = setInterval(() => {
    rainbowColor.value = getRandomColor()
  }, props.interval)
})

onUnmounted(() => {
  if (rainbowInterval) clearInterval(rainbowInterval)
})

function getRandomColor(): string {
  const charset = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += charset[Math.floor(Math.random() * 16)]
  }
  return color
}
</script>

<style scoped>
.nav1 {
  text-align: center;
}

.smallMargin {
  margin-top: 0;
  margin-bottom: 0;
}
</style>

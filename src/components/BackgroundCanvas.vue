<template>
  <canvas ref="canvas" class="water-bg"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let animationFrameId = 0

const permutation = Array.from({ length: 256 }, () => Math.floor(Math.random() * 256))
const p = [...permutation, ...permutation]

function fade(t: number) {
  return t * t * t * (t * (t * 6 - 15) + 10)
}

function lerp(a: number, b: number, t: number) {
  return a + t * (b - a)
}

function grad(hash: number, x: number, y: number) {
  const h = hash & 3
  const u = h < 2 ? x : y
  const v = h < 2 ? y : x
  return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v)
}

function noise(x: number, y: number) {
  const X = Math.floor(x) & 255
  const Y = Math.floor(y) & 255

  const xf = x - Math.floor(x)
  const yf = y - Math.floor(y)

  const u = fade(xf)
  const v = fade(yf)

  const aa = p[p[X] + Y]
  const ab = p[p[X] + Y + 1]
  const ba = p[p[X + 1] + Y]
  const bb = p[p[X + 1] + Y + 1]

  const x1 = lerp(grad(aa, xf, yf), grad(ba, xf - 1, yf), u)
  const x2 = lerp(grad(ab, xf, yf - 1), grad(bb, xf - 1, yf - 1), u)

  return (lerp(x1, x2, v) + 1) / 2
}

type Particle = {
  x: number
  y: number
  life: number
}

const particles: Particle[] = []
const PARTICLE_COUNT = 1200
let time = 0

function createParticles(width: number, height: number) {
  particles.length = 0
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      life: Math.random() * 200 + 100,
    })
  }
}

function animate() {
  if (!ctx || !canvas.value) return

  const { width, height } = canvas.value

  ctx.fillStyle = 'rgba(5, 8, 15, 0.08)'
  ctx.fillRect(0, 0, width, height)

  ctx.lineWidth = 100
  ctx.strokeStyle = 'rgba(255, 20, 147, 0.25)'

  particles.forEach((particle) => {
    const nx = particle.x * 0.002
    const ny = particle.y * 0.002
    const angle = noise(nx + time, ny + time) * Math.PI * 2

    const vx = Math.cos(angle) * 0.6
    const vy = Math.sin(angle) * 0.6

    ctx!.beginPath()
    ctx!.moveTo(particle.x, particle.y)

    particle.x += vx
    particle.y += vy

    ctx!.lineTo(particle.x, particle.y)
    ctx!.stroke()

    particle.life--

    if (
      particle.life <= 0 ||
      particle.x < 0 ||
      particle.x > width ||
      particle.y < 0 ||
      particle.y > height
    ) {
      particle.x = Math.random() * width
      particle.y = Math.random() * height
      particle.life = Math.random() * 200 + 100
    }
  })

  time += 0.0008
  animationFrameId = requestAnimationFrame(animate)
}

function resize() {
  if (!canvas.value) return
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
  createParticles(canvas.value.width, canvas.value.height)
}

onMounted(() => {
  if (!canvas.value) return

  ctx = canvas.value.getContext('2d')
  resize()

  ctx!.fillStyle = 'rgb(5, 8, 15)'
  ctx!.fillRect(0, 0, canvas.value.width, canvas.value.height)

  animate()
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId)
  window.removeEventListener('resize', resize)
})
</script>

<style scoped>
.water-bg {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: -1;
}
</style>

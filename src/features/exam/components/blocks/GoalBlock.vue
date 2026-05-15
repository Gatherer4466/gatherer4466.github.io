<template>
  <div class="noteBlock">
    {{ block.title }}

    <h4>Viden</h4>
    <div class="lines">
      <p v-for="(item, i) in normalize(block.knowledge)" :key="`k-${i}`">• {{ item }}</p>
    </div>

    <h4>Færdigheder</h4>
    <div class="lines">
      <p v-for="(item, i) in normalize(block.skills)" :key="`s-${i}`">• {{ item }}</p>
    </div>
    <h4>Kompetencer</h4>
    <div class="lines">
      <p v-for="(item, i) in normalize(block.competencies)" :key="`c-${i}`">• {{ item }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ block: any }>()

function normalize(value: string | string[]) {
  if (Array.isArray(value)) return value.map((v) => v.trim())

  return value
    .split('\n')
    .map((v) => v.replace(/^\s+/g, '').trim())
    .filter(Boolean)
}
</script>

<style scoped>
.noteBlock {
  border-left: 4px solid #00ffc8;
  padding: 10px;
  background: rgba(0, 255, 200, 0.05);
}

h4 {
  color: rgb(145, 255, 106);
  margin-top: 12px;
  margin-bottom: 6px;
}

p {
  margin-bottom: 10px;
}
</style>

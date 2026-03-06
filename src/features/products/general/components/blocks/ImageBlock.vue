<template>
  <div class="imageBlock">
    <img :src="block.src" />

    <p v-if="block.caption" class="caption">
      {{ block.caption }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ block: any }>()
</script>

<template>
  <div class="videoBlock">
    <iframe :src="block.url" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script setup lang="ts">
defineProps<{ block: any }>()
</script>

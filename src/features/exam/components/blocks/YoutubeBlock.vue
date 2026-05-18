<template>
  <div class="youtube-block">
    <iframe
      width="560"
      height="315"
      :src="block.embedUrl"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  block: {
    embedUrl: string
  }
}>()
</script>

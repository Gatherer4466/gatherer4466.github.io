<template>
  <div class="noteBlock">
    {{ block.content }}
  </div>
</template>

<script setup lang="ts">
defineProps<{ block: any }>()
</script>

<style scoped>
.noteBlock {
  border-left: 4px solid #00ffc8;
  padding: 10px;
  background: rgba(0,255,200,0.05);
}
</style>

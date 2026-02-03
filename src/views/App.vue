<template>
  <ButtonList />
  <router-view />
  <BackgroundCanvas />
</template>

<script setup lang="ts">
import BackgroundCanvas from '@/components/BackgroundCanvas.vue'
import ButtonList from '@/components/ButtonList.vue'
</script>

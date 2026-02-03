<template>
  <NavigationMenu />
  <router-view />
  <BackgroundCanvas />
</template>

<script setup lang="ts">
import BackgroundCanvas from '@/components/BackgroundCanvas.vue'
import NavigationMenu from '@/components/NavigationMenu.vue'
</script>

<template>
  <h2 id="infoTitle" class="titleMargin">
    <b style="color: slateblue">Refleksioner for læringsplan:</b>
  </h2>

  <p style="color: #00ffc8; margin-bottom: 10px">
    &gt; her er mine refleksioner hver anden uge for mine læringsplaner.
  </p>

  <div class="scrollable-content">
    <ReflectionList />
  </div>
</template>

<script setup lang="ts">
import ReflectionList from './components/ReflectionList.vue'
</script>

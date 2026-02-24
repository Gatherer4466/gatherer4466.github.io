<template>
  <h2 id="infoTitle" class="titleMargin">
    <b style="color: slateblue; margin-bottom: 25px">Blog:</b>
  </h2>
  <p style="color: #00ffc8; margin-bottom: 10px">
    &gt; Denne blog vil som minimum blive opdateret ugentligt, men kan sagtens være sporadisk.
  </p>
  <LogSortOptions @update:sort="sort = $event" @update:month="month = $event" />

  <div class="scrollable-content">
    <LogList :sort="sort" :month="month" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LogSortOptions from './components/LogSortOptions.vue'
import LogList from './components/LogList.vue'

const sort = ref<'newest' | 'oldest'>('newest')
const month = ref<'all' | 'feb' | 'mar' | 'apr' | 'may' | 'jun'>('all')
</script>

<template>
 <h2 id="infoTitle" class="titleMargin">
    <b style="color: slateblue; margin-bottom: 25px">Kildehenvisninger:</b>
  </h2>
  <SourceSortOptions
    @update:sort="sort = $event"
    @update:subject="subject = $event"/>

  <div class="scrollable-content">
    <SourceList />
    </div>

</template>


<script setup lang="ts">
// dependencies
import { ref } from 'vue';

// components
import SourceList from './components/SourceList.vue';
import SourceSortOptions from './components/SourceSortOptions.vue';

const sort = ref<'best' | 'worse' | 'id'>('id')
const subject = ref<'web' | 'devOps' | 'both'>('both')
</script>

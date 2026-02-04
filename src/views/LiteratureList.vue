<template>
 <h2 id="infoTitle" class="titleMargin">
    <b style="color: slateblue; margin-bottom: 25px">Kildehenvisninger:</b>
  </h2>
  <div class="scrollable-content">
    <SourceList />
    </div>

</template>


<script setup lang="ts">
import SourceList from '@/components/viewSpecific/literature/SourceList.vue';
</script>

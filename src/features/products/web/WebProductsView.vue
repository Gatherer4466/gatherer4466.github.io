<template>
  <h2 id="infoTitle" class="titleMargin">
    <b style="color: slateblue;">Webudvikling underprodukter:</b>
  </h2>

  <div class="scrollable-content">
    <ProductList />
  </div>
</template>

<script setup lang="ts">
import ProductList from './components/ProductList.vue'
</script>

<template>
  <div class="card product-card">
    <h3>{{ title }}</h3>

    <p>{{ description }}</p>

    <img v-if="preview" :src="preview" alt="" class="product-preview" />

    <a :href="link" target="_blank" rel="noopener">
      Gå til projekt
    </a>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '../types'

defineProps<Product>()
</script>

<style scoped>
.product-card a {
  text-decoration: none;
  display: inline-block;
  margin-top: 8px;
}

.product-card a:hover {
  text-decoration: underline;
}

.product-gif {
  width: 100%;
  margin: 10px 0;
  border: 1px solid white;
}
</style>

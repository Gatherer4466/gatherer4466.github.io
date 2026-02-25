<template>
  <p class="about-text" v-if="products.length === 0">Ingen web-produkter endnu.</p>

  <div class="cardContainer">
    <ProductCard v-for="product in products" :key="product.id" v-bind="product" />
  </div>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import type { Product } from '../types'
import list from '../data.json'

const products: Product[] = list.products
</script>

<style scoped>
.cardContainer {
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: auto;
  overflow-y: scroll;
  overflow-x: hidden;
}

.about-text {
  color: #00ffc8;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
}
</style>

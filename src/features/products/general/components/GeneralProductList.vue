<template>
  <p v-if="products.length === 0" class="about-text">Ingen generelle produkter endnu.</p>

  <div class="scrollable-content">
    <GeneralProductCard v-for="product in sorted" :key="product.id" :product="product" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import data from '../data.json'
import type { GeneralProduct } from '../types'
import GeneralProductCard from './GeneralProductCard.vue'

const products = data.products as GeneralProduct[]

const sorted = computed(() => {
  const tempProducts = [...products]

  tempProducts.sort((a, b) => {
    const aTime = new Date(a.date).getTime()
    const bTime = new Date(b.date).getTime()

    return bTime - aTime
  })
  return tempProducts
})
</script>

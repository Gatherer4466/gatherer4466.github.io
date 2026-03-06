<template>
    <p v-if="products.length === 0" class="about-text">
      Ingen generelle produkter endnu.
    </p>

    <div class="scrollable-content">
      <GeneralProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
</template>

<script setup lang="ts">
import data from '../data.json'
import type { GeneralProduct } from '../types'
import GeneralProductCard from './GeneralProductCard.vue'

const products = data.products as GeneralProduct[]
</script>

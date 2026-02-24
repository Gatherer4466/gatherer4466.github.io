<template>
  <div class="scrollable-content">
    <DevOpsProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup lang="ts">
import data from '../data.json'
import type { DevOpsProduct } from '../types'
import DevOpsProductItem from './DevOpsProductItem.vue'

const products = data.products as DevOpsProduct[]
</script>

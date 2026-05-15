<template>
  <p v-if="products.length === 0" class="about-text">Intet information jeg føler relevant for eksamen endnu</p>

  <div class="scrollable-content">
    <ExamInfoCard v-for="product in sorted" :key="product.id" :product="product" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import data from '../data.json'
import type { ExamInformation } from '../types'
import ExamInfoCard from './ExamInfoCard.vue'

const products = data.products as ExamInformation[]

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

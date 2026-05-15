<template>
  <p v-if="products.length === 0" class="about-text">
    Intet information jeg føler relevant for eksamen endnu
  </p>

  <div class="scrollable-content">
    <ExamInfoCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script setup lang="ts">
import data from '../data.json'
import type { ExamInformation } from '../types'
import ExamInfoCard from './ExamInfoCard.vue'

const products = data.ExamInformation as ExamInformation[]
</script>

<template>
  <div class="card">
    <h3>{{ product.title }}</h3>

    <p v-if="product.date" class="smallMargin">
      <strong>Dato:</strong> {{ product.date }}
    </p>

    <p v-if="product.description">
      {{ product.description }}
    </p>

    <div class="extraInfo">
      <component class="test"
        v-for="(block, index) in product.blocks"
        :key="index"
        :is="getComponent(block.type)"
        :block="block"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GeneralProduct } from '../types'

import ImageBlock from './blocks/ImageBlock.vue'
import VideoBlock from './blocks/VideoBlock.vue'
import NoteBlock from './blocks/NoteBlock.vue'

const props = defineProps<{ product: GeneralProduct }>()

const componentMap = {
  image: ImageBlock,
  video: VideoBlock,
  note: NoteBlock
} as const

type BlockType = keyof typeof componentMap

const getComponent = (type: BlockType) => componentMap[type]
</script>

<style scoped>
.test {
  max-width: 100ch;
  text-wrap: wrap;
}


</style>

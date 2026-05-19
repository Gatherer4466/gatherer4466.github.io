<template>
  <div
    class="card"
    :id="product.slug"
    :class="{ highlighted: isHighlighted }"
  >
    <h3>{{ product.title }}</h3>

    <p v-if="product.description">
      {{ product.description }}
    </p>

    <div class="extraInfo">
      <component
        class="test"
        v-for="(block, index) in product.blocks"
        :key="index"
        :is="getComponent(block.type)"
        :block="block"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import type { ExamInformation } from '../types'

import ImageBlock from './blocks/ImageBlock.vue'
import VideoBlock from './blocks/VideoBlock.vue'
import NoteBlock from './blocks/NoteBlock.vue'
import FileBlock from './blocks/FileBlock.vue'
import GoalBlock from './blocks/GoalBlock.vue'
import YouTubeBlock from './blocks/YoutubeBlock.vue'

const props = defineProps<{ product: ExamInformation }>()

const route = useRoute()

const componentMap = {
  image: ImageBlock,
  youtube: YouTubeBlock,
  video: VideoBlock,
  note: NoteBlock,
  file: FileBlock,
  goal: GoalBlock,
} as const

type BlockType = keyof typeof componentMap

const getComponent = (type: BlockType) => componentMap[type]

const isHighlighted = computed(() => {
  return route.hash.replace('#', '') === props.product.slug
})

onMounted(() => {
  if (isHighlighted.value && props.product.slug) {
    const el = document.getElementById(props.product.slug)

    el?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }
})
</script>

<style scoped>
.test {
  max-width: 100ch;
  text-wrap: wrap;
}

.highlighted {
  border: 2px solid hotpink;
  box-shadow:
    0 0 12px hotpink,
    0 0 24px hotpink;
}

</style>

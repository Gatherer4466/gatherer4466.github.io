<template>
  <div class="card">
    <h3>{{ title }}</h3>

    <p v-html="description"></p>

    <div class="projectPreview">
      <img v-if="preview" :src="preview" :alt="`${title} preview`" :draggable="false" />
      <p style="font-style: italic">
        {{ preview ? `` : '[af en eller anden årsag har jeg ikke noget at vise her]' }}
      </p>
    </div>

    <div class="subText">
      <a :href="link" target="_blank" rel="noopener" class="tryButton"> [Prøv produktet her] </a>

      <a v-if="githubUrl" :href="githubUrl" target="_blank" rel="noopener" class="tryButton">
        [Se selve koden her]
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '../types'
import { computed } from 'vue'

const props = defineProps<Product>()

const githubUrl = computed(() => {
  if (!props.link) return ''

  try {
    const url = new URL(props.link)
    const username = url.hostname.split('.')[0]
    const repo = url.pathname.replace(/\//g, '')

    return `https://github.com/${username}/${repo}`
  } catch {
    return ''
  }
})
</script>

<style scoped>
.projectPreview {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

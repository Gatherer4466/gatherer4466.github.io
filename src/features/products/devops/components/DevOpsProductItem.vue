<template>
  <div class="card">
    <h3>{{ product.title }}</h3>
    <p>{{ product.description }}</p>

    <div class="extraInfo">
      <p><strong>Formål:</strong> {{ product.purpose }}</p>
      <p><strong>Trigger:</strong> {{ product.trigger }}</p>
    </div>

    <div class="stack" v-if="product.stack?.length">
      <span v-for="tech in product.stack" :key="tech">{{ tech }}</span>
    </div>

    <div v-for="file in product.files" :key="file.filename" class="fileBlock">
      <p class="smallMargin">
        <strong>{{ file.filename }}</strong>
      </p>

      <pre class="fileContent"><code ref="codeBlocks" class="yaml">{{ file.content }}</code></pre>
    </div>

    <div class="subText" v-if="product.repository">
      <a :href="product.repository" target="_blank" rel="noopener" class="tryButton">
        [Se filer]
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick, ref } from 'vue'
import hljs from 'highlight.js/lib/core'
import yaml from 'highlight.js/lib/languages/yaml'

hljs.registerLanguage('yaml', yaml)

const props = defineProps<{ product: any }>()

const codeBlocks = ref<HTMLElement[]>([])

onMounted(async () => {
  await nextTick()
  document.querySelectorAll('pre code.yaml').forEach((block) => {
    hljs.highlightElement(block as HTMLElement)
  })
})
</script>

<style scoped>
.fileContent {
  background: rgba(0, 0, 0, 0.85);
  padding: 12px;
  border: 1px solid #41ff41;
  border-radius: 4px;
  overflow-x: auto;
  font-family: monospace;
  font-size: 0.85rem;
  line-height: 1.4;
}

/* Stack styling */
.stack span {
  color: #ff0095;
  border: 1px solid #ff0095;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-family: monospace;
}

/* Highlight.js custom neon colors */
.hljs-keyword,
.hljs-attr,
.hljs-name {
  color: #41ff41;
}

.hljs-string {
  color: #ff0095;
}

.hljs-comment {
  color: #00ffc8;
  font-style: italic;
}

.hljs-number,
.hljs-literal {
  color: #aa00ff;
}

.hljs-variable {
  color: #830057;
}
</style>

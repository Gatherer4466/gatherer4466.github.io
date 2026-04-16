<template>
  <div class="card">
    <h3 class="title">{{ product.title }}</h3>

    <p class="productDescription">
      {{ product.description }}
    </p>

    <div class="extraInfo">
      <p><strong>Formål:</strong> {{ product.purpose }}</p>
      <p><strong>Trigger:</strong> {{ product.trigger }}</p>
    </div>

    <div class="stack" v-if="product.stack?.length">
      <span v-for="tech in product.stack" :key="tech">{{ tech }}</span>
    </div>

    <div v-for="file in product.files" :key="file.filename" class="fileBlock">
      <p class="filename">
        <strong style="color: cadetblue">{{ file.filename }}</strong>
      </p>

      <pre class="fileContent">
        <code :class="file.language">{{ file.content }}</code>
      </pre>
    </div>

    <div class="subText" v-if="product.repository">
      <a :href="product.repository" target="_blank" rel="noopener" class="tryButton">
        [Se filer]
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import hljs from 'highlight.js/lib/core'
import yaml from 'highlight.js/lib/languages/yaml'
import dockerfile from 'highlight.js/lib/languages/dockerfile'
import python from 'highlight.js/lib/languages/python'

hljs.registerLanguage('yaml', yaml)
hljs.registerLanguage('dockerfile', dockerfile)
hljs.registerLanguage('python', python)

const props = defineProps<{ product: any }>()

onMounted(async () => {
  await nextTick()
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block as HTMLElement)
  })
})
</script>

<style scoped>
.card {
  border: 1px solid #41ff41;
  border-radius: 4px;
  padding: 14px 16px;
  margin-bottom: 14px;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(2px);
  box-shadow:
    0 0 8px rgba(65, 255, 65, 0.15),
    inset 0 0 12px rgba(65, 255, 65, 0.05);
  text-align: left;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.title {
  margin-top: 0;
  margin-bottom: 10px;

  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.8px;

  color: #41ff41;

  text-shadow:
    0 0 6px rgba(65, 255, 65, 0.35),
    0 0 14px rgba(65, 255, 65, 0.15);

  padding-left: 10px;
  border-left: 3px solid #41ff41;
}

.productDescription {
  margin: 6px 0 14px 0;
  padding-left: 10px;
  border-left: 2px solid #41ff41;
  color: #00ffc8;
  font-size: 0.95rem;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

.extraInfo {
  color: #00ffc8;
  display: flex;
  align-items: flex-start !important;
  justify-content: left !important;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;
}

.stack span {
  color: #ff0095;
  border: 1px solid #ff0095;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-family: monospace;
  margin-right: 6px;
}

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

.filename {
  font-size: 2ch;
  padding-top: 2ch;
}

.subText {
  color: #00ffc8;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}

.tryButton {
  color: #830057;
}
</style>

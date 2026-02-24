<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-markup'
import 'prismjs/themes/prism-tomorrow.css'

const props = defineProps<{ code: string }>()

const highlightedCode = ref('')

function highlight(code: string) {
  highlightedCode.value = Prism.highlight(code, Prism.languages.typescript!, 'typescript')
}

onMounted(() => highlight(props.code))
watch(
  () => props.code,
  (newCode) => highlight(newCode),
)
</script>

<template>
  <pre v-html="highlightedCode" class="code-wrapper"></pre>
</template>

<style scoped>
.code-wrapper {
  background-color: #2d2d2d;
  color: #ccc;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  line-height: 1.4;
  white-space: pre; /* preserve all spacing and line breaks */
}
</style>

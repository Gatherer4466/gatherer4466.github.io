<template>
  <div class="card fileBlock">
    <h3>{{ block.title }}</h3>

    <div v-if="block.preview" class="previewWrapper">
      <img :src="block.preview" alt="Preview" />
    </div>

    <a :href="block.file" download class="downloadLink">
      ↓ Download fil
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{ block: any }>()
</script>

<style scoped>
.previewWrapper {
  justify-content: center;
  align-items: center;
  display: flex;
}

.fileBlock {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.previewWrapper img {
  width: 100%;
  max-width: 500px;
  margin-top: 10px;


}

.downloadLink {
  display: inline-block;
  margin-top: 5px;
  align-self: center;
  color: #ff0095;
  text-decoration: none;
  font-family: monospace;
}

.downloadLink:hover {
  text-decoration: underline;
}

</style>

<template>
  <h2 id="infoTitle" class="titleMargin">
    <b style="color: #4CAF50;">Produkter:</b>
  </h2>

  <div class="category-container">
    <router-link class="category-card" to="/produkter/web">
      Webudvikling
    </router-link>

    <router-link class="category-card" to="/produkter/devops">
      DevOps
    </router-link>
  </div>
</template>

<style scoped>
.category-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 95%;
  margin: auto;
}

.category-card {
  display: block;
  padding: 20px;
  border: 1px solid #41ff41;
  text-decoration: none;
  color: #41ff41;
  font-family: monospace;
  text-align: center;
  transition: 0.2s ease;
}

.category-card:hover {
  background: rgba(65, 255, 65, 0.1);
  text-shadow: 0 0 8px rgba(65, 255, 65, 0.6);
}
</style>

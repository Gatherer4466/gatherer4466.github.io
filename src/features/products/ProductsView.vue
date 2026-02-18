<template>
  <h2 id="infoTitle" class="titleMargin">
    <b style="color: slateblue;">Produkter:</b>
  </h2>

  <div class="cardContainer">
    <router-link class="card categoryBtn" to="/produkter/web">
      Webudvikling
    </router-link>

    <router-link class="card categoryBtn" to="/produkter/devops">
      DevOps
    </router-link>
  </div>
</template>

<style scoped>
.cardContainer {
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: auto;
  overflow-y: scroll;
  overflow-x: hidden;
}

.categoryBtn {
  display:block;
  padding: 20px;
  text-align: center !important;
}


.categoryBtn:hover {
  background: rgba(0, 0, 0, 0.75);

  box-shadow:
    0 0 14px rgba(65, 255, 65, 0.35),
    inset 0 0 18px rgba(65, 255, 65, 0.12);

    text-shadow: 0 0 8px rgba(255, 0, 149, 0.8);
}


</style>

<template>
  <section class="nav1" id="info">
    <h2 class="smallMargin" id="infoTitle">
      <b style="color: slateblue">Informationer:</b>
    </h2>

    <div class="subText about-text">
      <p>&gt; {{ legalName }}</p>


      <p>
        &gt; Emne 1 -
        <b style="color: slateblue">Webudvikling med fokus på </b>
        <a
          href="https://vuejs.org/"
          target="_blank"
          class="inlineLink"
        >VueJs
        </a>
      </p>

      <p>
        &gt; Emne 2 -
        <b style="color: slateblue">
          DevOps med fokus på automatisering
        </b>
      </p>
    </div>

    <hr class="divider" />
  </section>
</template>


<script setup lang="ts">
const legalName = import.meta.env.VITE_FULL_NAME

</script>

<style scoped>
.about-text {
  color: #00ffc8;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-text p {
  margin: 4px 0;
  text-align: center;
}


</style>

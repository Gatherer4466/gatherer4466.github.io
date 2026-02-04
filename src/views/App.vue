<template>
  <div id="app">
    <BackgroundCanvas />

    <main class="content">
      <table class="mainBox">
        <tbody>
          <tr>
            <th class="contentCell">
              <HeaderComponent />
            </th>

            <th class="buttonColumn" rowspan="2">
              <ButtonList />
            </th>
          </tr>
          <tr>
            <th class="contentCell">
              <DetailSection />
              <router-view />
            </th>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script setup lang="ts">
import BackgroundCanvas from '@/components/BackgroundCanvas.vue'
import ButtonList from '@/components/ButtonList.vue'
import HeaderComponent from '@/components/HeaderComponent.vue';
import DetailSection from '@/components/DetailSection.vue';
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  position: relative;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
}

</style>

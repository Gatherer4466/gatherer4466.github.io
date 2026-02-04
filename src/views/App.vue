<template>
  <div id="app">
    <BackgroundCanvas />

    <main class="content">
      <table class="mainBox">
        <tbody>
          <tr>
            <th>
               <HeaderComponent/>
            </th>
          </tr>

          <tr>
            <th>
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
// import ButtonList from '@/components/ButtonList.vue'
import HeaderComponent from '@/components/HeaderComponent.vue';
</script>

<style>
#app {
  width: 100%;
  min-height: 100vh;
  position: relative;
}

.content {
  position: relative;
  z-index: 1;
}
</style>

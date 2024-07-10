<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue';
import Menu from './components/Menu.vue';
import MyHeader from './components/MyHeader.vue';
</script>

<template>
  <Menu />
  <div className="mycontent">
    <MyHeader/>
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<style scoped> 
.logo {
  height: 6em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

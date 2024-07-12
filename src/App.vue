<script setup lang="ts">
import Menu from './components/Menu.vue';
import MyHeader from './components/MyHeader.vue';
import { defineComponent} from "vue";


</script>

<template>
  <Menu/>
  <div className="mycontent">
    <MyHeader/>
    
    <b-breadcrumb :items=items></b-breadcrumb>
    <router-view />
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

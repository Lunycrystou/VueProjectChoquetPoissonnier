<template>
  <!-- <APIDnD />-->
  <router-view/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex';
import spellSearch from './components/spellSearch.vue'

export default defineComponent({
  name: 'App',
  components: {
    spellSearch
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f3f3f3;
  height: 100vh;
  /*margin-top: 60px;*/
}
.container {
  margin-left: 5px;
  margin-right: 5px;
}
</style>
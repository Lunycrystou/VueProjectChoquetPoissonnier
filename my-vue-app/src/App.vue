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
  margin-top: 60px;
}
</style>
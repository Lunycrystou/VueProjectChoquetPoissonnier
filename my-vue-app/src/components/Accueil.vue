<template>
    <div>
        <router-link to="/spells">Sorts</router-link>
        <br/><br/>
        Bienvenue sur le site !
        <br/><br/>Nombre de visites sur le site : <!--{{nbVisites}}-->
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    computed: {
        nbVisites(){
            return $this.store.count;
        }
    }
});
</script>

<style scoped>
</style>
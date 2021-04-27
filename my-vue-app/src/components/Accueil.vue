<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd; border:1px dotted #82919b">
            <span class="navbar-brand">DnD Wiki</span>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/home" class="nav-link">Accueil</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/spells" class="nav-link">Sorts</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/species" class="nav-link">Espèces</router-link>
                </li>
            </ul>
        </nav>
        <div class="container">
            Bienvenue sur le site !
            <br/><br/>Nombre de visites sur le site : {{nbVisites}}
            <br/><br/>Nombre de recherches sur le site : {{nbRecherches}}
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
    data() {
        this.$store.commit('incrementVisite');
    },
    computed: {
        ...mapGetters({ // fait la même chose qu'en-dessous mais plus pratique s'il y a beaucoup de données à récupérer
            'nbVisites': 'getNbVisites',
            'nbRecherches' : 'getNbRecherches'
        })
        // nbVisites(){
        //     return this.$store.getters.getCount;
        // }
    }
});
</script>

<style scoped>
</style>
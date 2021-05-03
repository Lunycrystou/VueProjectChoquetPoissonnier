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
                <li class="nav-item">
                    <router-link to="/classes" class="nav-link">Classes</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/equipment" class="nav-link">Equipment</router-link>
                </li>
            </ul>
        </nav>
        <br/>
        <input type="text" v-model="filtre" />
        <br/>
        <!--{{result}}
        <br/>{{ donnees }}
        <div v-for="donnee in donnees.results" :key="donnee.id">
            {{donnee}}
        </div>-->
        <br/><div v-for="equipments in selectedEquipments" :key="equipments.index"><router-link v-bind:to="'/equipment/'+equipments.index" @click="incrementRecherches()">{{equipments?.name}}</router-link></div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue';
    import axios from 'axios';
    export default defineComponent({
        name: 'App',
        setup(){
            const donnees = ref({});
            const filtre = ref('');
            const result = ref('hi');
            /*const options = {
            headers: {
                'x-rapidapi-key': '8f63c7eeddmsh9c1c7a90ad44690p1ae244jsn86d02298a4b9',
                'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
            },
            };*/
            axios
            .get('https://www.dnd5eapi.co/api/equipment'/*, options*/)
            .then(function (response) {
                donnees.value = response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
            return {
                donnees,
                filtre,
                result,
            };
        },
        computed: {
            /*filteredList() {
                return this.donnees.index.filter(donnee => {
                    return donnee.index.toLowerCase().indexOf(this.filtre.toLowerCase()) > -1
                });
                /*return this.donnes.result.filter(post => {
                return index.toLowerCase().includes(this.search.toLowerCase())
            },*/
            
            selectedEquipments(){
                return this.donnees.results?.filter( donnee => donnee.name.toLowerCase().includes(this.filtre.toLowerCase()));
            }
        },
        methods: {
            searchByName(filtre){
                if(filtre != ''){
                    this.result = "hi ! tu cherches les infos pour " + filtre;
                    // Donc ici il faut faire une requête à l'api pour recup les données du spell ?
                }else{
                    this.result = "rentrez une catégorie (ex : spell, classes...) !";
                }
            },
            incrementRecherches(){
                this.$store.commit('incrementRecherche');
            }
        },
    });
</script>

<style scoped>
</style>
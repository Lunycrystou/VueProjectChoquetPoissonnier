<template>
    <div>
        <input type="text" v-model="filtre" />
        <button @click="searchByCategory(filtre)">Lancer la recherche</button>
        <br/>
        <!--{{result}}
        <br/>{{ donnees }}
        <div v-for="donnee in donnees.results" :key="donnee.id">
            {{donnee}}
        </div>-->
        <div v-for="spell in selectedSpells" :key="spell.index">{{spell?.name}} || {{spell?.url}}</div>
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
            .get('https://www.dnd5eapi.co/api/spells'/*, options*/)
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
            
            selectedSpells(){
                return this.donnees.results?.filter( donnee => donnee.name.toLowerCase().includes(this.filtre.toLowerCase()));
            }
        },
        methods: {
            searchByCategory(filtre){
                if(filtre != ''){
                    this.result = "hi ! tu cherches pour le filtre " + filtre;
                }else{
                    this.result = "rentrez une catégorie (ex : spell, classes...) !";
                }
            }
        },
    });
</script>

<style scoped>
</style>
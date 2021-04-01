<template>
    <div>
        {{donnees}}
    </div>
</template>

<script>
    import { defineComponent, ref } from 'vue';
    import axios from 'axios';
    export default defineComponent({
        name: 'App',
        setup(){
            const donnees = ref({});
            axios
            .get('https://www.dnd5eapi.co/api/spells'+nom/*ici la valeur transmise dans l'url*/)
            .then(function (response) {
                donnees.value = response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
            return {
                donnees,
            };
        },
        props(){
            nom: String
        },
    });
</script>

<style scoped>
</style>
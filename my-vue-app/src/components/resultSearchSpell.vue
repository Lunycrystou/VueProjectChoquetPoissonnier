<template>
    <div>
        {{$route.params.name}}
        {{donnees}}
    </div>
</template>

<script>
    import { defineComponent, ref } from 'vue';
    import { useRoute } from 'vue-router';
    import axios from 'axios';
    export default defineComponent({
        name: 'App',
        setup(){
            const donnees = ref({});
            const route = useRoute();
            const name = route.params.name;
            axios
            .get('https://www.dnd5eapi.co/api/spells/'+name/*ici la valeur transmise dans l'url*/)
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
    });
</script>

<style scoped>
</style>
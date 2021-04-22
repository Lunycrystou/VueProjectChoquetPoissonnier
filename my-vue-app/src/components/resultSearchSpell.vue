<template>
    <div>
       <!--{{$route.params.name}}-->
       <h3 style="display:inline">{{donnees.name}} </h3> <p v-if="donnees.ritual" style="display:inline">R</p> <p v-if="donnees.concentration" style="display:inline">C</p>
        <table>
            <tr>
                <td><p>LEVEL:</p><p>{{donnees.level}}</p></td>
                <div><p>CASTING TIME :</p><p>{{donnees.casting_time}}</p></div>
                <td><p>RANGE :</p><p>{{donnees.range}}</p></td>
                
            </tr>

            
            <tr>
                <td><p>COMPONENTS :</p> <p>{{donnees.components}}</p></td>
                <td><p>DURATION :</p><p>{{donnees.duration}}</p></td>
                <td><p>SCHOOL:</p><p>{{donnees.school.name}}</p></td>
            </tr>
            <tr></tr>
        </table>
        <div><p v-for="donnee in donnees.desc">{{donnee}}</p></div>
        <div v-if="donnees.material!=null">*{{donnees.material}}</div>
        <!--<div> <p style="display:inline" v-for="class in donnees.classes" :key="class.index">{{class.name}}</p> </div>-->
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
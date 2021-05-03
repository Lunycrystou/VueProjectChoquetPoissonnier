<template>
    <div v-if="donnees">
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
        <div class="container">
            <h3 style="display:inline; text-align: center;">{{donnees.name}} </h3>
            <br/><br/>
            <p v-if="donnees.ritual" style="display:inline">R</p> <p v-if="donnees.concentration" style="display:inline">C</p>
            <table class="table table-striped">
                <tr>
                    <th scope="col">LEVEL:</th>
                    <th scope="col">CASTING TIME :</th>
                    <th scope="col">RANGE :</th>
                </tr>
                <tr>
                    <td scope="row">{{donnees.level}}</td>
                    <td>{{donnees.casting_time}}</td>
                    <td>{{donnees.range}}</td>
                </tr>
                <tr>
                    <th scope="col">COMPONENTS :</th>
                    <th scope="col">DURATION :</th>
                    <th scope="col">SCHOOL:</th>
                </tr>
                <tr>
                    <td scope="row"><span v-for="(donnee,index) in donnees.components" :key="index">{{donnee}}<span v-if="index !== (donnees.components.length-1)">,</span></span></td>
                    <td>{{donnees.duration}}</td>
                    <td>{{donnees.school.name}}</td>
                </tr>
                <tr></tr> 
            </table>
            <!--<div v-for="(donnee, index) in donnees.desc" :key="index" > <span v-if="index !== donnes.desc.length -1">,</span></div>-->
            <div><p v-for="donnee in donnees.desc" :key="donnee">{{donnee}}</p></div>
            <div v-if="donnees.material!=null">*{{donnees.material}}</div>
            <div> 
                <span v-for="(c,index) in donnees.classes" :key="index">{{c.name}}<span v-if="index !== (donnees.classes.length-1)">,</span></span>
                <span v-if="donnees.subclasses && donnees.classes">,</span><span v-for="(c,index) in donnees.subclasses" :key="index">{{c.name}}<span v-if="index !== (donnees.subclasses.length-1)">,</span></span>
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent, ref } from 'vue';
    import { useRoute } from 'vue-router';
    import axios from 'axios';
    export default defineComponent({
        name: 'App',
        setup(){    
            const donnees = ref(null);
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
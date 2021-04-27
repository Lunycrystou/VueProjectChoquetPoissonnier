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
            </ul>
        </nav>
        <p class="h1">{{donnees.name}}</p>
        <p class="h2"><i>{{donnees.name}} particularités</i></p>
        <br/>
        <div style="text-align:justify;">
        <p><b>Age.</b> {{donnees.age}}</p>
        <p><b>Alignment.</b> {{donnees.alignment}} </p>
        <p><b>Size.</b>{{donnees.size}}</p>
        <p><b>Speed.</b>{{donnees.speed}}ft</p>
        <p><b>Languages.</b>{{donnees.language_desc}}</p>
        {{traits}}
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
            const traits = ref(null);
            const route = useRoute();
            const name = route.params.name;
            axios.all(
                [axios.get('https://www.dnd5eapi.co/api/races/'+name/*ici la valeur transmise dans l'url*/)],
                [axios.get('https://www.dnd5eapi.co/api/traits')]
            )
            .then(axios.spread(function(response_one, response_two){
                donnees.value = response_one.data;
                traits.value = response_two.data;
            }))
            .catch(function (error) {
                console.error(error);
            });
            return {
                donnees,
                traits,
            };
        },
    });
</script>
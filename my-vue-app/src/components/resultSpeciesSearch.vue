<template>
    <div v-if="donnees != null && traits != null">
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
        <!-- <p class="h2"><i>{{donnees.name}} particularities</i></p> -->
        <br/>
        <div style="text-align:justify;margin: 1em">
            <p><b>Age.</b><br/>{{donnees.age}}</p>
            <p><b>Alignment.</b><br/>{{donnees.alignment}} </p>
            <p><b>Size.</b><br/>{{donnees.size}}</p>
            <p><b>Speed.</b><br/>{{donnees.speed}}ft</p>
            <p><b>Languages.</b><br/>{{donnees.language_desc}}</p>
            <p><b>Traits.<br/></b>
            <!-- Les informations de traits disparaissent dés que l'on refresh la pag
            fix simple : modifier un element de la page et faire ctrl+s
             -->
            <span v-for="(c,index) in traits" :key="index"><b>{{c.name}}</b><br/>
            <p v-for="(i,index) in c.desc" :key="index">{{i}}</p></span></p>
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
            axios.get('https://www.dnd5eapi.co/api/races/'+name/*ici la valeur transmise dans l'url*/)
            .then(function(response_one){
                donnees.value = response_one.data;
                let traitindex = donnees.value.traits;
                let table = [];
                /* Va renvoyer la description pour chaque trai */
                traitindex.forEach(function(nomtrait){
                    axios.get('https://www.dnd5eapi.co/api/traits/'+nomtrait.index).then(function(response_two){
                        table.push(response_two.data);
                    })
                    traits.value = table;
                });
            })
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
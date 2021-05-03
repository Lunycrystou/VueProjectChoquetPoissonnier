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
        <p class="h1">{{donnees.name}}</p>
        <br/>
        <div style="text-align:justify;margin: 1em">
            <p><b>Hit die.</b><br/>{{donnees.hit_die}}</p>
            <p><b>Proficiency choices.</b><br/> <span v-for="(donnee,index) in donnees.proficiency_choices" :key="index">{{donnee.choose}} parmi <span v-for="(data,index) in donnee.from" :key="index">{{data.name}}<span v-if="index !== (donnee.from.length-1)">, </span></span><br/></span></p>
            <p><b>Proficiencies.</b><br/> <span v-for="(donnee,index) in donnees.proficiencies" :key="index">{{donnee.name}}<span v-if="index !== (donnees.proficiencies.length-1)">, </span></span></p>
            <p><b>Starting equipment.</b><br/> <span v-for="(donnee,index) in donnees.starting_equipment" :key="index">{{donnee.equipment.name}} x{{donnee.quantity}}<br/></span></p>
            <p><b>Subclasses.</b><br/> <span v-for="(donnee,index) in donnees.subclasses" :key="index">{{donnee.name}}<span v-if="index !== (donnees.subclasses.length-1)">, </span></span></p>
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
            axios.get('https://www.dnd5eapi.co/api/classes/'+name/*ici la valeur transmise dans l'url*/)
            .then(function(response_one){
                donnees.value = response_one.data;
                /*let traitindex = donnees.value.traits;
                let table = [];*/
                /* Va renvoyer la description pour chaque traits */
                /*traitindex.forEach(function(nomtrait){
                    axios.get('https://www.dnd5eapi.co/api/traits/'+nomtrait.index).then(function(response_two){
                        table.push(response_two.data);
                    })
                    traits.value = table;
                });*/
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
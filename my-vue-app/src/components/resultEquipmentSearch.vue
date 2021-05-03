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
            <p><b>Equipment category.</b><br/>{{donnees.equipment_category.name}}</p>
            <span v-if="donnees.gear_category!=null"><p><b>Gear category.</b><br/>{{donnees.gear_category.name}}</p></span>
            <span v-if="donnees.vehicle_category!=null"><p><b>Vehicle category.</b><br/>{{donnees.vehicle_category}}</p></span>
            <span v-if="donnees.tool_category!=null"><p><b>Tool category.</b><br/>{{donnees.tool_category}}</p></span>
            <span v-if="donnees.armor_category!=null"><p><b>Armor category.</b><br/>{{donnees.armor_category}}</p></span>
            <span v-if="donnees.armor_class!=null"><p><b>Armor class.</b><br/>Base {{donnees.armor_class.base}}, dex bonus {{donnees.armor_class.dex_bonus}}, bonus max {{donnees.armor_class.max_bonus}}</p></span>
            <span v-if="donnees.str_minimum!=null"><p><b>Str required.</b><br/>{{donnees.str_minimum}}</p></span>
            <span v-if="donnees.stealth_disadvantage!=null"><p><b>Stealth disadvantage.</b><br/>{{donnees.stealth_disadvantage}}</p></span>
            <span v-if="donnees.weapon_range!=null"><p><b>Weapon range.</b><br/>{{donnees.weapon_range}}</p></span>
            <span v-if="donnees.category_range!=null"><p><b>Category range.</b><br/>{{donnees.category_range}}</p></span>
            <p><b>Cost.</b><br/>{{donnees.cost.quantity}} {{donnees.cost.unit}}</p>
            <span v-if="donnees.damage!=null"><p><b>Damage.</b><br/>{{donnees.damage.damage_dice}} type {{donnees.damage.damage_type.name}}</p></span>
            <span v-if="donnees.two_handed_damage!=null"><p><b>Two handed damage.</b><br/>{{donnees.two_handed_damage.damage_dice}} type {{donnees.two_handed_damage.damage_type.name}}</p></span>
            <span v-if="donnees.range!=null"><p><b>Range.</b><br/>{{donnees.category_range}}</p></span>
            <span v-if="donnees.weight!=null"><p><b>Weight.</b><br/>{{donnees.weight}}</p></span>
            <span v-if="donnees.speed!=null"><p><b>Speed.</b><br/>{{donnees.speed.quantity}} {{donnees.speed.unit}}</p></span>
            <span v-if="donnees.capacity!=null"><p><b>Capacity.</b><br/>{{donnees.capacity}}</p></span>
            <span v-if="donnees.properties!=null"><p><b>Properties.</b><br/><span v-for="(donnee,index) in donnees.properties" :key="index">{{donnee.name}}<span v-if="index !== (donnees.properties.length-1)">, </span></span></p></span>
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
            .get('https://www.dnd5eapi.co/api/equipment/'+name/*ici la valeur transmise dans l'url*/)
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
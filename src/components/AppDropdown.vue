<template>
    <!-- DROPDOWN BUTTON ROW -->
    <div class="row mb-4">

        <div class="col-3">

            <!-- AL CHANGE DELLA OPTION EMETTE "filterArch" -->
            <select class="form-select shadow ygo-dropdown" @change="$emit('filterArch')" v-model="store.selArch">

                <option selected disabled>Filter Archetypes</option>
                <option :value="archetype.archetype_name" v-for="archetype in store.archetypes">
                    {{ archetype.archetype_name }}
                </option>

            </select>

        </div>

    </div>
</template>

<script>
// IMPORTA STATE GLOBALE DA store.js PER NON DOVER PASSARE LE PROP DA COMPONENTE A COMPONENTE E CREARE UN PROP DRILLING
import { store } from '../store';

export default {
    name: "AppDropdown",

    // VIENE DICHIARATO L'emit IN MODO POSSA ESSERE RAGGIUNTO DAL PADRE (App.vue)
    emits: ['filterArch'],

    data() {
        return {

            store

        }

    },

    mounted() {
        store.fetchArchetypes()
    }
}



</script>

<style lang="scss" scoped>
@use '../assets/scss/partials/AppDropdown.scss';
</style>
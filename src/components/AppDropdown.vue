<template>
    <!-- DROPDOWN BUTTON ROW -->
    <div class="row justify-content-between mb-4">

        <div class="col-4">

            <!-- AL CHANGE DELLA OPTION EMETTE "filterArch" -->
            <select class="form-select shadow ygo-dropdown" @change="$emit('filterArch')" v-model="store.selArch">

                <option value="" disabled hidden>Select Archetype</option>
                <option :value="archetype.archetype_name" v-for="archetype in store.archetypes">
                    {{ archetype.archetype_name }}
                </option>

            </select>

        </div>

        <!-- IL METODO "cardPerPageValue" EMESSO VIENE ASSOCIATO A "setMaxCards" -->
        <AppMaxCardsSelect @cardPerPageValue="setMaxCards" />

        <div class="col text-end me-1 ygo-counter">
            <h3>Cards found: {{ store.cardCounter }}</h3>
        </div>

    </div>
</template>

<script>
// IMPORTA STATE GLOBALE DA store.js PER NON DOVER PASSARE LE PROP DA COMPONENTE A COMPONENTE E CREARE UN PROP DRILLING
import { store } from '../store';

import AppMaxCardsSelect from './AppMaxCardsSelect.vue';

export default {
    name: "AppDropdown",

    // VIENE DICHIARATO L'emit IN MODO POSSA ESSERE RAGGIUNTO DAL PADRE (App.vue)
    emits: ['filterArch'],

    components: {
        AppMaxCardsSelect
    },

    data() {
        return {

            store

        }

    },

    methods: {
        setMaxCards() {
            this.store.fetchData(this.store.api_url);

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
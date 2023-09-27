<template>
    <!-- DROPDOWN BUTTON ROW -->
    <div class="row mb-4">

        <div class="col-2">

            <select class="form-select shadow ygo-dropdown">

                <!-- BISOGNA EFFETTUARE UNA CHIANATA CHE FILTRI SOLO GLI ARCHETIPI, MA DALLA DOC NON SI CAPISCE -->
                <option value="1" v-for="archetype in store.archetypes">{{ archetype.archetype_name
                }}</option>

            </select>

        </div>

    </div>
</template>

<script>
// IMPORTA STATE GLOBALE DA store.js PER NON DOVER PASSARE LE PROP DA COMPONENTE A COMPONENTE E CREARE UN PROP DRILLING
import { store } from '../store';

export default {
    name: "AppDropdown",
    data() {
        return {

            store

        }
    },

    mounted() {
        // RITORNA TROPPI ELEMENTI (507) CHE NON ACCETTANO VALORI ("The Card Archetypes Endpoint requires that no GET parameters be set.")
        store.fetchArchetypes()
    }
}



</script>

<style lang="scss" scoped>
@use '../assets/scss/partials/AppDropdown.scss';
</style>
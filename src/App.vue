<template>
    <header>

        <AppNavbar />

    </header>

    <main class="my-4">

        <div class="container">
            <!-- SI DICHIARA CHE IL METODO EMESSO "filterArch" VIENE LEGATO A "filterArchetype" -->
            <AppDropdown @filterArch="filterArchetype" />

            <AppCardsContainer />

        </div>
    </main>
</template>

<script>

// IMPORTA COMPONENTI
import AppNavbar from './components/AppNavbar.vue';
import AppDropdown from './components/AppDropdown.vue';
import AppCardsContainer from './components/AppCardsContainer.vue';

/* Already included file name 'd:/Documenti/Coding/Boolean Class 104/JS/vite-yu-gi-oh/src/components/AppCardsContainer.vue.js' differs from file name 'd:/documenti/coding/boolean class 104/js/vite-yu-gi-oh/src/components/appcardscontainer.vue.js' only in casing. */

import { store } from './store';

export default {
    name: "App",

    data() {
        return {

            store

        }

    },

    components: {
        AppNavbar,
        AppDropdown,
        AppCardsContainer,
    },

    methods: {

        filterArchetype() {

            this.store.cardsOffset = 0;
            this.store.fetchData(this.store.api_url);

        },

    },

}
</script>

<style lang="scss" scoped>
@use './assets/scss/partials/variables.scss' as *;
</style>
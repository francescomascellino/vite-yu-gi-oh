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

export default {
    name: "App",

    components: {
        AppNavbar,
        AppDropdown,
        AppCardsContainer,
    },

    methods: {

        filterArchetype() {

            console.log("FILTERING...");

            // const searcArch_url = this.api_url + `?archetype= + ${test}`
        }

    },

}
</script>

<style lang="scss" scoped>
@use './assets/scss/partials/variables.scss' as *;
</style>
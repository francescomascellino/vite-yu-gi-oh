<template>
    <!-- CARDS CONTAINER -->
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4" v-if="store.cards">

        <AppCards />

    </div>

    <!-- LOADER -->
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4 justify-content-center" v-else>

        <AppCardsLoader />

    </div>
</template>

<script>

// IMPORTA STATE GLOBALE DA store.js PER NON DOVER PASSARE LE PROP DA COMPONENTE A COMPONENTE E CREARE UN PROP DRILLING
import { store } from '../store';
import AppCards from './AppCards.Vue';
import AppCardsLoader from './AppCardsLoader.vue'

export default {
    name: "AppCardsContainer",

    components: {
        AppCards,
        AppCardsLoader
    },

    data() {
        return {

            store

        }
    },
    mounted() {

        //USA LA FUNZIONE PER RICHIAMARE I DATI DALLA API CONTENTUTA DENTRO "store"
        store.fetchData()

    }
}

</script>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;


@use '../assets/scss/partials/AppCards.scss';
</style>
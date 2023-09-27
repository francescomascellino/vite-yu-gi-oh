<template>
    <!-- CARDS CONTAINER -->
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4" v-if="store.cards">

        <!-- LA PROP card IN APPCARD VIENE BINDATA a "card" IN "store.cards" -->
        <AppCards :card="card" v-for="card in store.cards" />

    </div>

    <!-- LOADER -->
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4 justify-content-center" v-else>

        <AppCardsLoader />

    </div>
</template>

<script>

// IMPORTA STATE GLOBALE DA store.js PER NON DOVER PASSARE LE PROP DA COMPONENTE A COMPONENTE E CREARE UN PROP DRILLING
import { store } from '../store';

//IMPORTA COMPONENTI

/* 
Already included file name 'd:/Documenti/Coding/Boolean Class 104/JS/vite-yu-gi-oh/src/components/AppCards.vue.js' differs from file name 'd:/documenti/coding/boolean class 104/js/vite-yu-gi-oh/src/components/appcards.vue.js' only in casing.
The file is in the program because:ts(1261)
module "d:/Documenti/Coding/Boolean Class 104/JS/vite-yu-gi-oh/src/components/AppCards.vue"
 */
import AppCards from './AppCards.vue';

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

<style lang="scss" scoped></style>
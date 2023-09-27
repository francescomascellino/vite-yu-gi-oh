<template>
    <!-- CARDS CONTAINER -->
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 justify-content-center g-4" v-if="store.cards">

        <!-- LA PROP card IN APPCARD VIENE BINDATA a "card" IN "store.cards" -->
        <AppCard :card="card" v-for="card in store.cards" />

    </div>

    <!-- LOADER -->
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 justify-content-center" v-else>

        <AppCardsLoader />

    </div>

    <div class="row mt-4">

        <div class="col-12 d-flex justify-content-around">
            <button class="btn btn-primary" @click="prevPage()">PREV</button>
            <button class="btn btn-primary" @click="nextPage()">NEXT</button>
        </div>

    </div>
</template>

<script>

// IMPORTA STATE GLOBALE DA store.js PER NON DOVER PASSARE LE PROP DA COMPONENTE A COMPONENTE E CREARE UN PROP DRILLING
import { store } from '../store';

//IMPORTA COMPONENTI
import AppCard from './AppCard.vue';
import AppCardsLoader from './AppCardsLoader.vue'

export default {
    name: "AppCardsContainer",

    components: {

        AppCard,
        AppCardsLoader

    },

    data() {
        return {

            store

        }
    },

    methods: {

        nextPage() {

            if (this.store.pagesRemaining > 0) {
                this.store.cardsOffset += Number(this.store.maxCards);
                console.log(this.store.cardsOffset);
                this.store.fetchData(this.store.api_url);

            }

        },

        prevPage() {

            if (this.store.cardsOffset > 0) {
                this.store.cardsOffset -= Number(this.store.maxCards);
                console.log(this.store.cardsOffset);
                this.store.fetchData(this.store.api_url);

            }

        },

    },

    mounted() {

        //USA LA FUNZIONE PER RICHIAMARE I DATI DALLA API CONTENTUTA DENTRO "store"
        setTimeout(() => {
            store.fetchData(this.store.api_url)
        }, 1000)

    }
}

</script>

<style lang="scss" scoped></style>
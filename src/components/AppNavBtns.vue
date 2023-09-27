<template>
    <div class="row mt-4">

        <div class="col-12 d-flex justify-content-around">
            <button class="ygo-btn" @click="prevPage()">PREV</button>
            <button class="ygo-btn" @click="nextPage()">NEXT</button>
        </div>

    </div>
</template>

<script>
// IMPORTA STATE GLOBALE DA store.js PER NON DOVER PASSARE LE PROP DA COMPONENTE A COMPONENTE E CREARE UN PROP DRILLING
import { store } from '../store';

export default {
    name: 'AppNavBtns',

    data() {
        return {

            store

        }
    },

    methods: {

        nextPage() {

            // SE VI SONO PAGINE DA MOSTRARE
            if (this.store.pagesRemaining > 0) {
                this.store.cardsOffset += Number(this.store.maxCards);
                console.log(this.store.cardsOffset);
                this.store.fetchData(this.store.api_url);

            }

        },

        prevPage() {

            // SE offset E' TORNATO 0 SIAMO ALLA PRIMA PAGINA
            if (this.store.cardsOffset > 0) {
                this.store.cardsOffset -= Number(this.store.maxCards);
                console.log(this.store.cardsOffset);
                this.store.fetchData(this.store.api_url);

            }

        },

    },
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/partials/AppBtns.scss'
</style>
<template>
    <!-- CARD -->
    <div class="col" v-for="card in store.cards">

        <div class="card shadow ygo-card">

            <img class="card-img-top" :src="card.card_images[0].image_url" alt="Title">

            <div class="card-body p-2">

                <h6 class="card-title ygo-cardTitle">{{ card.name }}</h6>
                <p class="card-text ygo-cardText">{{ card.type }}</p>

            </div>

        </div>

    </div>
</template>

<script>
// IMPORTA STATE GLOBALE DA store.js PER NON DOVER PASSARE LE PROP DA COMPONENTE A COMPONENTE E CREARE UN PROP DRILLING
import { store } from '../store';

export default {
    name: "AppCards",

    data() {
        return {

            store

        }
    },
    // mounted() {

    //     //USA LA FUNZIONE PER RICHIAMARE I DATI DALLA API CONTENTUTA DENTRO "store"
    //     store.fetchData()

    // }

}
</script>

<style lang="scss" scoped>
@use '../assets/scss/partials/AppCards.scss'
</style>
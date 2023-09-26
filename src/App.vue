<template>
    <header>
        <h1 class="text-center"> Yu-Gi_OH! Vite </h1>
    </header>
    <main>
        <div class="container">

            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6">
                <div class="col" v-for="card in store.cards">
                    <div class="card">
                        <img class="card-img-top" :src="card.card_images[0].image_url" alt="Title">
                        <div class="card-body">
                            <h4 class="card-title">{{ card.name }}</h4>
                            <p class="card-text">{{ card.type }}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>

<script>

// IMPORTA STATE GLOBALE DA store.js PER NON DOVER PASSARE LE PROP DA COMPONENTE A COMPONENTE E CREARE UN PROP DRILLING
import { store } from './store';

export default {
    name: "App",
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
@use './assets/scss/App.scss';
</style>
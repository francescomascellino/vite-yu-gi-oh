<template>
    <div>
        <h1 class=" text-danger">TITLE</h1>
    </div>
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

        store.fetchData()

    }

}
</script>

<style lang="scss" scoped>
@use './assets/scss/App.scss';
</style>
<template>
    <header>

        <AppNavbar />

    </header>

    <main class="my-4">

        <div class="container">

            <AppDropdown />

            <AppCardsContainer />

        </div>
    </main>
</template>

<script>

import AppNavbar from './components/AppNavbar.vue';
import AppDropdown from './components/AppDropdown.vue';
import AppCardsContainer from './components/AppCardsContainer.vue';

export default {
    name: "App",

    components: {
        AppNavbar,
        AppDropdown,
        AppCardsContainer,
    }

}
</script>

<style lang="scss" scoped>
@use './assets/scss/partials/variables.scss' as *;
</style>
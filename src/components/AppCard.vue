<template>
    <!-- CARD -->
    <div class="col">

        <div class="card shadow ygo-card">

            <img class="card-img-top" :src="card.card_images[0].image_url" alt="Title">

            <div class="card-body p-2 d-flex flex-column justify-content-between ">

                <h6 class="card-title ygo-cardTitle">{{ card.name }}</h6>
                <p class="card-text ygo-cardText">{{ card.type }}</p>

            </div>

        </div>

    </div>
</template>

<script>

export default {
    name: "AppCard",

    props: {
        // VIENE DICHIARATO CHE "card" E' UN OGGETTO IN MODO CHE POSSA LEGGERE "card" in "store.cards" DENTRO "AppCardsContainer"
        card: "Object"
    },

}
</script>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

@use '../assets/scss/partials/AppCard.scss';
</style>
<template>
    <!-- CARDS CONTAINER -->
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4" v-if="store.cards">


        <AppCards />

    </div>

    <!-- LOADER -->

    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4 justify-content-center" v-else>

        <!-- FAKE CARDS -->

        <div class="col">

            <div class="card shadow ygo-card ygo-cardLoader">

                <div class="ygo-imgLoader shine"></div>

                <div class="card-body p-2">

                    <h6 class="card-title my-3 ygo-cardTitle shine"></h6>
                    <p class="card-text my-3 ygo-cardText shine"></p>

                </div>

            </div>

        </div>

        <div class="col">

            <div class="card shadow ygo-card ygo-cardLoader">

                <div class="ygo-imgLoader shine"></div>

                <div class="card-body p-2">

                    <h6 class="card-title my-3 ygo-cardTitle shine"></h6>
                    <p class="card-text my-3 ygo-cardText shine"></p>

                </div>

            </div>

        </div>

        <div class="col">

            <div class="card shadow ygo-card ygo-cardLoader">

                <div class="ygo-imgLoader shine"></div>

                <div class="card-body p-2">

                    <h6 class="card-title my-3 ygo-cardTitle shine"></h6>
                    <p class="card-text my-3 ygo-cardText shine"></p>

                </div>

            </div>

        </div>

        <div class="col">

            <div class="card shadow ygo-card ygo-cardLoader">

                <div class="ygo-imgLoader shine"></div>

                <div class="card-body p-2">

                    <h6 class="card-title my-3 ygo-cardTitle shine"></h6>
                    <p class="card-text my-3 ygo-cardText shine"></p>

                </div>

            </div>

        </div>

        <div class="col">

            <div class="card shadow ygo-card ygo-cardLoader">

                <div class="ygo-imgLoader shine"></div>

                <div class="card-body p-2">

                    <h6 class="card-title my-3 ygo-cardTitle shine"></h6>
                    <p class="card-text my-3 ygo-cardText shine"></p>

                </div>

            </div>

        </div>

        <div class="col">

            <div class="card shadow ygo-card ygo-cardLoader">

                <div class="ygo-imgLoader shine"></div>

                <div class="card-body p-2">

                    <h6 class="card-title my-3 ygo-cardTitle shine"></h6>
                    <p class="card-text my-3 ygo-cardText shine"></p>

                </div>

            </div>

        </div>

    </div>
</template>

<script>

// IMPORTA STATE GLOBALE DA store.js PER NON DOVER PASSARE LE PROP DA COMPONENTE A COMPONENTE E CREARE UN PROP DRILLING
import { store } from '../store';
import AppCards from './AppCards.Vue'

export default {
    name: "AppCardsContainer",

    components: {
        AppCards
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

/*#region SHINE */

.ygo-cardLoader {
    min-height: 290px;

    .ygo-imgLoader {
        height: 180px;
    }

}

.shine {
    background: linear-gradient(110deg, #dab47f 8%, $ygo-orange 18%, #dab47f 33%);
    background-size: 200% 100%;
    animation: 1s shine linear infinite;
}

h6.shine,
p.shine {
    padding: 8px 16px;
    line-height: 2rem;
}

@keyframes shine {
    to {
        background-position-x: -200%;
    }
}

/*#endregion SHINE */
</style>
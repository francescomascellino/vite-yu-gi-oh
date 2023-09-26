<template>
    <header>
        <nav class="shadow">
            <div class="text-center ygo-logo">
                <img src="./assets/img/ygo-logo.png" alt="logo">
            </div>
        </nav>
    </header>
    <main class="my-4">



        <div class="container">

            <div class="row mb-4">

                <div class="col">

                    <div class="dropdown">
                        <button class="btn dropdown-toggle shadow ygo-dropdown" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>

                </div>

            </div>

            <!-- CARDS CONTAINER -->
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4" v-if="store.cards">

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
@use './assets/scss/partials/variables.scss' as *;

nav {
    background-color: $ygo-orange;

    .ygo-logo {
        padding: 2rem;

        img {
            height: 4rem;
        }

    }

}

.ygo-dropdown {
    background-color: $ygo-orange;
    color: $ygo-primary;
}

.ygo-card {

    background-color: $ygo-orange;

    .card-body {
        height: 92px;
    }

    .ygo-cardTitle {
        font-size: smaller;
        text-align: center;
        text-transform: uppercase;
        color: $ygo-primary;
    }

    .ygo-cardText {
        font-size: smaller;
        text-align: center;
        color: $ygo-secondary;
    }

}

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
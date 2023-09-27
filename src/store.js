// STATES GLOBALI IMPORTABILI IN OGNI COMPONENTE

import { reactive } from "vue";

import axios from "axios";

export const store = reactive({

    // api_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0',
    api_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    archetypes_url: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    maxCards: 15,
    cardsOffset: 0,
    pagesRemaining: null,
    pagesBack: 0,

    cards: null,
    selArch: null,
    cardCounter: null,

    fetchData(url) {
        axios.get(url, {

            // POSSIAMO USARE PARAMETRI PER RENDERE LA CHIAMATA DINAMICA
            params: {
                offset: this.cardsOffset,
                num: this.maxCards,
                archetype: this.selArch
            }
        })
            .then(response => {
                this.cards = response.data.data;

                // console.log('CARDS', this.cards);

                // console.log('META', response.data.meta);

                // RECUPERO DA META IL TOTALE DELLE CARTE FILTRATE
                this.cardCounter = response.data.meta.total_rows;

                // RECUPERO PAGINE RESTANTI DA "response.data.meta.pages_remaining"
                this.pagesRemaining = response.data.meta.pages_remaining;

                // CALCOLO PAGINE SUPERATE
                this.pagesBack = (this.cardsOffset / this.maxCards);
                // LOG RIASSUNTIVO
                console.log('MAX CARDS', this.maxCards, "ARCH", this.selArch, " PAGES REMAINING:", this.pagesRemaining, "PAGES BACKWARD:", this.pagesBack);

            })
            .catch(error => {
                console.error(error);
            })
    },

    // RECUPERA L'INTERA LISTA DEGLI ARCHETIPI
    fetchArchetypes() {

        axios.get(this.archetypes_url)
            .then(response => {
                this.archetypes = response.data;
            })
            .catch(error => {
                console.error(error);
            })

    }
})
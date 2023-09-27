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
                this.cardCounter = this.cards.length;
                // console.log('META', response.data.meta);
                this.pagesRemaining = response.data.meta.pages_remaining
                console.log('MAX CARDS', this.maxCards, "ARCH", this.selArch, " PAGES REMAINING:", this.pagesRemaining, "PAGES BACKWARD:", this.prevPage_url);

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
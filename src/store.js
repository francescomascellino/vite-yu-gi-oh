// STATES GLOBALI IMPORTABILI IN OGNI COMPONENTE

import { reactive } from "vue";

import axios from "axios";

export const store = reactive({
    api_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=18&offset=0',
    archetypes_url: ' https://db.ygoprodeck.com/api/v7/archetypes.php',

    cards: null,
    meta: null,
    selArch: "",
    cardCounter: "",

    fetchData(url) {
        axios.get(url)
            .then(response => {
                this.cards = response.data.data;
                console.log('CARDS x18', this.cards);
                this.cardCounter = this.cards.length;
                console.log(this.cardCounter);
                this.meta = response.data.meta;
                console.log('META x18', response.data.meta);

            })
            .catch(error => {
                console.error(error);
            })
    },

    fetchArchetypes() {

        axios.get(this.archetypes_url)
            .then(response => {
                this.archetypes = response.data;
                console.log('ARCHETYPES', this.archetypes);
            })
            .catch(error => {
                console.error(error);
            })

    }
})
// STATES GLOBALI IMPORTABILI IN OGNI COMPONENTE

import { reactive } from "vue";

import axios from "axios";

export const store = reactive({
    api_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=18&offset=0',
    archetypes_url: ' https://db.ygoprodeck.com/api/v7/archetypes.php',
    cards: null,
    meta: null,

    fetchData() {
        axios.get(this.api_url)
            .then(response => {
                // console.log(response);
                this.cards = response.data.data;
                console.log(this.cards);
                this.meta = response.data.meta;
                console.log(response.data.meta);

            })
            .catch(error => {
                console.error(error);
            })
    },

    fetchArchetypes() {

        // RITORNA TROPPI ELEMENTI (507) CHE NON ACCETTANO VALORI ("The Card Archetypes Endpoint requires that no GET parameters be set.")
        axios.get(this.archetypes_url)
            .then(response => {
                this.archetypes = response.data;
                console.log('arch', this.archetypes);
            })
            .catch(error => {
                console.error(error);
            })

    }
})
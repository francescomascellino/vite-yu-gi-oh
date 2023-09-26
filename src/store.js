// STATES GLOBALI IMPORTABILI IN OGNI COMPONENTE

import { reactive } from "vue";

import axios from "axios";

export const store = reactive({
    api_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=18&offset=0',
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
    }
})
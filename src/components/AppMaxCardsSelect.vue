<template>
    <div class="col-2">

        <!-- AL CHANGE DELLA OPTION EMETTE "filterArch" -->
        <select class="form-select shadow ygo-dropdown" @change="$emit('setMaxCards')" v-model="store.maxCards">

            <option value="5" selected>5</option>
            <option value="10" selected>10</option>
            <option value="15" selected>15</option>
            <option value="30" selected>30</option>
            <option value="45" selected>45</option>
            <option value="60" selected>60</option>


        </select>

    </div>
</template>

<script>
// IMPORTA STATE GLOBALE DA store.js PER NON DOVER PASSARE LE PROP DA COMPONENTE A COMPONENTE E CREARE UN PROP DRILLING
import { store } from '../store';

export default {
    name: "AppMaxCardsSelect",

    data() {
        return {
            store
        }
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/scss/partials/AppDropdown.scss';
</style>
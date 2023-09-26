<template>
    <!-- DROPDOWN BUTTON ROW -->
    <div class="row mb-4">

        <div class="col">

            <!-- DROPDOWN BUTTON -->
            <div class="dropdown">
                <button class="btn dropdown-toggle shadow ygo-dropdown" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    STARTING TYPE FROM API
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">TYPES LIST</a></li>
                </ul>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: "AppDropdown"
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/partials/AppDropdown.scss';
</style>
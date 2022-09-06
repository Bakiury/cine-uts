<script setup lang="ts">
</script>

<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <div class="collapse navbar-collapse d-flex justify-content-around" id="navbarColor01">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="my-btn">
                        <router-link :to="{ name: 'Cartelera' }" class="my-link nav-link text-white">
                            Cartelera
                        </router-link>
                    </li>
                    <li class="my-btn">
                        <router-link :to="{ name: 'Proximamente' }" class="my-link nav-link text-white">
                            Próximamente
                        </router-link>
                    </li>
                </ul>
                <div>
                    <router-link :to="{ name: 'Home' }" class="nav-link">
                        <img class="logo" src="@/assets/logo_cine_uts_blanco.png" alt="" />
                    </router-link>
                </div>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                </form>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.logo {
    width: 220px;
    padding-top: 5px;
}
</style>

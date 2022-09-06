<script setup lang="ts">
import { useStore } from 'vuex';
const store = useStore();

const getPeliculas = async () => {
    const res = await store.dispatch('movies/getPeliculas');

    return res;
};
</script>

<template>
    <h1 class="title">Cartelera</h1>
    <button class="my-btn" @click="getPeliculas">Go</button>
</template>

<style lang="scss" scoped>
</style>

<script setup lang="ts">
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>

<template>
    <div class="my-container">
        <Header />
        <div class="space">
            <router-view />
        </div>
        <Footer />
    </div>
</template>

<style lang="scss">
.my-container {
    background: #E2E2E2;
    min-width: 100%;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    font-family: 'Baloo 2', cursive;
}

.space {
    margin-top: 103px;
}

.my-btn {
    background: #3D7F3C;
    background: -webkit-linear-gradient(to right, #3D7F3C, #68BB4E);
    background: linear-gradient(to right, #3D7F3C, #68BB4E);
    color: #ffffff;
    min-width: 80px;
    border-radius: 10px;
    padding: 3px 10px;
    margin: 0 10px;
    font-size: 18px;
    font-weight: bold;
    border: none;

    &:hover {
        background: #3D7F3C;
        background: -webkit-linear-gradient(to left, #3D7F3C, #68BB4E);
        background: linear-gradient(to left, #3D7F3C, #68BB4E);
    }

    &:active {
        transform: scale(0.97);
    }
}

.form-control {
    border: 1px solid #3D7F3C !important;
    outline: none !important;
    box-shadow: none !important;

    &:focus {
        box-shadow: 0 1px 1px #3D7F3C inset, 0 0 8px #68BB4E !important;
    }
}
</style>

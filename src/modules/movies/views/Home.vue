<script setup lang="ts">
import MyBanner from '@/layout/MyBanner.vue'
import CardSquare from '@/components/CardSquare.vue';
import Card from '@/components/Card.vue';
</script>
        
<template>
    <MyBanner title="Próximamente" />
    <div class="container">
        <div class="row d-flex justify-content-around">
            <div class="col-auto">
                <CardSquare />
            </div>
            <div class="col-auto">
                <CardSquare />
            </div>
            <div class="col-auto">
                <CardSquare />
            </div>
        </div>
    </div>

    <MyBanner title="En Cartelera" />
    <div class="container">
        <div class="row d-flex justify-content-around">
            <div class="col-auto">
                <Card />
            </div>
            <div class="col-auto">
                <Card />
            </div>
            <div class="col-auto">
                <Card />
            </div>
            <div class="col-auto">
                <Card />
            </div>
            <div class="col-auto">
                <Card />
            </div>
            <div class="col-auto">
                <Card />
            </div>
        </div>
    </div>
</template>
        
<style lang="scss" scoped>
.container {
    padding-top: 20px;
}
</style>
        
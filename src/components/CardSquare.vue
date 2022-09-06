<script setup lang="ts">
export interface Props {
    text: boolean
}

const props = withDefaults(defineProps<Props>(), {
    text: true
})
</script>

<template>
    <div class="card text-bg-dark">
        <img src="https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/7/7/5/9/29577-1-esl-CO/3a4a300b2d2d-2_poster_480x670.png"
            class="card-img" alt="..." />
        <div v-if="text" class="card-img-overlay">
            <h5 class="card-title"><b><u>Título</u></b></h5>
            <p><b>Estreno: </b><span>text</span></p>
            <p><b>Género: </b><span>text</span></p>
            <p><b>Descripción: </b><span>text</span></p>
            <p><b>Tiempo: </b><span>text</span></p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    box-shadow: 0 0 2px 8px #212529;
    width: 350px;
    height: 350px;
    margin-bottom: 50px;
    cursor: pointer;
    overflow: hidden;

    &:hover>.card-img-overlay {
        background-color: rgba(0, 0, 0, .6);
    }

    &:hover>img {
        transform: scale(1.05);
        transition: all 0.3s ease-in-out;
    }
}

.card img {
    height: 100%;
}

.card-img-overlay p {
    margin-bottom: 5px;
}
</style>

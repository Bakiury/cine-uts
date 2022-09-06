<script setup lang="ts">

</script>

<template>
    <div class="card text-bg-dark">
        <img src="https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/7/7/5/9/29577-1-esl-CO/3a4a300b2d2d-2_poster_480x670.png"
            class="card-img" alt="..." />
        <div class="card-content">
            <h5 class="card-title"><u>Título</u></h5>
            <div class="card-text">
                <p><b>Género </b><br /><span>text</span></p>
                <p><b>Duración </b><br /><span>text</span></p>
                <p><b>Idioma </b><br /><span>text</span></p>
            </div>
            <span class="release">Estreno</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    box-shadow: 0 0 2px 8px #343a40;
    width: 500px;
    height: 180px;
    margin-bottom: 50px;
    cursor: pointer;
    overflow: hidden;

    &:hover>img {
        transform: scale(1.05);
        transition: all 0.3s ease-in-out;
    }
}

.release {
    position: absolute;
    width: 120px;
    right: -35px;
    top: 15px;
    overflow: hidden;
    transform: rotate(45deg);
    background: #3D7F3C;
    background: -webkit-linear-gradient(to right, #3D7F3C, #68BB4E);
    background: linear-gradient(to right, #3D7F3C, #68BB4E);
    font-weight: bold;

    &:hover {
        background: #3D7F3C;
        background: -webkit-linear-gradient(to left, #3D7F3C, #68BB4E);
        background: linear-gradient(to left, #3D7F3C, #68BB4E);
        font-weight: normal;
        user-select: none;
    }
}

.card-title {
    margin-top: 10px;
    font-weight: bold;
}

.card img {
    width: 180px;
    height: 180px;
}

.card-content {
    position: absolute;
    display: flex;
    align-self: flex-end;
    flex-direction: column;
    width: 320px;
    height: 100%;
    color: #ffffff;
    text-align: center;
}

.card-text {
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.card-text p {
    margin-top: 30px;
}
</style>

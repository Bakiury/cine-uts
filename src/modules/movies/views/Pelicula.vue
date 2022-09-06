<script setup lang="ts">
import { useStore } from 'vuex';
import CardSquare from '@/components/CardSquare.vue';
const store = useStore();

const getPeliculas = async () => {
    const res = await store.dispatch('movies/getPeliculas');

    return res;
};
</script>
    
<template>
    <div class="d-flex container pt-5">
        <div class="my-col1">
            <CardSquare class="mb-4" :text="false" />
            <div class="flex-column">
                <p><b>Dirigido por:</b><span> text</span></p>
                <p><b>Escrito por:</b><span> text</span></p>
                <p><b>Compañía:</b><span> text</span></p>
            </div>
        </div>
        <div class="my-col2">
            <div class="my-col-header">
                <h1>Título</h1>
                <div>
                    <p><b>Duración:</b><span> text</span></p>
                    <p><b>Género:</b><span> text</span></p>
                    <p><b>Idioma:</b><span> text</span></p>
                </div>
                <p class="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus omnis eos ab non dolores animi porro
                    quibusdam quidem dolore laudantium, voluptate sunt delectus harum a culpa dicta optio? Officia,
                    excepturi.
                </p>
            </div>
            <div class="section-calendar d-flex justify-content-center">
                <div class="my-calendar"></div>
                <div class="my-box-time d-flex justify-content-between">
                    <button class="my-time">5:30 pm</button>
                    <button class="my-time">5:30 pm</button>
                    <button class="my-time">5:30 pm</button>
                    <button class="my-time">5:30 pm</button>
                </div>
            </div>
            <button class="my-btn d-flex float-end mb-5 me-5 px-5">Continuar</button>
        </div>
    </div>
</template>
        
<style lang="scss" scoped>
.my-img {
    width: 300px;
    height: 300px;
}

img {
    width: 100%;
    height: 100%;
}

.my-col1 p {
    margin: 0;
    padding-left: 20px;
}

.my-col-header p {
    margin: 0;
}

.my-col2 {
    width: 100%;
}

.my-col2 .my-col-header {
    margin-left: 50px;
    margin-right: 50px;
}

.my-calendar {
    margin-top: 40px;
    width: 200px;
    height: 250px;
}

.my-box-time {
    margin-top: 40px;
    width: 370px;
    height: 120px;
    flex-wrap: wrap;
}

.my-time {
    width: 150px;
    height: 40px;
    margin-bottom: 10px;
}

.section-calendar {
    margin-left: 25px;
    margin-right: 25px;
}
</style>
        
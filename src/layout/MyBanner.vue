<script setup lang="ts">
export interface Props {
    title: string
}

const props = withDefaults(defineProps<Props>(), {
    title: ''
})
</script>
        
<template>
    <div class="banner bg-dark">
        <h1>{{ props.title }}</h1>
    </div>
</template>
        
<style lang="scss" scoped>
.banner {
    text-align: center;
    color: #ffffff;
    border-top: 5px solid #000000;
    border-bottom: 5px solid #000000;
    padding-top: 10px;
    padding-bottom: 55px;
    margin-bottom: 25px;
    width: 100%;
    height: 50px;
    user-select: none;
}
</style>
        
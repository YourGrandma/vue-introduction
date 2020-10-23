<template>
<div class="home">
    <SplashBlock
        title="Добро пожаловать на стартовую страницу"
        description="Вы посетили страницу, сделанную на Vue CLI + Vuetify. Специально для Интенсивов 2035" />
</div>
</template>

<script>
import SplashBlock from '@/components/SplashBlock.vue'

export default {
    name: 'Home',
    components: {
        SplashBlock
    }
}
</script>

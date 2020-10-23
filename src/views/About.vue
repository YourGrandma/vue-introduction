<template>
<div class="about">
    <SplashBlock title="Об Университете 2035"
        description="Университет НТИ «20.35» – это первый в России университет, обеспечивающий профессиональное развитие человека в цифровой экономике. Он будет ориентирован на подготовку лидеров компаний, участников Национальной технологической инициативы (НТИ) и специалистов, работающих на новых глобальных рынках.
В Университете НТИ «20.35» появится новый формат обучения, где необходимые студенту образовательные модули будут индивидуально собираться в различных учебных заведениях с самыми сильными курсами. Именно такой подход позволяет назвать Университет «сетевым проектом». Новый формат позволит сконцентрировать лучшие разработки институтов, университетов, ФАНО, корпоративных академий, производств и даже единичных специалистов на одной платформе. Как отмечается в концепции создания университета, программа будет учитывать имеющийся у студента уровень компетенций для оптимального подбора курсов. Обучение будет проводиться как в очном, так и заочном режиме.">

        <h2 class="mt-6 mb-3">Здесь продемонстрированы основные этапы создания приложения</h2>

        <v-carousel v-model="model">
            <v-carousel-item v-for="(item, index) in items" :key="index">
                <v-sheet dark height="100%" tile>
                    <v-row class="fill-height" align="center" justify="center">
                        <img class="fill-height carousel-img" :src="item.src" alt="">
                        <v-col>
                            <div class="display-3">
                                {{item.title}}
                            </div>
                            <p class="mt-3">
                                {{item.description}}
                            </p>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </SplashBlock>
</div>
</template>

<script>
import SplashBlock from '@/components/SplashBlock.vue'

export default {
    name: 'Home',
    components: {
        SplashBlock
    },
    data: () => ({
        model: 0,
        items: [
            {
                src: '../img/dashboard.png',
                title: 'Vue CLI',
                description: 'Удобный интерфейс для создания проекта с нуля',
            },
            {
                src: '../img/plugins.png',
                title: 'Vue CLI - plugins',
                description: 'Быстрое подключение плагинов, автоматическая настройка',
            },
            {
                src: '../img/wireframes.png',
                title: 'Разметка Vuetify',
                description: 'Готовое решение для простоты использования продукта',
            },
        ],
    }),
}
</script>
<style scoped>
    .carousel-img {
        position: absolute;
        opacity: .3;
        width: 100%;
        object-fit: cover;
    }
</style>

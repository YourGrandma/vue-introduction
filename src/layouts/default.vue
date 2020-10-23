<template>
<v-app id="inspire">
    <v-app-bar app flat dark>
        <v-container class="py-0 fill-height">
            <v-avatar color="green" class="mr-10" size="32">

            </v-avatar>

            <v-btn class="mr-3" v-for="(item, index) in links" :key="index" :to="{name: item.link}" text exact>
                {{ item.title }}
            </v-btn>

            <v-spacer></v-spacer>

            <v-responsive max-width="260">
                <v-text-field dense flat hide-details rounded solo-inverted></v-text-field>
            </v-responsive>
        </v-container>
    </v-app-bar>

    <v-main class="grey darken-3">
        <v-container>
            <v-row>
                <v-col>
                    <v-sheet min-height="70vh" rounded="lg" dark class="pa-3">
                        <router-view />
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</v-app>
</template>

<script>
export default {
    data: () => ({
        links: [
            {
                title: 'Главная',
                link: 'Home'
            },
            {
                title: 'Об университете',
                link: 'About'
            },
        ],
    }),
}
</script>

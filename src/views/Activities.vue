<template>
    <div :class="$vuetify.theme.dark ? 'atividades black' : 'atividades'">
        <v-container class="pt-15">
            <div class="d-flex justify-space-between">
                <p class="primary--text heading-1">Atividades</p>
                <v-btn depressed outlined color="primary">Criar nova <v-icon>mdi-plus</v-icon></v-btn>
            </div>

            <v-row class="mt-10 mb-15 pb-5">
                <v-col cols="12" sm="6" md="4" v-for="i in 4" :key="i">
                    <v-card class="darkbg card-radius" flat @click="$router.push('/atividades/view')">
                        <v-card-text>
                            <v-row align="center" justify="center">
                                <v-col cols="10">
                                    <p class="darktext--text heading-4">Título da atividade</p>
                                    <v-avatar
                                        :color="$vuetify.theme.dark ? 'grey darken-2' : 'grey lighten-2'"
                                        size="28"
                                        v-for="i in 3"
                                        :key="i"
                                        class="mr-1"
                                        >
                                        <span class="white--text headline"><v-icon>mdi-account</v-icon></span>
                                    </v-avatar>
                                </v-col>
                                <v-col cols="2">
                                    <v-icon size="34" class="dark--text">mdi-dots-vertical</v-icon>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
.atividades {
    min-height: 100vh;
}
.card-radius {
    border-radius: 12px;
}
.card-radius:hover {
    cursor: pointer;
}
</style>
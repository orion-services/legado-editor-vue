<template>
    <div class="menu-bar">

        <!-- Navigation Drawer -->

        <v-card
            width="100"
            v-if="$vuetify.breakpoint.mdAndUp"
        >
            <v-navigation-drawer app permanent width="200" class="darkbg">
                <v-row align="center" justify="center" class="mt-10">
                    <v-col cols="7">
                        <div class="sidebar-logo text-center primary--text">
                            <strong>ORION</strong>
                        </div>
                    </v-col>
                </v-row>

            <v-list class="mt-10">
                <v-list-item-group>
                    <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-format-list-checks</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Atividades</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                    <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Perfil</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                    <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-cog</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Configurações</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>

            <v-row class="bottom-options mx-3" align="end">
                <v-col cols="12" align-self="end">
                    <div class="d-flex justify-space-between mb-5">
                        <span class="pt-5">Modo noturno</span>
                        <v-switch color="primary" @change="switchTheme"></v-switch>
                    </div>
                    <span class="logout" @click="$router.push('/login')">Sair</span>
                </v-col>
            </v-row>
            </v-navigation-drawer>
        </v-card>

        <!-- Bottom Navigation -->

        
        <v-bottom-navigation
            v-if="$vuetify.breakpoint.smAndDown && $route.path != '/atividades/view'"
            absolute
            bottom
            grow
            hide-on-scroll
            height="80px"
            horizontal
            scroll-target="#scroll-threshold-example"
            scroll-threshold="500"
            class="darkbg"
            >
            <v-btn :active-class="$vuetify.theme.dark ? 'primary--text darkbg' : 'primary--text white'">
                <v-row no-gutters>
                    <v-col cols="12" class="text-center">
                        <v-icon>mdi-format-list-checks</v-icon>
                    </v-col>
                    <v-col cols="12" class="text-center pt-2">
                        <span>Atividades</span>
                    </v-col>
                </v-row>
            </v-btn>

            <v-btn :active-class="$vuetify.theme.dark ? 'primary--text' : 'primary--text white'">
                <v-row no-gutters>
                    <v-col cols="12" class="text-center">
                        <v-icon>mdi-account</v-icon>
                    </v-col>
                    <v-col cols="12" class="text-center pt-2">
                        <span>Perfil</span>
                    </v-col>
                </v-row>
            </v-btn>

            <v-btn :active-class="$vuetify.theme.dark ? 'primary--text' : 'primary--text white'">
                <v-row no-gutters>
                    <v-col cols="12" class="text-center pt-2">
                        <v-icon>mdi-cog</v-icon>
                    </v-col>
                    <v-col cols="12" class="text-center">
                        <span>Config</span>
                    </v-col>
                </v-row>
            </v-btn>
        </v-bottom-navigation>
        


    </div>
</template>

<script>
export default {
    name: "MenuSidebar",
    methods: {
        switchTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        }
    }
}
</script>

<style scoped>
.bottom-options {
    height: 300px;
}

.bottom-options span {
    font-size: 12px;
    color: #AAAAAA;
}

.logout:hover {
    cursor: pointer;
}
</style>
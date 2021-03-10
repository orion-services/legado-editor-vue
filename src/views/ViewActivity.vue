<template>
    <div>
        <!-- Desktop Layout -->
        <div v-if="$vuetify.breakpoint.mdAndUp">

            <v-row justify="center" :class="$vuetify.theme.dark ? 'black view-activity' : 'view-activity'">
                <v-col cols="12" md="12">
                    <v-container class="mt-10">
                        <span class="heading-4">
                            <router-link to="/atividades" class="router-link primary--text heading-4">
                                <v-icon size="40" color="primary">mdi-chevron-left</v-icon> Sair da atividade
                            </router-link>
                        </span>

                        <p class="heading-1 mt-10 primary--text">Editor</p>

                        <v-textarea rows="10" class="mt-10" outlined placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."></v-textarea>

                        <v-card
                            flat
                            class="py-5"
                            color="transparent"
                        >
                            <v-card-text>
                            <v-row
                                justify="center"
                            >
                                <v-btn-toggle
                                v-model="active"
                                mandatory
                                class="darkbg"
                                >
                                    <v-btn x-large class="py-md-10 py-lg-12 px-lg-10 text-capitalize darkbg" :active-class="$vuetify.theme.dark ? 'greenBtn black--text' : 'greenBtn white--text'">
                                        <v-row no-gutters>
                                            <v-col cols="12">
                                                Pessoa A
                                            </v-col>
                                            <v-col cols="12" class="pt-2">
                                                <v-icon v-if="$vuetify.theme.dark" :color="active == 0 ? 'black' : 'red'">mdi-pencil</v-icon>
                                                <v-icon v-else :color="active == 0 ? 'white' : 'red'">mdi-pencil</v-icon>
                                            </v-col>
                                        </v-row>
                                    </v-btn>
                                    <v-btn x-large class="py-md-10 py-lg-12 px-lg-10 text-capitalize darkbg" :active-class="$vuetify.theme.dark ? 'greenBtn black--text' : 'greenBtn white--text'">
                                        <v-row no-gutters>
                                            <v-col cols="12">
                                                Pessoa B
                                            </v-col>
                                            <v-col cols="12" class="pt-2">
                                                <v-icon v-if="$vuetify.theme.dark" :color="active == 1 ? 'black' : 'red'">mdi-pencil</v-icon>
                                                <v-icon v-else :color="active == 1 ? 'white' : 'red'">mdi-pencil</v-icon>
                                            </v-col>
                                        </v-row>
                                    </v-btn>
                                    <v-btn x-large class="py-md-10 py-lg-12 px-lg-10 text-capitalize darkbg" :active-class="$vuetify.theme.dark ? 'greenBtn black--text' : 'greenBtn white--text'">
                                    <v-row no-gutters>
                                            <v-col cols="12">
                                                Pessoa C
                                            </v-col>
                                            <v-col cols="12" class="pt-2">
                                                <v-icon v-if="$vuetify.theme.dark" :color="active == 2 ? 'black' : 'red'">mdi-pencil</v-icon>
                                                <v-icon v-else :color="active == 2 ? 'white' : 'red'">mdi-pencil</v-icon>
                                            </v-col>
                                        </v-row>
                                    </v-btn>
                                    <v-btn x-large class="py-md-10 py-lg-12 px-lg-10 text-capitalize darkbg" :active-class="$vuetify.theme.dark ? 'greenBtn black--text' : 'greenBtn white--text'">
                                        <v-row no-gutters>
                                            <v-col cols="12">
                                                Pessoa D
                                            </v-col>
                                            <v-col cols="12" class="pt-2">
                                                <v-icon v-if="$vuetify.theme.dark" :color="active == 3 ? 'black' : 'red'">mdi-pencil</v-icon>
                                                <v-icon v-else :color="active == 3 ? 'white' : 'red'">mdi-pencil</v-icon>
                                            </v-col>
                                        </v-row>
                                    </v-btn>
                                </v-btn-toggle>
                            </v-row>
                            </v-card-text>
                        </v-card>
                    </v-container>
                </v-col>
                <v-col md="2">
                    <ChatSidebar />
                </v-col>
            </v-row>
        </div>

        <!-- Mobile Layout -->
        <div v-if="$vuetify.breakpoint.smAndDown">
            <v-row no-gutters :class="$vuetify.theme.dark ? 'darkbg px-3' : 'white px-3'">
                <v-col cols="6" class="pt-3">
                    <span class="heading-4">
                        <router-link to="/atividades" class="router-link primary--text heading-4">
                            <v-icon size="35" color="primary">mdi-chevron-left</v-icon> Sair
                        </router-link>
                    </span>
                </v-col>
                <v-col cols="6" class="text-right pt-3">
                    <v-btn class="primary--text text-capitalize" depressed text @click="openChatDialog = !openChatDialog">
                        Ver chat <v-icon size="35" color="primary">mdi-message-text-outline</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="12" class="pt--5">
                    <p class="heading-1 mt-10 primary--text">Editor</p>
                </v-col>
            </v-row>

            <ChatSidebar :dialog="openChatDialog" />

            <v-row class="px-3 editor-area lightbg">
                <v-col cols="12">
                    <v-textarea rows="10" class="mt-10" outlined placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."></v-textarea>
                </v-col>
            </v-row>
            <v-bottom-navigation
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
                <v-btn class="text-capitalize darkbg" :active-class="$vuetify.theme.dark ? 'greenBtn black--text' : 'greenBtn white--text'">
                    <v-row no-gutters>
                        <v-col cols="12">
                            Pessoa A
                        </v-col>
                        <v-col cols="12" class="pt-2">
                            <v-icon v-if="$vuetify.theme.dark" :color="active == 0 ? 'black' : 'red'">mdi-pencil</v-icon>
                            <v-icon v-else :color="active == 0 ? 'white' : 'red'">mdi-pencil</v-icon>
                        </v-col>
                    </v-row>
                </v-btn>
                <v-btn x-large class="text-capitalize darkbg" :active-class="$vuetify.theme.dark ? 'greenBtn black--text' : 'greenBtn white--text'">
                    <v-row no-gutters>
                        <v-col cols="12">
                            Pessoa B
                        </v-col>
                        <v-col cols="12" class="pt-2">
                            <v-icon v-if="$vuetify.theme.dark" :color="active == 1 ? 'black' : 'red'">mdi-pencil</v-icon>
                            <v-icon v-else :color="active == 1 ? 'white' : 'red'">mdi-pencil</v-icon>
                        </v-col>
                    </v-row>
                </v-btn>
                <v-btn x-large class="text-capitalize darkbg" :active-class="$vuetify.theme.dark ? 'greenBtn black--text' : 'greenBtn white--text'">
                <v-row no-gutters>
                        <v-col cols="12">
                            Pessoa C
                        </v-col>
                        <v-col cols="12" class="pt-2">
                            <v-icon v-if="$vuetify.theme.dark" :color="active == 2 ? 'black' : 'red'">mdi-pencil</v-icon>
                            <v-icon v-else :color="active == 2 ? 'white' : 'red'">mdi-pencil</v-icon>
                        </v-col>
                    </v-row>
                </v-btn>
                <v-btn x-large class="text-capitalize darkbg" :active-class="$vuetify.theme.dark ? 'greenBtn black--text' : 'greenBtn white--text'">
                    <v-row no-gutters>
                        <v-col cols="12">
                            Pessoa D
                        </v-col>
                        <v-col cols="12" class="pt-2">
                            <v-icon v-if="$vuetify.theme.dark" :color="active == 3 ? 'black' : 'red'">mdi-pencil</v-icon>
                            <v-icon v-else :color="active == 3 ? 'white' : 'red'">mdi-pencil</v-icon>
                        </v-col>
                    </v-row>
                </v-btn>
            </v-bottom-navigation>
        </div>
    </div>
</template>

<script>
import ChatSidebar from '@/components/ChatSidebar'
export default {
    name: "ViewActivity",
    components: {
        ChatSidebar
    },
    data() {
        return {
            active: 1,
            openChatDialog: false,
        }
    }
}
</script>

<style scoped>
.view-activity {
    height: 100vh;
    min-height: 100vh;
    padding: 2% 11%;
    overflow: hidden;
}
.editor-area {
    min-height: 100vh;
}
.heading-4 {
    margin-left: -5px;
}
.text-capitalize {
    font-size: 16px;
    color: #7572A3;;
}
</style>
<template>
    <v-card
    width="100"
    class="chat-window"
  >
    <v-navigation-drawer v-if="$vuetify.breakpoint.mdAndUp" app permanent right width="330" :class="$vuetify.theme.dark ? 'blackbg' : 'darkbg'">
        <div class="chat-area">
            <div class="chat">
                <div v-for="(msg, index) in messages" :key="index">
                    <div>
                        <div v-if="msg.name" class="mt-3">
                            <v-avatar
                                :color="$vuetify.theme.dark ? 'grey darken-2' : 'grey lighten-2'"
                                size="20"
                                class="mr-2"
                                >
                                <span class="white--text headline"><v-icon>mdi-account</v-icon></span>
                            </v-avatar>
                            <span class="darktext--text text-small">{{msg.name}}</span>
                        </div>
                        <div v-if="!$vuetify.theme.dark" :class="msg.from ? 'message-box-left messageFromBox' : 'message-box-right'">
                            <span class="darktext--text text-medium">{{msg.message}}</span>
                        </div>
                        <div v-else :class="msg.from ? 'message-box-left messageFromBox darkbg' : 'message-box-right dark-radius'">
                            <span class="darktext--text text-medium">{{msg.message}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <v-row :class="$vuetify.theme.dark ? 'mx-2 send-message-area blackbg' : 'mx-2 send-message-area darkbg'">
            <v-col cols="10">
                <v-text-field placeholder="Escrever mensagem..."></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-btn fab block depressed small color="primary" class="mt-3"><v-icon>mdi-send</v-icon></v-btn>
            </v-col>
        </v-row>
          
    </v-navigation-drawer>

    <!-- Full Screen Dialog For chat on Mobile -->

    <v-dialog
        v-if="$vuetify.breakpoint.smAndDown"
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
    >
        <v-card>
            <v-row :class="$vuetify.theme.dark ? 'chat-header darkbg px-3' : 'chat-header white px-3'">
                <v-col cols="12">
                    <v-btn class="primary--text text-capitalize" depressed text @click="dialog = !dialog">
                        <v-icon size="35" color="primary">mdi-chevron-left</v-icon> Voltar a atividade
                    </v-btn>
                </v-col>
                <v-col cols="12">
                    <p class="heading-1 mt-10 ml-7 primary--text">Chat</p>
                </v-col>
            </v-row>
            <div class="chat-area lightbg">
                <div class="chat">
                    <div v-for="(msg, index) in messages" :key="index">
                        <div>
                            <div v-if="msg.name" class="mt-3">
                                <v-avatar
                                    :color="$vuetify.theme.dark ? 'grey darken-2' : 'grey lighten-2'"
                                    size="20"
                                    class="mr-2"
                                    >
                                    <span class="white--text headline"><v-icon>mdi-account</v-icon></span>
                                </v-avatar>
                                <span class="darktext--text text-small">{{msg.name}}</span>
                            </div>
                            <div v-if="!$vuetify.theme.dark" :class="msg.from ? 'message-box-left messageFromBox' : 'message-box-right'">
                                <span class="darktext--text text-medium">{{msg.message}}</span>
                            </div>
                            <div v-else :class="msg.from ? 'message-box-left messageFromBox darkbg' : 'message-box-right dark-radius'">
                                <span class="darktext--text text-medium">{{msg.message}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- <v-bottom-navigation
                v-if="$vuetify.breakpoint.smAndDown"
                fixed
                bottom
                hide-on-scroll
                height="80px"
                horizontal
                scroll-target="#scroll-threshold-example"
                scroll-threshold="500"
                class="darkbg"
                >
                    
            </v-bottom-navigation> -->
            <v-row class="px-2 darkbg fixed-chat-area">
                <v-col cols="10">
                    <v-text-field placeholder="Escrever mensagem..."></v-text-field>
                </v-col>
                <v-col cols="2">
                    <v-btn block depressed fab color="primary" class="mt-3"><v-icon>mdi-send</v-icon></v-btn>
                </v-col>
            </v-row>
        </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
    name: "ChatSidebar",
    props: {
        dialog: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            messages: [
                {
                    name: "Nome Sobrenome",
                    from: true,
                    message: "Dolor sit amet."
                },
                {
                    name: "Nome Sobrenome",
                    from: true,
                    message: "Lorem ipsum"
                },
                {
                    from: true,
                    message: "Consectetur adipiscing elit."
                },
                {
                    from: false,
                    message: "Lorem ipsum"
                },
                {
                    from: false,
                    message: "Consectetur adipiscing."
                },
                {
                    name: "Nome Sobrenome",
                    from: true,
                    message: "Morbi lacinia erat at elementum vulputate."
                },
                {
                    from: false,
                    message: "Consectetur adipiscing."
                },
                {
                    name: "Nome Sobrenome",
                    from: true,
                    message: "Morbi lacinia erat at elementum vulputate."
                },
                {
                    from: false,
                    message: "Consectetur adipiscing."
                },
                {
                    name: "Nome Sobrenome",
                    from: true,
                    message: "Morbi lacinia erat at elementum vulputate."
                },
            ]
        }
    }
}
</script>

<style scoped>
.chat-window {
    position: relative;
}
.fixed-chat-area {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
.chat-area {
    position: relative;
    overflow-x: hidden !important;
    padding: 10px 20px 100px;
}
.send-message-area {
    position: absolute;
    bottom: 0px;
}

</style>
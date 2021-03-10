import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#7572A3',
            logincardbg: '#ffffff',
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c',
            white: '#ffffff',
            lightbg: '#f6f6f6',
            darkbg: '#f2f2f2',
            green: '#1FEF7F',
            red: '#EF1F5F',
            darktext: '#AAAAAA',
            messageFromBox: '#E5E5E5',
            greenBtn: '#1FEF7F'
          },
          dark: {
            primary: '#A3A0D6',
            lightbg: '#282D3E',
            logincardbg: '#242837',
            black: '#242837',
            darkbg: '#2D3245',
            blackbg: '#202331',
            darktext: '#C4CFFF',
            greenBtn: '#1FEF7F'
          }
        },
      },
});

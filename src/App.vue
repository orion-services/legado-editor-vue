<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
html {
  font-family: 'Montserrat', sans-serif !important;
  scroll-behavior: smooth;
  margin: 0 !important;
  padding: 0 !important;
}
#app {
  font-family: 'Montserrat', sans-serif !important;
}
.logo {
  padding: 33px 0px;
  border: 4px solid #7572A3;
  border-radius: 25px;
  width: 100px;
  font-weight: bold !important;
}
.sidebar-logo {
  padding: 28px 0px;
  border: 4px solid #7572A3;
  border-radius: 25px;
  width: 90px;
  font-size: 14px;
  font-weight: bold !important;
}
.v-input input {
  border-bottom: 1px solid #7572A3;
}
.v-list-item-group .v-list-item--active {
  color: #7572A3 !important;
  background-color: #FBFBFB !important;
}
.heading-1 {
  font-size: 37px;
}
.heading-4 {
  font-size: 16px;
}
.theme--light.v-list-item--active:hover::before, .theme--light.v-list-item--active::before {
  background-color: #FBFBFB !important;
}

.v-list-item .v-list-item__title {
  color: #AAAAAA !important;
  font-size: 12px !important;
}
.v-list-item--active .v-list-item__title {
  color: #7572A3 !important;
  background-color: #FBFBFB !important;
}
.router-link {
  text-decoration: none !important;
}
.text-small {
  font-size: 14px;
  margin: 0;
  padding: 0;
}
.text-medium {
  font-size: 16px;
}
.message-box-right {
  position: relative;
  margin-left: calc(100% - 190px);
  margin-top: 10px;
  width: 200px;
  padding: 10px;
  text-align: left;
  border: 3px solid #E2E2E2;
  border-radius: 30px;
  border-bottom-right-radius: 0;
}
.message-box-left {
  position: relative;
  padding: 10px;
  width: 200px;
  margin-top: 10px;
  text-align: left;
  border-radius: 30px;
  border-bottom-left-radius: 0;
}

.dark-radius {
  border: 3px solid #2D3245;
}
</style>

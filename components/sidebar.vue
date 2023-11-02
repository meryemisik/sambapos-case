<template>
  <v-col cols="auto" class="pr-14">
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <div class="d-flex justify-space-between align-center">
          <span class="pa-3 font-weight-black" v-if="!rail">SambaPOS</span>
          <v-btn
            class="ma-1"
            variant="text"
            icon="mdi-menu"
            @click.stop="rail = !rail"
          ></v-btn>
        </div>

        <v-divider></v-divider>

        <v-list density="compact" nav class="d-flex flex-column">
          <router-link :to="localePath('/app/home')" class="py-4 px-2">
            <v-icon icon="mdi-home-city"></v-icon>
            <span class="font-weight-black ml-5" v-if="!rail">{{
              $t("sidebar.home")
            }}</span>
          </router-link>

          <router-link :to="localePath('/app/settings')" class="py-4 px-2">
            <v-icon icon="mdi-cog"></v-icon>
            <span class="font-weight-black ml-5" v-if="!rail">{{
              $t("sidebar.settings")
            }}</span>
          </router-link>

          <router-link :to="localePath('/app/device')" class="py-4 px-2">
            <v-icon icon="mdi-monitor-cellphone"></v-icon>
            <span class="font-weight-black ml-5" v-if="!rail">{{
              $t("sidebar.deviceSettings")
            }}</span>
          </router-link>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-col>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      rail: true,
    };
  },
};
</script>

<style>
.v-navigation-drawer {
  background: #f83031;
  color: white;
}
.v-list--nav a {
  color: white !important;
  text-decoration: none;
}
</style>

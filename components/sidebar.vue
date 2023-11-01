<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item title="SambaPOS">
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav class="d-flex flex-column gap-8">
          <router-link to="/app/home">
            <v-list-item
              prepend-icon="mdi-home-city"
              title="Anasayfa"
              value="home"
            ></v-list-item>
          </router-link>

          <router-link to="/app/settings">
            <v-list-item
            prepend-icon="mdi-cog"
            title="Genel Ayarlar"
            value="settings"
          ></v-list-item>
          </router-link>

          <router-link to="/app/device">
            <v-list-item
            prepend-icon="mdi-account-group-outline"
            title="Cihaz Ayarları"
            value="devices"
          ></v-list-item>
          </router-link>


          
          
         
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
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
.gap-8 {
  gap: 16px; /* Özelleştirmek istediğiniz boşluğu belirtin */
}
.v-navigation-drawer {
  background: red;
  color: white;
}
.v-list--nav a{
  color: white !important;
 text-decoration: none;
}
</style>

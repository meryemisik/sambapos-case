<template>
    <v-container>
      <v-row>
        <sidebar />
        <v-col cols="12" class="pl-14"><h2>Cihazlar</h2></v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(device, index) in devices"
          :key="index"
          class="pl-14"
        >
          <v-card
            :title="device.deviceName"
            :subtitle="device.model"
            :style="{ height: '120px' }"
          >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import devices from '../../../server/api/devices'
  export default {
    data() {
      return {
          devices,
      };
    },
  };
  </script>
  
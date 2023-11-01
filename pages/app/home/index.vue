<template>
  <v-container>
    <v-row>
      <sidebar />
      <v-col class="py-10">
        <v-row>
          <h2 class="mb-6">{{ $t("home.title") }}</h2>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="(device, index) in devices[$i18n.locale]"
            :key="index"
          >
            <v-card
              :title="device.deviceName"
              :subtitle="device.model"
              :style="{ height: '120px' }"
            >
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import devices from "~/server/api/devices";
const deviceList = ref(devices);
</script>

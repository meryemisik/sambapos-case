<template>
  <v-container>
    <v-row>
      <sidebar />
      <v-col class="py-10">
        <v-row>
          <h2 class="mb-6">{{ $t("device.title") }}</h2>
        </v-row>
        <v-row>
          <v-table class="w-100">
            <thead>
              <tr>
                <th class="text-left">{{ $t("device.deviceName") }}</th>
                <th class="text-left">{{ $t("device.model") }}</th>
                <th class="text-left">{{ $t("device.serialNumber") }}</th>
                <th class="text-left">{{ $t("device.action") }}</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in deviceList[$i18n.locale]"
                :key="item.deviceName"
                @click="selectedDevice(item)"
              >
                <td>{{ item.deviceName }}</td>
                <td>{{ item.model }}</td>
                <td>{{ item.serialNumber }}</td>
                <td>
                  <v-btn
                    icon="mdi-delete"
                    color="error"
                    size="small"
                    @click="deleteDevice(index)"
                  ></v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-row>
      </v-col>
    </v-row>
    <v-dialog v-model="dialogVisible" width="50%">
      <v-card>
        <v-card-text>
          <div class="d-flex flex-column">
            <div><b>{{ $t("device.deviceName") }}</b> : {{selectedDeviceInfo.deviceName}}</div>
            <div><b>{{ $t("device.model") }}</b> : {{selectedDeviceInfo.model}}</div>
            <div><b>{{ $t("device.serialNumber") }}</b> : {{selectedDeviceInfo.serialNumber}}</div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialogVisible = false"
            >{{ $t("device.closeDialog") }}</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
const { locale } = useI18n();
import devices from "~/server/api/devices";
const deviceList = ref(devices);
const selectedDeviceInfo = ref(null);
const dialogVisible = ref(false);
const deleteDevice = (index) => {
  deviceList.value[locale.value].splice(index, 1);
};
const selectedDevice = (data) => {
  selectedDeviceInfo.value = data
  dialogVisible.value = true;
};
</script>

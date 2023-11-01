<template>
  <v-container>
    <v-row>
      <sidebar />
      <v-col class="py-10">
        <v-row>
          <h2 class="mb-6">{{ $t("settings.title") }}</h2>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="mb-5">
              <v-card-title>
                <v-icon left>mdi-palette</v-icon>
                {{$t("settings.colorSettings")}}
              </v-card-title>
              <hr />
              <v-card-text>
                <v-row v-for="(colorRow, index) in colorRows" :key="index">
                  <v-col
                    cols="12"
                    sm="10"
                    md="8"
                    lg="8"
                    class="d-flex align-center"
                  >
                    <h3> {{$t("settings.line")}} {{ index + 1 }}</h3>
                  </v-col>
                  <v-col class="d-flex align-center">
                    {{$t("settings.cardColor")}}
                    <div
                      class="pa-4 ml-2 d-inline-block rounded cursor-pointer"
                      :style="{ backgroundColor: colorRow.color }"
                      @click="showColorPicker(index)"
                    ></div>
                    <v-dialog
                      v-model="colorRow.colorPickerOpen"
                      max-width="290"
                    >
                      <v-card>
                        <v-card-title>
                          <v-icon left>mdi-palette</v-icon>
                          {{$t("settings.colorPicker")}}
                        </v-card-title>
                        <v-color-picker v-model="colorRow.color" flat />
                        <v-card-actions>
                          <v-btn @click="applyColor(index)">Uygula</v-btn>
                          <v-btn @click="cancelColor(index)">İptal</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-col>
                  <v-col>
                    <v-text-field
                      :label="`${$t('settings.duration')} ${index + 1}`"
                      :rules="rules"
                      hide-details
                      density="compact"
                      variant="outlined"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
            <v-card class="mb-5">
              <v-card-title>
                <v-icon left>mdi-cog</v-icon>
                Token Settings
              </v-card-title>
              <hr />

              <v-card-text>
                <v-row class="align-center">
                  <v-col>Username:</v-col>
                  <v-col>
                    <v-text-field
                      label="Username"
                      :rules="rules"
                      hide-details
                      density="compact"
                      variant="outlined"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="align-center">
                  <v-col>Password:</v-col>
                  <v-col>
                    <v-text-field
                      label="Password"
                      :rules="rules"
                      hide-details
                      density="compact"
                      variant="outlined"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="align-center">
                  <v-col>Application:</v-col>
                  <v-col>
                    <v-text-field
                      label="Application"
                      :rules="rules"
                      hide-details
                      density="compact"
                      variant="outlined"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <v-card class="mb-5">
              <v-card-title>
                <v-icon left>mdi-cog</v-icon>
                Sunucu Ayarları
              </v-card-title>
              <hr />

              <v-card-text>
                <v-row class="align-center">
                  <v-col>API Adresi:</v-col>
                  <v-col>
                    <v-select
                      v-model="select"
                      :items="items"
                      item-title="state"
                      item-value="http"
                      :style="{ width: '150px' }"
                    ></v-select>
                  </v-col>
                  <v-col>
                    <v-text-field
                      label="Api Adresi"
                      :rules="rules"
                      hide-details
                      density="compact"
                      variant="outlined"
                      v-model="apiAdress"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <v-card class="mb-5">
              <v-card-title>
                <v-icon left>mdi-cog</v-icon>
                Durum Ayarları
              </v-card-title>
              <hr />

              <v-card-text>
                <v-row class="align-center">
                  <v-col>Bekleyen Durum</v-col>
                  <v-col>
                    <v-text-field
                      label="Bekleyen Durum"
                      :rules="rules"
                      hide-details
                      density="compact"
                      variant="outlined"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="align-center">
                  <v-col>Hazır Durum</v-col>
                  <v-col>
                    <v-text-field
                      label="Hazır Durum"
                      :rules="rules"
                      hide-details
                      density="compact"
                      variant="outlined"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <v-card class="mb-5">
              <v-card-title>
                <v-icon left>mdi-blur</v-icon>
                Adisyon Ayarları
              </v-card-title>
              <hr />

              <v-card-text>
                <v-row class="align-center">
                  <v-col>Bekleyen Durum</v-col>
                  <v-col>
                    <v-text-field
                      label="Bekleyen Durum"
                      :rules="rules"
                      hide-details
                      density="compact"
                      variant="outlined"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="align-center">
                  <v-col>Hazır Durum</v-col>
                  <v-col>
                    <v-text-field
                      label="Hazır Durum"
                      :rules="rules"
                      hide-details
                      density="compact"
                      variant="outlined"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <v-card class="mb-5">
              <v-card-title>
                <v-icon left>mdi-progress-check</v-icon>
                Tamamlanan Adisyonlar
              </v-card-title>
              <hr />

              <v-card-text>
               
                <v-row class="align-center">
                  <v-col>Saklama Süresi</v-col>
                  <v-col>
                    <v-text-field
                      label="Hazır Durum"
                      :rules="rules"
                      hide-details
                      density="compact"
                      variant="outlined"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const apiAdress = ref("androiddemo.sambapos.com:9000");
const items = ref(["http://", "https://"]);
const select = ref({ state: "http://", abbr: "http" });
const colorRows = ref([
  { color: "#1976D2", colorPickerOpen: false },
  { color: "#114A83", colorPickerOpen: false },
  { color: "#E023AA", colorPickerOpen: false },
]);

const showColorPicker = (index) => {
  colorRows.value.forEach((row, i) => {
    row.colorPickerOpen = i === index;
  });
};
const applyColor = (index) => {
  colorRows.value[index].colorPickerOpen = false;
};
const cancelColor = (index) => {
  colorRows.value[index].colorPickerOpen = false;
};
</script>
<style>
.cursor-pointer {
  cursor: pointer;
}
</style>

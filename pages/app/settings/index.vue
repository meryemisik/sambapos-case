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
                {{ $t("settings.colorSettings") }}
              </v-card-title>
              <hr />
              <v-card-text>
                <v-row v-for="(colorRow, index) in colorRows" :key="index">
                  <v-col
                    class="d-flex align-center"
                  >
                    <h3>{{ $t("settings.line") }} {{ index + 1 }}</h3>
                  </v-col>
                  <v-col class="d-flex align-center">
                    {{ $t("settings.cardColor") }}
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
                          {{ $t("settings.colorPicker") }}
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
                {{ $t("settings.token.title") }}
              </v-card-title>
              <hr />

              <v-card-text>
                <v-row class="align-center">
                  <v-col> {{ $t("settings.token.username") }}</v-col>
                  <v-col>
                    <v-text-field
                      :label="`${$t('settings.token.username')}`"
                      :rules="rules"
                      hide-details
                      density="compact"
                      variant="outlined"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="align-center">
                  <v-col>{{ $t("settings.token.password") }}</v-col>
                  <v-col>
                    <v-text-field
                      :label="`${$t('settings.token.password')}`"
                      :rules="rules"
                      hide-details
                      density="compact"
                      variant="outlined"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="align-center">
                  <v-col>{{ $t("settings.token.application") }}</v-col>
                  <v-col>
                    <v-text-field
                      :label="`${$t('settings.token.application')}`"
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
                {{ $t("settings.server.title") }}
              </v-card-title>
              <hr />

              <v-card-text>
                <v-row class="align-center d-flex">
                  <v-col>{{ $t("settings.server.apiTitle") }}</v-col>
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
                      :label="`${$t('settings.server.apiTitle')}`"
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
                {{ $t("settings.status.title") }}
              </v-card-title>
              <hr />

              <v-card-text>
                <v-row class="align-center">
                  <v-col>{{ $t("settings.status.waiting") }}</v-col>
                  <v-col>
                    <v-text-field
                      :label="`${$t('settings.status.waiting')}`"
                      :rules="rules"
                      hide-details
                      density="compact"
                      variant="outlined"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="align-center">
                  <v-col>{{ $t("settings.status.ready") }}</v-col>
                  <v-col>
                    <v-text-field
                      :label="`${$t('settings.status.ready')}`"
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
                {{ $t("settings.admission.title") }}
              </v-card-title>
              <hr />

              <v-card-text>
                <v-row class="align-center">
                  <v-col>{{ $t("settings.admission.showType") }}</v-col>
                  <v-col>
                    <v-switch color="red" label="" hide-details></v-switch>
                  </v-col>
                </v-row>
                <v-row class="align-center">
                  <v-col>{{ $t("settings.admission.showTicket") }}</v-col>
                  <v-col>
                    <v-switch color="red" label="" hide-details></v-switch>
                  </v-col>
                </v-row>
                <v-row class="align-center">
                  <v-col>{{ $t("settings.admission.extraditionCases") }}</v-col>
                  <v-col>
                    <v-text-field
                      :label="`${$t('settings.admission.extraditionCases')}`"
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
                {{ $t("settings.complatedAdmission.title") }}
              </v-card-title>
              <hr />

              <v-card-text>
                <v-row class="align-center">
                  <v-col> {{ $t("settings.complatedAdmission.showPage") }}</v-col>
                  <v-col>
                    <v-switch color="red" label="" hide-details></v-switch>
                  </v-col>
                </v-row>

                <v-row class="align-center">
                  <v-col> {{ $t("settings.complatedAdmission.storagePeriod") }}</v-col>
                  <v-col class="d-flex align-center">
                    {{ $t("settings.complatedAdmission.cardColor") }}
                    <div
                      class="pa-4 ml-2 d-inline-block rounded cursor-pointer"
                      :style="{ backgroundColor: cardColor }"
                      @click="showColorPickers = !showColorPickers"
                    ></div>

                    <v-dialog v-model="showColorPickers" max-width="290">
                      <v-card>
                        <v-card-title>
                          <v-icon left>mdi-palette</v-icon>
                          {{ $t("settings.complatedAdmission.colorPicker") }}
                        </v-card-title>
                        <v-color-picker v-model="cardColor" flat />
                        <v-card-actions>
                          <v-btn @click="showColorPickers = false"> {{ $t("settings.complatedAdmission.apply") }}</v-btn>
                          <v-btn @click="cancelColorModal"> {{ $t("settings.complatedAdmission.cancel") }}</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-col>
                  <v-col>
                    <v-text-field
                      :label="`${$t('settings.complatedAdmission.duration')}`"
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
const showColorPickers = ref(false);
const cardColor = ref("#f2e456");
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
const cancelColorModal = () => {
  cardColor.value = "#f2e456";
  showColorPickers.value = false
}
</script>
<style>
.cursor-pointer {
  cursor: pointer;
}
</style>

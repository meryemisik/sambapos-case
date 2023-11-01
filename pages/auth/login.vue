<template>
  <v-container fluid class="h-screen pa-0">
    <v-row class="h-100 d-flex align-center ma-0">
      <v-col cols="12" md="6" class="d-flex flex-column pa-16">
        <v-img width="300px" class="mb-12" src="/images/logo.png" />
        <div class="text-h3">Welcome to SambaKDS!</div>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="bg-red h-100 d-flex align-center justify-center"
      >
        <div class="d-flex flex-column w-75">
          <h1 class="text-h5 mb-6">Log In</h1>
          <v-text-field
            label="Email"
            type="email"
            variant="solo"
            class="mb-3"
          ></v-text-field>
          <v-text-field
            label="Password"
            type="password"
            variant="solo"
            class="mb-3"
          ></v-text-field>
          <div class="d-flex justify-space-between align-center mb-5">
            <div>
              <v-checkbox label="Remember me" hide-details=""></v-checkbox>
            </div>
            <div>
              <router-link to="/app" class="text-white"
                >Forgot Password</router-link
              >
            </div>
          </div>
          <div class="d-inline-block mx-auto">
            <v-btn class="px-10" size="large" @click="login()">Login</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
const router = useRouter();
const login = () => {
  router.push("/ansayfa");
};
</script>
<style scoped>
.bg-red {
  background-color: rgb(249, 59, 52);
}
</style>

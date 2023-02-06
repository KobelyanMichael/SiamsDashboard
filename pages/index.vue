<template>
  <v-app id="inspire">
      <v-app-bar flat>
  <v-container class="fill-height d-flex align-center">
    <v-avatar
      class="me-10 ms-4"
      color="grey-darken-1"
      size="32"

      image="https://cdn4.buysellads.net/uu/1/127419/1670532177-Stock.jpg"
    ></v-avatar>

      <NavBarLinks/>
    <v-spacer></v-spacer>

    <v-responsive max-width="260">
      <v-text-field
        density="compact"
        variant="solo"
      ></v-text-field>
    </v-responsive>
  </v-container>
</v-app-bar>




  <div class="max-w-5xl mx-auto mt-5 px-5" style="margin-top:5% !important;">
  
    <pre v-if="status"><span>Статус:</span> {{ status }}</pre>
    <pre v-if="data"><span>Данные:</span> {{ data }}</pre>
    <pre v-if="csrfToken"><span>CSRF Token:</span> {{ csrfToken }}</pre>
  </div>



  </v-app>
</template>
<script lang="ts" setup>
definePageMeta({ auth: false })
const { data, status, getCsrfToken, getProviders } = useSession()

const providers = await getProviders()
const csrfToken = await getCsrfToken()
</script>

<style scoped>
pre {
  @apply bg-gray-800 text-white p-3 my-3 rounded shadow overflow-x-auto;
}

pre span {
  @apply text-green-400;
}
</style>
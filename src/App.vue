<script setup lang="ts">
import { useStore } from "./stores/app-store";
import TheHeader from "./components/TheHeader.vue";
import { onMounted } from "vue";
const store = useStore();
onMounted(() => {
  store.getTrending();
});
</script>

<template>
  <v-container>
    <TheHeader></TheHeader>
    <RouterView />
  </v-container>
</template>

<style scoped></style>

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
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="search-result">Search Result</RouterLink>
    <RouterLink to="/gif-info">Gif Info</RouterLink>
    <RouterLink to="/author">Author</RouterLink>
    <RouterView />
  </v-container>
</template>

<style scoped></style>

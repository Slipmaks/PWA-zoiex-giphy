<script setup lang="ts">
import { useStore } from "./stores/app-store";
import TheHeader from "./components/TheHeader.vue";
const store = useStore();
</script>

<template>
  <v-container>
    <TheHeader></TheHeader>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/gif-info">Gif info</RouterLink>
    <RouterLink to="/author">Author</RouterLink>
    <RouterView />
  </v-container>
</template>

<style scoped></style>

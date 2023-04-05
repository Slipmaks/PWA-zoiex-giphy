<template>
  <div v-if="store.searchResultGifs.data?.length">
    <h2>{{ store.searchResultGifs.data[0].id }}</h2>
    <img
      :src="store.searchResultGifs.data[0].images.downsized.url"
      :alt="store.searchResultGifs.data[0].title"
    />
  </div>
  <div v-else>
    <img
      :src="store.randomGif.data.images.downsized.url"
      :alt="store.randomGif.data.title"
    />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../stores/app-store";
const store = useStore();
</script>

<style scoped></style>

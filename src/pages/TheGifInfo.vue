<template>
  <h2>Gif Info</h2>
  <div>
    <TheGif
      :gif="store.currentGif"
      :title="store.currentGif.title"
      :gif-src="store.currentGif.images.downsized_large.url"
      :author-link="store.currentGif.user.profile_url"
      :user="store.currentGif.user"
    ></TheGif>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../stores/app-store";
import TheGif from "../components/TheGif.vue";
const store = useStore();
</script>

<style scoped></style>

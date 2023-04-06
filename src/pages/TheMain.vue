<script setup lang="ts">
import { useStore } from "../stores/app-store";
import TheGif from "../components/TheGif.vue";
const store = useStore();
</script>

<template>
  <div>
    <h2>Random list</h2>
    <div v-if="store.trendingGifs.data" class="d-flex flex-wrap">
      <div
        v-for="random in store.trendingGifs.data"
        :key="random.id"
        class="d-flex justify-center my-2 images"
      >
        <TheGif
          :title="random.title"
          :author-link="random.user?.profile_url"
          :gif-src="random.images.fixed_height.url"
        ></TheGif>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

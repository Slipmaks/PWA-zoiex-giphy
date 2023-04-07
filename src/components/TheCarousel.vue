<template>
  <v-carousel hide-delimiters>
    <v-carousel-item v-for="item in store.trendingGifs.data" :key="item.id">
      <TheGif
        :gif="item"
        :title="item.title"
        :author-link="item.user?.profile_url"
        :gif-src="item.images.fixed_height.url"
        :user="item.user"
      ></TheGif>
    </v-carousel-item>
  </v-carousel>
</template>
<script setup lang="ts">
import TheGif from "./TheGif.vue";
import { useStore } from "../stores/app-store";
import { it } from "node:test";

const store = useStore();
</script>

<template>
  <div>
    <div
      v-if="store.searchResultGifs.data?.length"
      class="d-flex flex-wrap justify-center images"
    >
      <div
        class="ma-2"
        v-for="item in store.searchResultGifs.data"
        :key="item.id"
      >
        <TheGif
          :gif="item"
          :title="item.title"
          :gif-src="item.images.downsized.url"
          :author-link="item.user?.profile_url"
          :user="item.user"
        />
      </div>
    </div>

    <div v-if="store.randomGif.data">
      <h2>Ooops! Bad request &#128517;</h2>
      <h2>Take random gif &#128519;</h2>
      <TheGif
        :gif="store.randomGif.data"
        :title="store.randomGif.data.title"
        :author-link="store.randomGif.data.user.profile_url"
        :user="store.randomGif.data.user"
        :gif-src="store.randomGif.data.images['downsized_large'].url"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../stores/app-store";
import TheGif from "../components/TheGif.vue";

const store = useStore();
</script>

<style scoped></style>

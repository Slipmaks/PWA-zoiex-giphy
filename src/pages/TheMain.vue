<script setup lang="ts">
import { useStore } from "../stores/app-store";
import { ref, onMounted, onUnmounted } from "vue";
import TheGif from "../components/TheGif.vue";
const store = useStore();
const scrollComponent = ref(null);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
const handleScroll = () => {
  const element: HTMLDivElement = scrollComponent.value! as HTMLDivElement;
  const rect = element.getBoundingClientRect();
  if (rect.bottom < window.innerHeight) {
    store.loadMore();
  }
};
</script>

<template>
  <div ref="scrollComponent">
    <h2>Random list</h2>
    <div
      v-if="store.trendingGifs.data"
      class="d-flex flex-wrap justify-space-evenly align-stretch"
    >
      <div
        v-for="random in store.trendingGifs.data"
        :key="random.id"
        class="images mx-2"
      >
        <TheGif
          :gif="random"
          :title="random.title"
          :author-link="random.user?.profile_url"
          :user="random.user"
          :gif-src="random.images.fixed_width.url"
        ></TheGif>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

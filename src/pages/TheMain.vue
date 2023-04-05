<script setup lang="ts">
import { useStore } from "../stores/app-store";
import { onMounted } from "vue";
const store = useStore();
onMounted(() => {
  store.getTrending();
});
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
        <img :src="random.images.fixed_height.url" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.images {
  flex: 0 0 100%;
}
@media (min-width: 599.99px) {
  .images {
    flex: 0 0 50%;
  }
}
@media (min-width: 959.99px) {
  .images {
    flex: 0 0 33.333333%;
  }
}
@media (min-width: 1263.99px) {
  .images {
    flex: 0 0 25%;
  }
}
</style>

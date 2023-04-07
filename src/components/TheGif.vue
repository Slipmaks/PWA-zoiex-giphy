<template>
  <div class="d-flex flex-column text-center">
    <h2>{{ props.title }}</h2>
    <img
      :src="props.gifSrc"
      :alt="props.title"
      @click="store.getGifPage(gif)"
      class="pointer"
    />
    <div class="d-flex w-100" v-if="gifSrc">
      <v-btn
        density="comfortable"
        rounded="0"
        class="w-50"
        color="#DB9758"
        v-if="user"
        @click="store.getAuthorPage(user as UserResponse)"
        >Author page</v-btn
      >
      <v-btn
        density="comfortable"
        class="me-2 text-none w-50"
        color="#6FDC78"
        prepend-icon="mdi-export-variant"
        variant="flat"
        rounded="0"
        @click="shareHandler(title as string, gif.url)"
        >Share</v-btn
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from "../stores/app-store";
import { DataResponse, UserResponse } from "../interfaces/App";
const props = defineProps<{
  gif: DataResponse;
  title?: string;
  gifSrc?: string;
  authorLink?: string;
  user?: UserResponse;
}>();

const store = useStore();
const shareHandler = (title: string, url: string) => {
  navigator.share({
    title: title,
    url: url,
  });
};
</script>
<style scoped>
.pointer {
  cursor: pointer;
}
</style>

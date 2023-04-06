<template>
  <div class="d-flex flex-column text-center">
    <h2>{{ props.title }}</h2>
    <img :src="props.gifSrc" :alt="props.title" />
    <a v-if="props.authorLink" :href="props?.authorLink">Open author</a>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
  gifSrc: string;
  authorLink?: string;
}>();
</script>

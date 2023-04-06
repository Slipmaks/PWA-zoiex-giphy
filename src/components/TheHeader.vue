<template>
  <header class="d-sm-flex my-6">
    <router-link to="/"
      ><img src="../assets/logo.png" alt="logo" class="mr-2"
    /></router-link>

    <v-text-field
      label="search"
      hide-details="auto"
      v-model="inputField"
      @update:model-value="getGifData"
    ></v-text-field>
  </header>
</template>
<script setup lang="ts">
import { useStore } from "../stores/app-store";
import { ref } from "vue";
const inputField = ref("");

const store = useStore();
const debounce = (func: Function, timeout = 1500) => {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
const getGifData = debounce(() => store.findGifViaSearch(inputField.value));
</script>

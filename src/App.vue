<script setup lang="ts">
import { useStore } from "./stores/app-store";
import TheHeader from "./components/TheHeader.vue";
import { onMounted } from "vue";
const store = useStore();
onMounted(() => {
  store.getTrending();
});
</script>

<template>
  <v-container>
    <TheHeader></TheHeader>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </v-container>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

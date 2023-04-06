<template>
  <div>
    <h2>The Author</h2>
    <div
      class="d-flex align-center justify-space-around flex-column flex-md-row"
    >
      <img
        class="w-50"
        :src="store.currentUser.avatar_url"
        :alt="store.currentUser.username"
      />
      <div>
        <p class="text-h6 text-md-h2 font-weight-medium">
          Username: {{ store.currentUser.username }}
        </p>
        <a
          :href="store.currentUser.profile_url"
          target="_blank"
          class="text-decoration-underline text-white"
          >Giphy user account</a
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from "../stores/app-store";

const store = useStore();
</script>

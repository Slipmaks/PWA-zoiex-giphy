<template>
  <div>
    <h2>The Author</h2>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6" md="4">
        <img
          class="w-100"
          :src="store.currentUser.avatar_url"
          :alt="store.currentUser.username"
        />
      </v-col>
      <v-col cols="12" md="4">
        <div v-if="store.currentUser.profile_url">
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
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
import { useStore } from "../stores/app-store";

const store = useStore();
</script>

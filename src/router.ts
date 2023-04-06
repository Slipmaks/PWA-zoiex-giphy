import { createRouter, createWebHashHistory } from "vue-router";
import TheAuthor from "./pages/TheAuthor.vue";
import TheGifInfo from "./pages/TheGifInfo.vue";
import TheMain from "./pages/TheMain.vue";
import TheSearchResults from "./pages/TheSearchResults.vue";
const routes = [
  { path: "/", component: TheMain },
  { path: "/gif-info", component: TheGifInfo },
  { path: "/author", component: TheAuthor },
  { path: "/search-result", component: TheSearchResults },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

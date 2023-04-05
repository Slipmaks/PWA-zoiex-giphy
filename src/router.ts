import { createRouter, createWebHashHistory } from "vue-router";
import TheAuthor from "./pages/TheAuthor.vue";
import TheGif from "./pages/TheGif.vue";
import TheMain from "./pages/TheMain.vue";
const routes = [
  { path: "/", component: TheMain },
  { path: "/gif-info", component: TheGif },
  { path: "/author", component: TheAuthor },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

import { createMemoryHistory, createRouter } from "vue-router";
import MainPage from "../pages/mainPage/MainPage.vue";
import ItemPage from "../pages/itemPage/ItemPage.vue";

export const routes = [
  { path: "/", component: MainPage },
  { path: `/list/:id`, component: ItemPage },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

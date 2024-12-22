import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LibraryPage from "../views/LibraryPage.vue";
import PlayerPage from "../views/PlayerPage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/library",
        name: "Library",
        component: LibraryPage,
    },
    {
        path: "/player/:videoId",
        name: "Player",
        component: PlayerPage,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;

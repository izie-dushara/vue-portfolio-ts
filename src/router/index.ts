import { createRouter, createWebHistory, Router } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import PortfoliosView from "../views/PortfoliosView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import SkillsView from "../views/SkillsView.vue";

const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/portfolios",
            name: "portfolios",
            component: PortfoliosView,
        },
        {
            path: "/portfolios/:id",
            name: "portfolio",
            component: PortfolioView,
        },
        {
            path: "/skills",
            name: "skills",
            component: SkillsView,
        },
        {
            path: "/:catchAll(.*)",
            name: "not-found",
            component: NotFoundView,
        },
    ],
});

export default router;

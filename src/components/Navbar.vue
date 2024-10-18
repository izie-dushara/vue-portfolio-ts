<script setup lang="ts">
import {
    RouteLocationNormalizedLoaded,
    RouterLink,
    useRoute,
} from "vue-router";
const route: RouteLocationNormalizedLoaded = useRoute();

const isActiveLink = (routePath: string): boolean => {
    return route.path === routePath;
};
</script>

<template>
    <header>
        <RouterLink to="/" class="logo">
            <span><</span>
            <p>Izie Zahba</p>
            <span>/></span>
        </RouterLink>
        <nav>
            <RouterLink
                to="/"
                :class="[
                    'nav-link',
                    isActiveLink('/') ? 'nav-link--active' : '',
                ]"
            >
                Home
            </RouterLink>
            <RouterLink
                to="/skills"
                :class="[
                    'nav-link',
                    isActiveLink('/skills') ? 'nav-link--active' : '',
                ]"
            >
                Skills
            </RouterLink>
            <RouterLink
                to="/portfolios"
                :class="[
                    'nav-link',
                    isActiveLink('/portfolios') ? 'nav-link--active' : '',
                ]"
            >
                Portfolios
            </RouterLink>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 5rem;
    top: 0;
    z-index: 20;
    position: sticky;
    background-color: #d5bdaf;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem;
}

.logo {
    display: flex;
    align-items: center;
    color: #000;
	font-weight:700;
	font-size: 1.5rem;

    &:hover {
        color: #edede9;
        border-radius: 0.375rem;
        padding: 0.5rem;
    }

    span {
		font-family: sans-serif;
		font-weight: 700;
        &:last-of-type {
            margin-left: 0.5rem;
        }
    }

}

nav {
    display: flex;
    gap: 0.5rem;
}

.nav-link {
    border-radius: 0.375rem;
    padding: 0.5rem;
    font-weight: 600;
    color: #000;
    &:hover {
        background-color: #edede9;
    }
}

.nav-link--active {
    background-color: #e3d5ca;
}
</style>

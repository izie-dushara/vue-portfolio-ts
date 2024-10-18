<script setup lang="ts">
import { computed, ref } from "vue";
import { RouteLocationNormalizedGeneric, useRoute } from "vue-router";
import portfolioData from "../data/portfolios.json";

interface Portfolio {
    id: number;
    image: string;
    description: string;
    title: string;
    links: {
        github: string;
        demo: string;
    };
}

const portfolios = ref<Portfolio[]>(portfolioData);
const route: RouteLocationNormalizedGeneric = useRoute();
const portfolioId: number = Number(route.params.id);

const portfolio = computed(() => {
    return portfolios.value.find((item) => item.id === portfolioId);
});
</script>

<template>
    <div v-if="portfolio" class="portfolio">
        <section>
            <p class="title">
                {{ portfolio.title }}
            </p>
            <div class="container">
                <img :src="`../..${portfolio.image}`" :alt="portfolio.title" />
            </div>
        </section>
        <section>
            <p class="subtitle">Description</p>
            {{ portfolio.description }}
        </section>
        <section>
            <p class="subtitle">Links</p>
            <div>
                GitHub:
                <a
                    :href="portfolio.links.github"
                    >{{ portfolio.links.github }}</a
                >
            </div>
            <div>
                <!-- TODO: Add conditional for source code without website link -->
                Website:
                <a
                    :href="portfolio.links.demo"
                    >{{ portfolio.links.demo }}</a
                >
            </div>
        </section>
        <section class="back">
            <RouterLink to="/portfolios">
                <i class="pi pi-arrow-left"></i> &nbsp; Back to the
                Portfolios
            </RouterLink>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.portfolio {
    text-align: center;
}
.title {
    font-size: 2rem;
    font-weight: 700;
    padding: 0.5rem 0;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.subtitle {
    font-size: 1.5rem;
    font-weight: 700;
	margin: 0.5rem 0;
}
.container {
    display: flex;
    justify-content: center;
}

img {
    border-radius: 1rem;
    padding: 0.5rem;
    width: 900px;
}

a {
    color: #603001;
	&:hover {
		color: #1e40af;
	}
}

.back {
	margin-top: 0.5rem;
}
</style>

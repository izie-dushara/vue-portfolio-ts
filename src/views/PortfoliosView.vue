<script setup lang="ts">
import { ref } from "vue";
import PortfolioCards from "../components/PortfolioCards.vue";
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
</script>

<template>
    <section>
        <section>
            <p class="title">
                Portfolios
            </p>
            <p class="summary">
                Here is among the projects that I personally had done:
            </p>
        </section>
        <section class="container">
            <div class="cards">
                <PortfolioCards
                    v-for="portfolio in portfolios"
                    :key="portfolio.id"
                    :portfolio="portfolio"
                />
            </div>
        </section>
    </section>
</template>

<style lang="scss" scoped>
.title {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    padding: 0.5rem 0;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.summary {
    color: #1f2937;
    margin: 0 3.5rem;
}

.container {
    display: flex;
    justify-content: center;
}

.cards {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	margin: 2rem 0;
	padding: 0 0.5rem;
	gap: 1rem;
}
</style>
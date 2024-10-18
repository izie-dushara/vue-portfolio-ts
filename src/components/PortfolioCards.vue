<script setup lang="ts">
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

defineProps<{
    portfolio: Portfolio;
}>();
</script>

<template>
    <div class="portfolio-container">
        <p class="title">{{ portfolio.title }}</p>
        <img :src="portfolio.image" :alt="portfolio.title" />
        <p class="instruction">Link to GitHub and/or Website:</p>
        <nav>
            <a target="_blank" :href="portfolio.links.github"
                ><i class="pi pi-github"></i
            ></a>
            <a target="_blank" :href="portfolio.links.demo"
                ><i class="pi pi-desktop"></i
            ></a>
        </nav>
        <p>
            Want to know the nitty-gritty?
            <a :href="`portfolios/${portfolio.id}`"> Click Here</a>
        </p>
    </div>
</template>

<style lang="scss" scoped>
.portfolio-container {
    background-color: white;
    box-shadow: 0 4px 8px rgb(0, 0, 0, 0.3);
    padding: 1.5rem;
    border-radius: 0.5rem;

    .title {
        text-align: center;
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-weight: 700;
        text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        margin-bottom: 0.5rem;
    }

    img {
        border-radius: 0.5rem;
    }

    .instruction {
        text-align: center;
        margin: 0.5rem 0;
    }

    nav {
        display: flex;
        justify-content: center;
        gap: 2rem;
        font-size: 1.875rem;
        padding: 0.5rem;
        a {
            background-color: #603001;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            border-radius: 50%;
            height: 3rem;
            width: 3rem;
            &:hover {
                background-color: #1e40af;
                color: #000;
            }
        }
    }

    p {
        text-align: center;
        a {
            color: #603001;

            &:hover {
                color: #1e40af;
            }
        }
    }
}
</style>

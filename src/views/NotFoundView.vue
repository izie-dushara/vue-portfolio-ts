<script setup lang="ts">
import { RouterLink } from "vue-router";
import { Vue3Lottie } from "vue3-lottie";
import NotFoundAnimation from "../animations/NotFoundAnimation.json";
</script>

<template>
    <section class="not-found">
        <Vue3Lottie
            :animationData="NotFoundAnimation"
            :height="350"
            :width="350"
            :autoplay="true"
        />
        <p class="text-gray-700">Unfortunately Page Not Found</p>
        <RouterLink to="/" class="hover:text-blue-800 text-[#603001] underline"
            ><i class="pi pi-arrow-left underline"></i>&nbsp;&nbsp;Return to the
            Home Page</RouterLink
        >
    </section>
</template>

<style lang="scss" scoped>
.not-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    p {
        color: #374151;
    }
    a {
        color: #603001;

        &:hover {
            color: #1e40af;
        }
    }
}
</style>

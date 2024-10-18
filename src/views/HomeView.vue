<script setup lang="ts">
import Hero from "../components/Hero.vue";
import Summary from "../components/Summary.vue";
</script>

<template>
    <section class="index">
        <div class="divide">
            <Hero />
            <Summary />
        </div>
    </section>
</template>

<style lang="scss" scoped>

.index {
	min-height: calc(100vh - 10rem);
}
.divide {
    display: flex;
}
</style>

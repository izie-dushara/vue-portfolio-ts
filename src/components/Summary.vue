<script setup lang="ts">
import SocialLinks from './SocialLinks.vue';
</script>

<template>
    <section class="introduction">
        <p class="title">Self-Introduction</p>
        <p class="summary">
            Hello! My name is Izzul Hazim bin Zahba. A highly motivated and
            dedicated student pursuing a BSc (Hons) in Software Engineering,
            actively seeking an industrial training opportunity in IT or related
            fields to apply theoretical knowledge and acquire valuable practical
            experience. Committed to continuously enhancing proficiency in PHP,
            Java, HTML, CSS, and JavaScript, to expand knowledge and skills in
            software engineering. Available to commence industrial training from
            13th January to 2nd May 2025. Here is the link to related
            communication tools:
        </p>
        <section class="social-links">
            <SocialLinks />
        </section>
    </section>
</template>

<style lang="scss" scoped>
.introduction
{
	flex: 2;
}
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

.social-links {
	display: flex;
	gap: 1rem;
	justify-content: center;
	padding: 0.5rem 0;
}
</style>

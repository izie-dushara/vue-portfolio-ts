<script setup lang="ts">
interface Skill {
    id: number;
    title: string;
    subtitle: string;
    icon: string;
}

defineProps<{
    skill: Skill;
}>();
</script>

<template>
    <section class="skill-container">
		<img :src="skill.icon" :alt="skill.title" />
		<h2>{{ skill.title }}</h2>
		<p>{{ skill.subtitle }}</p>
	</section>
</template>

<style lang="scss" scoped>
.skill-container {
    background-color: white;
    box-shadow: 0 4px 8px rgb(0, 0, 0, 0.3);
	padding: 1.5rem;
	border-radius: 0.5rem;
	h2 {
		font-size: 1.25rem;
		line-height: 1.75rem;
		text-align: center;
		font-weight: 700;
		margin: 0.5rem 0;
	}

	img {
		height: 5rem;
		width: 100%;
	}
	p {
		color: #374151;
		text-align: center;
		margin: 0.5rem 0;
	}
}
</style>

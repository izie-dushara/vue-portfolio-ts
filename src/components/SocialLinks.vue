<script setup lang="ts">
import { ref } from "vue";
import socialsData from "../data/socials.json";
interface SocialLink {
    id: number;
    name: string;
    link: string;
    icon: string;
}

const socials = ref<SocialLink[]>(socialsData);
</script>

<template>
	<div v-for="social in socials" :key="social.id">
		<a target="_blank" :href="social.link" class="social-icon">
			<span>{{ social.name }}</span>
			<i :class="[social.icon]"></i>
		</a>
	</div>
</template>

<style lang="scss" scoped>
.social-icon {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	color: #603001;
	&:hover {
		color: #1e40af;
	}
	i {
		font-size: 2rem;
		line-height: 2rem;
	}
}
</style>

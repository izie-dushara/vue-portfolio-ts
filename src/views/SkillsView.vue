<script setup lang="ts">
import { ref } from "vue";
import SkillCards from "../components/SkillCards.vue";
import skillData from "../data/skills.json";
interface Skill {
    id: number;
    title: string;
    subtitle: string;
    icon: string;
}
const skills = ref<Skill[]>(skillData);
</script>

<template>
    <section>
        <section>
            <p class="title">Skills Learned</p>
            <p class="summary">
                Throughout my university journey, here are among the skills that
                I gain from that experience:
            </p>
            <section>
                <div class="container">
                    <div class="cards grid grid-cols-3 mx-8 py-2 gap-4">
                        <SkillCards
                            v-for="skill in skills"
                            :key="skill.id"
                            :skill="skill"
                        />
                    </div>
                </div>
            </section>
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
	grid-template-columns: repeat(3, minmax(0, 1fr));
	margin: 2rem 0;
	padding: 0 0.5rem;
	gap: 1rem;
}
</style>

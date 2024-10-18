<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Vue3Lottie } from "vue3-lottie";
const passions: string[] = [
    "Web Developer",
    "Student",
	"PHP Enthusiast",
	"TypeScript Hobbyist",
    "One Must Imagine Sissyphus Happy",
];

const passionIndex = ref<number>(0);

const characterIndex = ref<number>(0);

const typeWriterText = ref<string | null>("");

const updateText = () => {
    characterIndex.value++;

    // console.log(passions[passions.length - 1])
    if (passions[passionIndex.value] !== passions[passions.length - 1]) {
        typeWriterText.value = `I am a ${passions[passionIndex.value].slice(
            0,
            characterIndex.value
        )}`;
    } else {
        typeWriterText.value = passions[passionIndex.value].slice(
            0,
            characterIndex.value
        );
    }

    if (characterIndex.value === passions[passionIndex.value].length) {
        passionIndex.value++;
        characterIndex.value = 0;
    }

    if (passionIndex.value === passions.length) {
        passionIndex.value = 0;
    }

    setTimeout(updateText, 300);
};
onMounted(() => {
    updateText();
});
</script>

<template>
    <section class="hero">
        <div class="hero-animation">
            <Vue3Lottie
                :animationLink="'https://lottie.host/8668c38e-6dcd-4678-b736-65809b3c00cd/5vh25IWvym.json'"
                :height="350"
                :width="350"
                :autoplay="true"
            />
        </div>
        <p>{{ typeWriterText }}</p>
    </section>
</template>

<style lang="scss" scoped>
.hero {
    flex: 1;
}
.hero-animation {
    z-index: 10;
}

p {
    text-align: center;
    font-size: 2rem;
    font-family: "Permanent Marker", cursive;
}
</style>

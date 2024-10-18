<script setup lang="ts">
const d: Date = new Date();
let year: number = d.getFullYear();
</script>

<template>
    <footer>
        <section>Izzul Hazim &copy; {{ year }}</section>
        <section class="with-love">
            Made with
            <img src="@/assets/vue.svg" alt="" class="h-6" />
        </section>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    height: 5rem;
    bottom: 0;
    z-index: 20;
    font-weight: 700;
    position: sticky;
    background-color: #d5bdaf;
    display: flex;
    justify-content: space-between;
    align-items: center;
	opacity: 0.7;
    padding: 2.5rem;

	.with-love {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	img {
		height: 2rem;
	}
}
</style>

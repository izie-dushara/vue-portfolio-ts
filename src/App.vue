<script setup lang="ts">
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import { RouterView } from "vue-router";
</script>

<template>
    <Navbar />
    <main>
        <RouterView />
    </main>
    <Footer />
</template>

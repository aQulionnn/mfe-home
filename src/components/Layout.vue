<template>
    <div class="layout">
        <Header />
        <slot />
    </div>
</template>

<script setup lang="ts">
    import Header from "./Header.vue";
</script>

<style scoped>
    .layout {
        max-width: 100dvw;
        min-height: 100dvh;
        display: grid;
    }
</style>
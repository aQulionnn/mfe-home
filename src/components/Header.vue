<template>
    <header class="header">
        <nav class="nav">
            <router-link to="/" class="nav-item">HOME</router-link>
            <router-link to="/auth" class="nav-item">AUTH</router-link>
        </nav>
    </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
    .header {
        position: fixed;

        width: 100dvw;
        height: 60px;
    }

    .nav {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    .nav-item {
        font-size: 1.25em;
        color: white;
        text-decoration: none;
    }
</style>

<script lang="ts">
    import {defineComponent} from "vue";
    import Layout from "../components/Layout.vue";
    import AuthWrapper from "../components/AuthWrapper.vue";

    export default defineComponent({
        components: {AuthWrapper, Layout}
    })
</script>

<template>
    <Layout>
        <main class='main' />
    </Layout>
    <Layout>
        <AuthWrapper />
    </Layout>
</template>

<style scoped>
    .main {
        width: 100dvw;
        height: 100dvh;

        padding: 0;
        display: block;
    }
</style>
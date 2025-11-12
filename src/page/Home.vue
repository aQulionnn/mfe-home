<script setup lang="ts" type="module">
    import Layout from "../components/Layout.vue";
    import { ref } from 'vue'
    import "@aqulionnn/artique-ui-lib"

    const name = ref('')

</script>

<template>
    <Layout>
        <main class='main' />
        <app-input label="Name"
                   .value="name"
                   @change="e => name = e.target.value"></app-input>
    </Layout>
</template>

<style scoped>
    .main {
        background: #000;
        width: 100dvw;
        height: 100dvh;

        padding: 0;
        display: block;
    }
</style>
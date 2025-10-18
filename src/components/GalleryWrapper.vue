<script setup lang="ts">
    import { onMounted } from 'vue'

    onMounted(async () => {
        const auth = await import('gallery/Gallery')
        auth.mount(document.getElementById('gallery'))
    })
</script>

<template>
    <div id="gallery" />
</template>

<style scoped>

</style>
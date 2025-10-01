<script setup lang="ts">
    import { onMounted } from 'vue'

    onMounted(async () => {
        const auth = await import('auth/Auth')
        auth.mount(document.getElementById('auth'))
    })
</script>

<template>
    <div id="auth" />
</template>
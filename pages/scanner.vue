<template>
    <div>
        <h1>QR Code Scanner</h1>
        <QrCodeScanner />
    </div>
</template>

<script setup lang="ts">
    import QrCodeScanner from '~/components/QrCodeScanner.vue';
</script>

<style scoped>
    h1 {
        text-align: center;
        margin: 20px 0;
    }
</style>

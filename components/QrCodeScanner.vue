<template>
    <div class="qr-code-scanner">
        <QrReader @decode="onDecode"
                  @init="onInit"
                  :paused="paused"
                  class="scanner-view" />
        <div v-if="initializing" class="scanner-info">
            Initializing Camera...
        </div>
        <div v-if="error" class="scanner-error">
            {{ error }}
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import QrReader from 'vue3-qr-reader';

    const initializing = ref(true);
    const error = ref<string | null>(null);
    const paused = ref(false);

    function onDecode(decodedString: string) {
        // Handle the decoded QR code data
        console.log('Decoded string:', decodedString);
        // For example, navigate to a URL or display the data
        alert(`QR Code Data: ${decodedString}`);
        paused.value = true; // Pause the scanner after successful scan
    }

    function onInit(promise: Promise<void>) {
        promise
            .then(() => {
                initializing.value = false;
            })
            .catch((e) => {
                error.value = e.message || 'Cannot initialize QR reader';
            });
    }
</script>

<style scoped>
    .qr-code-scanner {
        position: relative;
        width: 100%;
        height: 100vh;
    }

    .scanner-view {
        width: 100%;
        height: 100%;
    }

    .scanner-info,
    .scanner-error {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        color: white;
        text-align: center;
        padding: 10px;
    }

    .scanner-error {
        background-color: rgba(255, 0, 0, 0.7);
    }

    .scanner-info {
        background-color: rgba(0, 0, 0, 0.7);
    }
</style>

<template>
  <div>
    <div ref="scanner" class="scanner-container"></div>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, ref, onMounted, onBeforeUnmount } from 'vue';
import Quagga from 'quagga';
import { useRuntimeConfig } from '#app';

const error = ref(null);
const scanner = ref(null);
const emits = defineEmits(['barcode-detected']);
const config = useRuntimeConfig();

const onDetected = async (result: any) => {
  const code = result.codeResult.code;
  emits('barcode-detected', code);

  try {
    // Make a POST request to the backend to update inventory
    const response = await $fetch('/api/inventory/update/', {
      baseURL: config.public.apiBase,
      method: 'POST',
      body: { upcCode: code },
    });
    alert('Inventory updated successfully!');
  } catch (err) {
    console.error(err);
    alert('Failed to update inventory.');
  }
};

onMounted(() => {
  Quagga.init(
    {
      inputStream: {
        name: 'Live',
        type: 'LiveStream',
        target: scanner.value,
        constraints: {
          facingMode: 'environment',
        },
      },
      decoder: {
        readers: ['upc_reader'],
      },
    },
    (err) => {
      if (err) {
        console.error(err);
        error.value = 'Error starting barcode scanner.';
        return;
      }
      Quagga.start();
    }
  );

  Quagga.onDetected(onDetected);
});

onBeforeUnmount(() => {
  Quagga.stop();
  Quagga.offDetected(onDetected);
});
</script>

<style scoped>
.scanner-container {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}
</style>

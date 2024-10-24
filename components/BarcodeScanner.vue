<template>
  <div>
    <div ref="scanner" class="scanner-container"></div>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import Quagga from 'quagga';

export default {
  name: 'BarcodeScanner',
  data() {
    return {
      error: null,
    };
  },
  mounted() {
    Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: this.$refs.scanner,
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
          this.error = 'Error starting barcode scanner.';
          return;
        }
        Quagga.start();
      }
    );

    Quagga.onDetected(this.onDetected);
  },
  beforeDestroy() {
    Quagga.stop();
    Quagga.offDetected(this.onDetected);
  },
  methods: {
    onDetected(result) {
      const code = result.codeResult.code;
      this.$emit('barcode-detected', code);
    },
  },
};
</script>

<style scoped>
.scanner-container {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}
</style>

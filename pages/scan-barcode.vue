<template>
  <div class="container">
    <h1>Scan Barcode</h1>
    <BarcodeScanner @barcode-detected="handleBarcodeDetected" />
    <div v-if="detectedBarcode" class="mt-4">
      <p>Detected Barcode: {{ detectedBarcode }}</p>
      <!-- Optionally, display item details fetched from backend -->
    </div>
  </div>
</template>

<script>
import BarcodeScanner from '~/components/BarcodeScanner.vue';

export default {
  name: 'ScanBarcode',
  components: {
    BarcodeScanner,
  },
  data() {
    return {
      detectedBarcode: null,
    };
  },
  methods: {
    handleBarcodeDetected(code) {
      this.detectedBarcode = code;
      // You can make an API call here to fetch or update inventory data
      // Example:
      // this.$axios.post('/api/update-inventory', { upcCode: code })
      //   .then(response => {
      //     // Handle success
      //   })
      //   .catch(error => {
      //     // Handle error
      //   });
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}
</style>

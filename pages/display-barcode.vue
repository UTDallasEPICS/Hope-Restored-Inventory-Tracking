<template>
  <div class="container">
    <h1>Generate Barcode</h1>
    <input
      v-model="upcCode"
      placeholder="Enter UPC Code"
      class="form-control"
    />
    <button @click="generateBarcode" class="btn btn-primary mt-2">
      Generate
    </button>
    <div v-if="showBarcode" class="mt-4">
      <BarcodeGenerator :upcCode="upcCode" />
    </div>
  </div>
</template>

<script>
import BarcodeGenerator from '~/components/BarcodeGenerator.vue';

export default {
  name: 'DisplayBarcode',
  components: {
    BarcodeGenerator,
  },
  data() {
    return {
      upcCode: '',
      showBarcode: false,
    };
  },
  methods: {
    generateBarcode() {
      if (this.upcCode.length === 12) {
        this.showBarcode = true;
      } else {
        alert('Please enter a valid 12-digit UPC code.');
        this.showBarcode = false;
      }
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

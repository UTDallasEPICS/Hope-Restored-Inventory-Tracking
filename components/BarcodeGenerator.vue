<template>
  <div>
    <svg ref="barcode"></svg>
  </div>
</template>

<script>
import JsBarcode from 'jsbarcode';

export default {
  name: 'BarcodeGenerator',
  props: {
    upcCode: {
      type: String,
      required: true,
    },
  },
  mounted() {
    JsBarcode(this.$refs.barcode, this.upcCode, {
      format: 'UPC',
      lineColor: '#000',
      width: 2,
      height: 100,
      displayValue: true,
    });
  },
};
</script>

<style scoped>
/* Add any styles if necessary */
</style>

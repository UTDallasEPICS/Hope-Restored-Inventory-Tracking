<template>
  <div>
    <h1>Inventory</h1>

    <!-- Inventory Table Section -->
    <section id="inventory">
      <h2>Inventory</h2>
      <table>
        <thead>
          <tr>
            <th>Barcode</th>
            <th>Category</th>
            <th>Style</th>
            <th>Gender</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in inventory" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.style }}</td>
            <td>{{ item.gender }}</td>
            <td>{{ item.size }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.location}}</td>
            <td><BarcodeGenerator :upcCode="item.upcCode" /></td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import BarcodeGenerator from '~/components/BarcodeGenerator.vue';
import { useRuntimeConfig } from '#app';

const inventory = ref([]);
const config = useRuntimeConfig();

onMounted(async () => {
  try {
    inventory.value = await $fetch('/api/inventory/', {
      baseURL: config.public.apiBase,
    });
  } catch (error) {
    console.error('Fetch error:', error);
  }
});
</script>

<style scoped>
/* Add any styling you need for the table, similar to your original HTML page */
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px;
  border: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
}

td {
  text-align: center;
}
</style>

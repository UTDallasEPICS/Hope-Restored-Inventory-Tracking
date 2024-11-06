<template>
  <div>
    <h1>Inventory</h1>

    <!-- Inventory Table Section -->
    <section id="inventory">
      <h2>Inventory</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
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
            <td>{{ item.id }}</td>
            <td>{{ item.upcCode }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.style }}</td>
            <td>{{ item.gender }}</td>
            <td>{{ item.size }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.location }}</td>
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

<style>
/* Add any styling you need for the table */
table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed; /* Ensures that columns have a fixed width and borders show correctly */
}

th, td {
  padding: 12px;
  border: 1px solid #ddd; /* Border around each cell */
  text-align: center;
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */
}

/* Highlight the cell on hover */
th:hover, td:hover {
  background-color: #f4f4f4; /* Light highlight color */
}

/* Style for column headers */
th {
  background-color: #f9f9f9;
  font-weight: bold;
}

/* Style for table rows */
td {
  background-color: #fff;
}

/* Optional: Table row hover effect */
tr:hover {
  background-color: #f9f9f9; /* Row highlight on hover */
}
</style>

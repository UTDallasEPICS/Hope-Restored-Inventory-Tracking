<template>
  <div>
    <h1>Inventory</h1>

    <!-- Filter and Sort Section -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
      <div>
        <label for="sortOptions">Filter: </label>
        <select v-model="selectedSort" id="sortOptions" style="padding: 8px; border-radius: 4px; border: 1px solid #ddd;">
          <option value="alphabetical">Sort Alphabetically (Category)</option>
          <option value="recent">Sort by Most Recent Addition</option>
          <option value="dateAdded">Sort by Date Added</option>
        </select>
      </div>

      <input 
        v-model="searchQuery"
        type="text" 
        placeholder="Search..."
        style="padding: 8px; border-radius: 4px; border: 1px solid #ddd; width: 200px;"
      />
    </div>

    <!-- Inventory Table Section -->
    <section id="inventory">
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
          <tr v-for="item in sortedAndFilteredInventory" :key="item.id">
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
import { ref, computed, onMounted } from 'vue';
import BarcodeGenerator from '~/components/BarcodeGenerator.vue';
import { useRuntimeConfig } from '#app';

const inventory = ref([]);
const searchQuery = ref(''); // Search query model
const selectedSort = ref('alphabetical'); // Sort option model
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

// Computed property to filter and sort inventory based on search query and sort option
const sortedAndFilteredInventory = computed(() => {
  let filtered = inventory.value;

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(item => 
      Object.values(item).some(value => 
        value.toString().toLowerCase().includes(query)
      )
    );
  }

  // Sort based on selected option
  return filtered.slice().sort((a, b) => {
    if (selectedSort.value === 'alphabetical') {
      return a.category.localeCompare(b.category); // Alphabetical by category
    } else if (selectedSort.value === 'recent') {
      return b.id - a.id; // Assuming "id" is assigned sequentially, so higher ID means more recent
    } else if (selectedSort.value === 'dateAdded') {
      return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime(); // Sort by dateAdded if available
    }
    return 0;
  });
});
</script>

<style scoped>
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

<template>
  <div>
    <h1>Inventory</h1>
    <ul>
      <li v-for="item in inventory" :key="item.id">
        <p>{{ item.name }}</p>
        <BarcodeGenerator :upcCode="item.upcCode" />
      </li>
    </ul>
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

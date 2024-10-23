<!-- layouts/default.vue or App.vue -->
<template>
  <div>
    <HeaderComponent /> <!-- Include the header -->
    <NuxtPage />
  </div>
</template>

<script>
import HeaderComponent from '~/components/HeaderComponent.vue'; // Import your header component

export default {
  components: {
    HeaderComponent
  }
};
</script>

<style scoped>
/* Add your styles here */

</style>

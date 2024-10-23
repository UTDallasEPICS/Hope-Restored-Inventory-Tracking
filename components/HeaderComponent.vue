<!-- components/HeaderComponent.vue -->
<template>
    <header>
      <nav>
        <ul>
          <img src="../logo.png" style="width:65px; height:auto;">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/inventory">Inventory</nuxt-link></li>
          <li><nuxt-link to="/scanner">Scanner</nuxt-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
  };
  </script>
  
  <style scoped>
  /* Add styles for your header here */
  nav {
    background: #007bff;
    padding: 1rem;
  }
  
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
  </style>
  
<!-- components/HeaderComponent.vue -->
<template>
    <header>
      <nav class="sidebar">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkEWxs5zaMTeYj-qwtpxMkFhJtT4yieFiuQ&s" style="width:170px; height:auto;">
          <ul>
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
    @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Figtree:ital,wght@0,300..900;1,300..900&family=Quicksand:wght@600&display=swap');

    nav {
    background: #222222;
    padding: 1rem;
    }
  
  
    ul {
    list-style: none;
    padding: 0; /* Remove default padding */
    }

    li {
    margin-bottom: 1rem; /* Space between items */
    text-align: center;
    font-family: "Figtree";
    }
  
    a {
    color: white;
    text-decoration: none;
    }

    img {
        border-radius: 50%;
    }
  
    .sidebar {
    background: #333333;
    padding: 1rem;
    width: 170px; /* Adjust width as needed */
    position: fixed; /* Fix the sidebar in place */
    height: 100%; /* Full height */
    }

  </style>
  
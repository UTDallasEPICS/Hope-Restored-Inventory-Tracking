<template>
    <div>
      <main>
        <h1>Scanner Page</h1>
        <p>Welcome to the Scanner page. You can scan and see what item you added or donated here.</p>
      </main>
      <input type="file" name="image" accept="image/*" capture="environment">
    </div>
  </template>
  
  <script>
  export default {
    // You can add component-specific logic here if needed
    methods: {
    handleFileChange(event) {
      const file = event.target.files[0]; // Get the selected file
      if (file) {
        // You can now use the file (e.g., display it, upload it, etc.)
        console.log('Selected file:', file);
      }
    }
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here or import a separate CSS file */
  /*@import 'styles.css'; /* Adjust the path as necessary */
  
  .main-content {
    margin-left: 200px; /* Match the sidebar width */
    padding: 10px 200px; /* Add some padding for spacing */
    text-align: center; /* Center text within the main content */
  }
  </style>
  
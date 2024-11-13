<template>
  <div>
    <!-- Welcome Section -->
    <h1>Welcome to Hope Restored Missions!</h1>
    <p>This is the home page</p>

    <!-- About Us Section -->
    <section id="about-us" style="margin-top: 2em;">
      <!-- "Who We Are" Title -->
      <h1 class="who-we-are-title">Who We Are</h1>
      <p class="mission-statement">
        Hope Restored Missions exists to restore hope to those oppressed by the circumstances and tragedies of their lives. 
        We focus on the homeless and those facing housing insecurities.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  // Page-specific logic can go here if needed
}
</script>

<style scoped>
/* Styles for the home page */
h1 {
  font-size: 2em;
  color: #333;
}
#about-us {
  background-color: #f9f9f9;
  padding: 1em;
  border-radius: 8px;
  color: #333;
  line-height: 1.6;
  text-align: left; /* Align content to the left */
}
/* "Who We Are" Title Styling */
.who-we-are-title {
  font-size: 2.5em; /* Larger font for emphasis */
  font-weight: bold;
  color: #2e8b57; /* Darker green color */
  margin-bottom: 0.5em;
}
/* Mission Statement Styling */
.mission-statement {
  font-size: 1.5em; /* Big text for mission statement */
  font-weight: bold;
  color: #3cb371; /* Lighter green color */
  margin-bottom: 1em;
}
</style>
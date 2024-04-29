<template>
    <div class="home-page">
      <div class="welcome-header">
        <h1>Welcome to UG Forex </h1>
        <p>Master the art of trading currencies</p>
      </div>
      <div class="cta-section">
        <router-link to="/signup" class="cta-button">Get Started</router-link>
        <router-link to="/learn-more" class="cta-link">Learn More</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>
  .home-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .welcome-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .welcome-header h1 {
    font-size: 3rem;
    color: #2a4365; /* dark blue */
  }
  
  .welcome-header p {
    font-size: 1.5rem;
    color: #4a5568; /* gray */
  }
  
  .cta-section {
    display: flex;
    justify-content: center;
  }
  
  .cta-button,
  .cta-link {
    display: inline-block;
    padding: 1rem 2rem;
    margin: 0 1rem;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    color: #fff;
    transition: background-color 0.3s ease;
  }
  
  .cta-button {
    background-color: #38a169; /* green */
  }
  
  .cta-link {
    background-color: #4299e1; /* blue */
  }
  
  .cta-button:hover,
  .cta-link:hover {
    background-color: #2c7a40; /* darker green */
  }
  
  @media (max-width: 768px) {
    .welcome-header h1 {
      font-size: 2.5rem;
    }
  
    .welcome-header p {
      font-size: 1.2rem;
    }
  
    .cta-button,
    .cta-link {
      font-size: 1rem;
      padding: 0.8rem 1.5rem;
    }
  }
  </style>
  
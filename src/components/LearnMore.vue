<template>
    <div class="learn-more-page">
      <div class="content">
        <h2>Unlock Your Potential with UG Forex </h2>
        <p class="subtitle">Empowering Traders, Enriching Lives</p>
        <div class="features">
          <div class="feature-item">
            <div class="icon">
              <i class="fas fa-bullhorn"></i>
            </div>
            <h3>Free Signals</h3>
            <p>Receive free trading signals to guide your decisions in the market.</p>
          </div>
          <div class="feature-item">
            <div class="icon">
              <i class="fas fa-robot"></i>
            </div>
            <h3>Free Robot / Algo</h3>
            <p>Access free trading robots or algorithms to automate your trades.</p>
          </div>
          <div class="feature-item">
            <div class="icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <h3>Free Training</h3>
            <p>Get access to free training materials and resources to enhance your trading skills.</p>
          </div>
          <div class="feature-item">
            <div class="icon">
              <i class="fas fa-user-tie"></i>
            </div>
            <h3>Free Mentors</h3>
            <p>Connect with experienced mentors who can provide personalized guidance and support.</p>
          </div>
          <div class="feature-item">
            <div class="icon">
              <i class="fas fa-comments"></i>
            </div>
            <h3>24/5 Chat Services</h3>
            <p>Access round-the-clock chat support for any questions or assistance you may need.</p>
          </div>
          <div class="feature-item">
            <div class="icon">
              <i class="fas fa-user-secret"></i>
            </div>
            <h3>Experienced Traders</h3>
            <p>Join a community of experienced traders to share insights and strategies.</p>
          </div>
        </div>
        <div class="cta">
          <router-link to="/signup" class="cta-button">Start Trading Now</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LearnMore'
  }
  </script>
  
  <style scoped>
  .learn-more-page {
    background-color: #f9fafb;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .content {
    max-width: 90%;
    text-align: center;
  }
  
  h2 {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
    color: #2a4365;
  }
  
  .subtitle {
    font-size: 1.6rem;
    margin-bottom: 2.5rem;
    color: #4a5568;
  }
  
  .features {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
  
  .feature-item {
    flex: 1 1 300px;
    text-align: left;
    padding: 2rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .feature-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  .icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: #4299e1;
  }
  
  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #2a4365;
  }
  
  p {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    color: #4a5568;
  }
  
  .cta {
    margin-top: 3rem;
  }
  
  .cta-button {
    display: inline-block;
    padding: 1.5rem 4rem;
    font-size: 1.6rem;
    background-color: #4299e1;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #3182ce;
  }
  </style>
  
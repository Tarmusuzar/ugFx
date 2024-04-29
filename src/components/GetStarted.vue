<template>
    <div class="signup-page">
      <div class="content">
        <h2>Welcome to UG Forex</h2>
        <p class="subtitle">Create Your Account and Start Trading Today</p>
        <form @submit.prevent="submitForm" class="signup-form">
          <div class="form-group">
            <input type="text" v-model="formData.username" placeholder="Username" required>
          </div>
          <div class="form-group">
            <input type="email" v-model="formData.email" placeholder="Email" required>
          </div>
          <div class="form-group">
            <input type="password" v-model="formData.password" placeholder="Password" required>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p class="login-info">Already have an account? <router-link to="/login">Log in here</router-link>.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SignUp',
    data() {
      return {
        formData: {
          username: '',
          email: '',
          password: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Here you can implement the logic to handle the form submission,
        // such as sending the data to the server for processing.
        console.log('Form submitted with data:', this.formData);
        // You may also want to reset the form after submission
        this.resetForm();
      },
      resetForm() {
        // Reset the form fields
        this.formData.username = '';
        this.formData.email = '';
        this.formData.password = '';
      }
    }
  }
  </script>
  
  <style scoped>
  .signup-page {
    background-color: #f8f9fa;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px; /* Add padding to the sides for mobile responsiveness */
  }
  
  .content {
    max-width: 100%; /* Make content width 100% for better responsiveness */
    text-align: center;
  }
  
  h2 {
    font-size: 2.8rem; /* Increase font size for a bold welcome message */
    margin-bottom: 1.5rem;
    color: #2a4365;
  }
  
  .subtitle {
    font-size: 1.4rem; /* Add a subtitle for clearer call-to-action */
    margin-bottom: 2rem;
    color: #4a5568;
  }
  
  .signup-form {
    max-width: 400px; /* Limit form width for better readability */
    margin: 0 auto; /* Center the form horizontally */
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 100%; /* Make input fields width 100% */
    padding: 1rem;
    font-size: 1.2rem;
    border: 1px solid #cbd5e0;
    border-radius: 0.5rem;
    background-color: #edf2f7;
    transition: border-color 0.3s ease;
  }
  
  button[type="submit"] {
    width: 100%; /* Make button width 100% */
    padding: 1rem;
    font-size: 1.2rem;
    background-color: #4299e1;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button[type="submit"]:hover {
    background-color: #3182ce;
  }
  
  .login-info {
    font-size: 1.1rem;
    margin-top: 1.5rem;
    color: #718096;
  }
  
  .login-info router-link {
    color: #4299e1;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .login-info router-link:hover {
    color: #3182ce;
  }
  </style>
  
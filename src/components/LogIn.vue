<template>
    <div class="login-page">
      <div class="content">
        <h2>Welcome Back!</h2>
        <form @submit.prevent="login">
          <div class="form-group">
            <input type="email" v-model="email" placeholder="Email" required>
          </div>
          <div class="form-group">
            <input type="password" v-model="password" placeholder="Password" required>
          </div>
          <button type="submit">Log In</button>
        </form>
        <p class="signup-info">Don't have an account? <router-link to="/signup">Sign up here</router-link>.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LogIn',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Here you can implement the logic to handle login
        console.log('Login submitted with email:', this.email, 'and password:', this.password);
        // After handling login, you may want to redirect the user to another page
        this.$router.push('/dashboard');
      }
    }
  }
  </script>
  
  <style scoped>
  .login-page {
    background-color: #f8f9fa;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .content {
    max-width: 400px;
    text-align: center;
  }
  
  h2 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    color: #2a4365;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 1rem;
    font-size: 1.2rem;
    border: 1px solid #cbd5e0;
    border-radius: 0.5rem;
    background-color: #edf2f7;
    transition: border-color 0.3s ease;
  }
  
  input[type="email"]:focus,
  input[type="password"]:focus {
    border-color: #4299e1;
    outline: none;
  }
  
  button[type="submit"] {
    width: 100%;
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
  
  .signup-info {
    font-size: 1.1rem;
    margin-top: 1.5rem;
    color: #718096;
  }
  
  .signup-info router-link {
    color: #4299e1;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .signup-info router-link:hover {
    color: #3182ce;
  }
  </style>
  
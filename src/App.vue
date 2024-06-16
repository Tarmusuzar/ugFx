<template>
  <div>
    <nav class="navbar">
      
      
        <div>
          <h1 style="min-width: 70%; ">Forex Hub</h1>
        </div>
        
        <div class="li">
          <li><router-link to="/">Trade</router-link></li>
          <li><router-link to="/history">History</router-link></li>
        </div>
       
      
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.navbar {
  background-color: #00ad9f;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}
.navbar .li {
  list-style: none;
  display: flex;
  gap: 2rem;
}
.navbar .li li {
  font-size: 1.2rem;
}
.navbar .li li a {
  color: white;
  text-decoration: none;
}
.navbar .li li a.router-link-exact-active {
  font-weight: bold;
  border-bottom: 2px solid white;
}
</style>

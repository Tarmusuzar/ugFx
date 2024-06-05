<template>
    <div>
      <!-- Backdrop -->
      <div v-if="menuOpen" class="backdrop" @click="closeMenu"></div>
      
      <!-- Mobile Menu -->
      <div :class="['mobile-menu', { 'open': menuOpen }]">
        <!-- Close Button -->
        <button class="close-button" @click="closeMenu" style="font-size: 1.9rem;">&times;</button>
        
        <!-- Menu Items -->
        <ul>
            <li style="font-weight: 600; font-size: 1.4rem; padding: 1.3rem;">FOREX HUB</li>
          <li>

            <a href="#">
              <i class="fas fa-home"></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-info-circle"></i>
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-cogs"></i>
              <span>Services</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-envelope"></i>
              <span>Contact</span>
            </a>
          </li>
          <!-- <li style="list-style-type: none; margin: auto;">Tarmusuzar | Martin | Fx Hub | 0547800635</li> -->

        </ul>
      </div>
      
      <!-- Open Menu Button -->
      <!-- <button class="open-menu-button" @click="openMenu" style="background-color: #38A169;">
        <i class="fas fa-bars"></i>
      </button> -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuOpen: true
      };
    },
    methods: {
      openMenu() {
        this.menuOpen = true;
      },
      closeMenu() {
        this.menuOpen = false;
      }
    }
  }
  </script>
  
  <style scoped>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
  
  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: #fff;
    z-index: 1000;
    transition: transform 0.3s ease-in-out;
    transform: translateX(-100%);
  }
  
  .mobile-menu.open {
    transform: translateX(0);
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    background-color: transparent;
    border: none;
    color: #000;
    cursor: pointer;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  ul li {
    padding: 15px 20px;
    border-bottom: 1px solid #dddddd;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  ul li:last-child {
    border-bottom: none;
  }
  
  ul li a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #26355D;
  }
  
  ul li a:hover {
    color: #38A169;
  }
  
  ul li a i {
    margin-right: 10px;
  }
  
  .open-menu-button {
    display: none;
  }
  
  @media (max-width: 768px) {
    .open-menu-button {
      display: block;
      position: fixed;
      top: 10px;
      left: 10px;
      background-color: #38A169;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    
    .mobile-menu {
      width: 100%;
      height: 100%;
    }
  }
  </style>
  
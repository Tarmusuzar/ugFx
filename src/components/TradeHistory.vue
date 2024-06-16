<template>
  <loading-spinner v-if="loading"></loading-spinner>
  <horizontal-menu v-if="horizontal"></horizontal-menu>
  <div :class="['forex-signal-display', { dark: isDarkMode }]">
    <header>
      <h1>Trade History</h1>
      <i class="fas fa-sun" @click="toggleDarkMode"></i> 
      <button @click="horizonatalShow">Menu</button>
    </header>
    <div class="table-container">
 
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Signal</th>
            <th>Take Profit</th>
            <th>Time</th>
          </tr> 
        </thead>
        <tbody>
          <tr v-for="signal in signals" :key="signal.id">
            <td>{{ signal.symbol }}</td>
            <td :style="{ color: signal.position === 'BUY' ? 'green' : 'red' }">{{ signal.position }}</td>

            <td>{{ signal.tp }}</td>
            <td>{{ signal.time }} </td>

            
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

 import firebase from 'firebase/compat/app';
  import 'firebase/compat/database';
import LoadingSpinner from './LoadingSpinner.vue';

import HorizontalMenu from './HorizontalMenu.vue';
export default {
  components:{
    LoadingSpinner,
    HorizontalMenu
  },
  data() {
    return {
      signals: [],
      isDarkMode: false,
      loading:true,
      horizontal:false,
    };
  },
  methods: {
    horizonatalShow(){
      this.horizontal =!this.horizontal
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    
  

  },
  created() {
    firebase.initializeApp({
                apiKey: "AIzaSyBA3XZ9UkBN0mtJKzZNLFaCd1A9fPNjnBY",
                authDomain: "my-vue-app-8da88.firebaseapp.com",
                databaseURL: "https://my-vue-app-8da88-default-rtdb.firebaseio.com",
                projectId: "my-vue-app-8da88",
                storageBucket: "my-vue-app-8da88.appspot.com",
                messagingSenderId: "460227304896",
                appId: "1:460227304896:web:b60519493132d4ebca7c25",
        })

        const db = firebase.database();
    const signalsRef = db.ref('deletedFx');

    // Fetch initial data
    signalsRef.once('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        this.loading=true
        this.signals = Object.values(data);
      
        this.loading= false
      }
    });

    // Listen for real-time updates
    signalsRef.on('child_added', (snapshot) => {
      this.loading = true
      const newSignal = snapshot.val();
      this.signals.push(newSignal);
      this.loading = false
    });

    signalsRef.on('child_removed', (snapshot) => {
      this.loading = true
      const removedSignal = snapshot.val();
      this.signals = this.signals.filter(signal => signal.id !== removedSignal.id);
      this.loading = false
    });

    signalsRef.on('child_removed', (snapshot) => {
      this.loading = true
      const removedSignal = snapshot.val();
      this.signals = this.signals.filter(signal => signal.id !== removedSignal.id);
      this.loading = false
    });
  },
};
</script>

<style scoped>
.forex-signal-display {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0.1, 0.1, 0, 0);
  font-family: Arial, sans-serif;
  transition: background-color 0.3s, color 0.3s;
  min-height: 100vh;
  
}

.dark {
  background-color: #26355D;
  color: #ffffff;
}

.light {
  background-color: #ffffff;
  color: #26355D;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 2px solid #00C7B7;
}

header h1 {
  margin: 0;
  font-size: 24px;
}

header button {
  background: none;
  border: 2px solid #00C7B7;
  padding: 5px 10px;
  border-radius: 5px;
  color: inherit;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

header button:hover {
  background-color: #00C7B7;
  color: #ffffff;
}

.table-container {
  margin-top: 20px;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #cccccc;
}

th {
  background-color: #00C7B7;
  color: #ffffff;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #00C7B7;
  color: #ffffff;
}

.dark th {
  background-color: #00C7B7;
  color: #ffffff;
}

.dark tr:nth-child(even) {
  background-color: #3A4D75;
}

.dark tr:hover {
  background-color: #00C7B7;
}

@media (max-width: 768px) {
  .forex-signal-display {
    padding: 15px;
  }

  header h1 {
    font-size: 20px;
  }

  th, td {
    padding: 10px;
  }
}

@media (max-width: 576px) {
  .forex-signal-display {
    padding: 10px;
  }

  header h1 {
    font-size: 18px;
  }
  td:hover,th:hover{
    cursor: pointer;
    color: red;
  }
  th, td {
    padding: 8px;
    font-size: 14px;
  }
}
</style>

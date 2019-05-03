<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/spiruline.png">
    <HomePage msg="SPIRULINE PROJECT"/>

    <button type="button" class="btn btn-success">
      <router-link to="/suppliers">Liste des fournisseurs</router-link>
    </button>

    <button type="button" class="btn btn-success">
      <router-link to="/map">Carte des fournisseurs</router-link>
    </button>

    <router-view></router-view>
  </div>
</template>
 
<script>
import HomePage from "./components/HomePage.vue";
 
export default {
  name: "app",
  components: {
    HomePage
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #8a25c5;
  margin-top: 60px;
}

.btn-success {
  background: #91ce85;
  color: #8a25c5;
}

a {
  color: #8a25c5;
  text-decoration: none;
}
</style>

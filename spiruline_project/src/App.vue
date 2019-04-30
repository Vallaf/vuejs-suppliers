<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/spiruline.png">
    <HelloWorld msg="SPIRULINE PROJECT"/>

    <button type="button" class="btn btn-success" v-on:click="onSuppliersListClick()">
      <router-link to="/suppliers">Liste des fournisseurs</router-link>
    </button>

    <button type="button" class="btn btn-success" v-on:click="onMapClick()">
      <router-link to="/map">Carte des fournisseurs</router-link>
    </button>
    <router-view></router-view>
  </div>
</template>
 
<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
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
  color: #fff;
}
</style>

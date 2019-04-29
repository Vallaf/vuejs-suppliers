<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Que voulez-vous faire"/>
    <SuppliersList />
    <SuppliersMap/>
    <button v-on:click="onSuppliersListClick()">Liste des fournisseurs</button>
    <button v-on:click="onMapClick()">Carte des fournisseurs</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import SuppliersList from "./components/SuppliersList.vue";
import SuppliersMap from "./components/SuppliersMap.vue";
export default {
  name: "app",
  components: {
    HelloWorld,
    SuppliersList,
    SuppliersMap
  },
  methods: {
    onSuppliersListClick: function() {
      alert("Vous avez cliqué sur la liste des fournisseurs");
    },
    onMapClick: function() {
      alert("Vous avez cliqué sur la carte des fournisseurs");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

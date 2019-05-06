<template>
  <div id="SuppliersList">
    <router-link to="/supplier"></router-link>
    <h1>Liste des fournisseurs</h1>
    <Supplier
      v-for="supplier in suppliers"
      :key="supplier.id"
      :name="supplier.name"
      :status="supplier.status"
      :checkedAt="supplier.checkedAt"
    ></Supplier>
  </div>
</template>

<script>
import axios from "axios";
import Supplier from "./Supplier.vue";
import { format, render, cancel, register } from "timeago.js";


export default {
  name: "SuppliersList",

  components: {
    Supplier
  },

  data() {
    return {
      suppliers: [],
      loading: false,
      error: null,
    }
  },
 mounted () {
     axios
      .get('https://api-suppliers.herokuapp.com/api/suppliers')
      .then(response => {
        this.suppliers = response.data})
  
  }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only --> 
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
}
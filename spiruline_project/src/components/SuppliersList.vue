<template>
  <div id="SuppliersList">
    <!-- <router-link to="/supplier">Fournisseur A</router-link> -->

    <Supplier></Supplier>
  </div>
</template>

<script>
import Supplier from "./Supplier.vue";
export default {
  name: "SuppliersList",
  components: {
    Supplier
  },
  data() {}
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

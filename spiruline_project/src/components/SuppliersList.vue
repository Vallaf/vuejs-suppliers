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
import Supplier from "./Supplier.vue";
export default {
  name: "SuppliersList",

  components: {
    Supplier
  },

  data() {
    activeColor: "red";
    return {
      suppliers: [
        {
          id: 1,
          name: "Fournisseur 1 ",
          status: true,
          checkedAt: new Date()
        },
        {
          id: 2,
          name: "Fournisseur 2",
          status: false,
          checkedAt: new Date()
        }
      ]
    };
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

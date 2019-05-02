<template>
  <div class="Supplier">
    <h1>Fournisseur : {{name}}</h1>
    <h3>A du stock ?  </h3>
   <h3 :class="{'text-success':status, 'text-danger':!status}">{{status ? "OK" : "KO"}}</h3>
  
    
    <h5>Date de dernier relevé des stocks : {{checkedAt}}</h5>
  </div>
</template>

<script>
export default {
 

  data() {
       return {
      name: "A Spiruline",
      status: false,
      checkedAt: new Date(),   
    }
  }
};
</script>
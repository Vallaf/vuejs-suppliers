<template>
  <div class="Supplier">
    <h1>Fournisseur : {{name}}</h1>
    <h3 v-if: status="false">Status stock : KO</h3>
    <h3 v-else: status="true">Status stock : OK</h3>
    
    <h5>Date de dernier relevé des stocks : {{checkedAt}}</h5>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "A Spiruline",
      status: false, // est ce qu'il y a du stock
      checkedAt: new Date() // date de la dernière mise à jour du stock
    };
  }
};
</script>
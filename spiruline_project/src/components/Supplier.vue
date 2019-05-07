<template>
  <div class="Supplier">
    <h1>Fournisseur : {{name}}</h1>
    <h3
      :class="{'text-success':status, 'text-danger':!status}"
    >A du stock ? {{status ? "OK" : "KO"}}</h3>
    <h5>Date de dernier relevé des stocks : {{checkedAt}}</h5>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    status: Boolean,
    checkedAt: String,
    longitude: Number,
    latitude: Number
  }
};
</script>

<style>
.Supplier {
  display: block;
  margin: 10px 5px 5px 100px;
  border: 1px solid;
  border-radius: 10px;
}
</style>
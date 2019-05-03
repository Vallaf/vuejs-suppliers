<template>
  <div class="SuppliersMap">
    <h1>Carte des fournisseurs</h1>
    <gmap-map :center="{lat:48, lng:5}" :zoom="7" style="width: 100%; height: 800px">
      <!-- <GmapMarker
        v-for="(m, index) in suppliers"
        :key="index"
        :position="m.position"
        @click="center = m.position"
      />-->

      <GmapMarker
        :key="index"
        v-for="(supplier, index) in suppliers"
        :position="{lat:supplier.latitude, lng:supplier.longitude}"
        :clickable="true"
        :draggable="true"
        @click="center=supplier.suppliers"
      />
    </gmap-map>
  </div>
</template>

<script>
import Supplier from "./Supplier.vue";
export default {
  name: "SuppliersMap",
  components: {
    Supplier
  },

  data() {
    return {
      suppliers: [
        {
          id: 1,
          latitude: 45.9,
          longitude: 6.1167
        },
        {
          id: 2,
          latitude: 48.888111,
          longitude: 2.3011
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
a {
  color: pink;
}
</style>

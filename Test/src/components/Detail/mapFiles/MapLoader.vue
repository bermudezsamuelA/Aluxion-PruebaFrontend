<script lang="ts">
import GoogleMapsApiLoader from "google-maps-api-loader";
  import { defineComponent } from "vue";
  import MapMaker from './MapMaker.vue'

export default defineComponent({
    name: 'MapLoader',
  props: ['mapConfig', 'apiKey', 'markers'],
    components:{
        MapMaker,
    },

  data() {
    return {
      google: null,
      map: null
    };
  },

  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    });
    this.google = googleMapApi;
    this.initializeMap();
  },

  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap;
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig);
    }
  },
});
</script>

<template>
  <div class='map-container'>
    <div
      class="google-map"
      ref="googleMap"
    ></div>
    <!-- <MapMarker
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
        :google="google"
        :map="map"
      /> -->
  </div>
</template>



<style scoped>
.google-map {
  width: 100%;
  min-height: 100%;
}
</style>

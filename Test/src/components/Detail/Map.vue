<script lang="ts">
  import MapLoader from './mapFiles/MapLoader.vue'

  import {mapSettings} from './mapFiles/MapSettings'
  import { defineComponent } from "vue";
  export default defineComponent({
    name: 'Map',
    components:{
      MapLoader,
    },
    props:[],
    data() {
    return {
      apiKey: 'AIzaSyDHqRH8DP70vSNonf48MKoNnhPbStcfZLA',
      markers: [
        {
          id: "a",
          position: { lat: 3, lng: 101 }
        },
        {
          id: "b",
          position: { lat: 5, lng: 99 }
        },
        {
          id: "c",
          position: { lat: 6, lng: 97 }
        }
      ],
    };
  },
   computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.mapCenter
      };
    },

    mapCenter() {
      return this.markers[1].position;
    }
  },
}  )
</script>

<template>
  <MapLoader
    :mapConfig="mapConfig"
    :apiKey="apiKey"
    :markers="markers"
  >

  </MapLoader>
</template>

<style scoped>
    .MapBackground{
        height: 100%;
        width: 100%;
        background-color: #fff;
    }
</style>

<script lang="ts">
import HeaderDetail from '@/components/Detail/HeaderDetail.vue'
import OptionsBody from '@/components/Detail/OptionsBody.vue'
import Map from '@/components/Detail/Map.vue'
  import { defineComponent } from "vue";
  export default defineComponent({
    name: 'DetailView',
    components:{
      HeaderDetail,
      OptionsBody,
      Map
    },
}  )
</script>

<template>
  <main v-cloak>
    <article class="Details">
      <section class="options">
        <HeaderDetail/> 
        <OptionsBody />
      </section>
      <section class="map">
        <!-- aqui va el mapa -->
        <Map/>
      </section>
    </article>
  </main>
</template>

<style scoped>
  main{
    width: 100%;
    height: 100%;
  }
  .Details{
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    column-gap: 1rem;
    justify-items: stretch;
    align-items: stretch;
    justify-content: space-around;    
    width: 100%;
    height: 100%;
  }
  .options{
    grid-column: 1 / 6;
    width: 90%;
    display: grid;
    padding-left: 2rem;
    padding-right: 2rem;
    justify-items: stretch;
  }
  .map{
    grid-column: 6 / 12;
    height: 100%;
    width: 100%;
  }
</style>
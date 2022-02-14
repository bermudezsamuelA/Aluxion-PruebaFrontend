<script lang="js">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: 'BusCard',
    props: ['card'],

}  )
</script>

<template>
  <div class="busCard" >
      <h4 class="numberRut">
        {{'220'}}
      </h4>

      <div class="contentSection">
        <div class="infoContent">
          <h4 class="title">
            {{'Plaza Lima'}}
          </h4>
          <label class="subtitle">
            {{'Hortaleza'}}
          </label>
        </div>
        <div class="timeContent">
          <img alt="distancia" src="@/assets/images/icons/clock.png" class="timeIcon"/>
          <label class="timeText">
            {{'10 min.'}}
          </label>
        </div>
      </div>

      <div class="distanceSection">
        <img alt="distancia" src="@/assets/images/icons/way.png" class="distanceIcon"/>
        <label class="distanceText">
          {{'300 mts'}}
        </label>
      </div>
  </div>
</template>

<style scoped>
    .busCard{
        background: #1D3051;
        width: 90%;
        border-radius: 5%;
        height: 100%;
        justify-self: center;
        display:grid;
        grid-template-areas: 
        ' ruta . contenido . distance'
        ;
    }
    .numberRut{
      grid-area: ruta;
      align-self: center;
      justify-self: center;
      font-size: 26px;
    }
    .distanceSection{
      grid-area: distance;
      align-self: flex-end;
      justify-self: end;
      display: flex;
      padding-bottom: 0.5rem;
      padding-right: 0.5rem;
      color: #2DC8A6;
    }
    .distanceIcon{
      width: 1.1rem;
      height: 0.4rem;
      margin: 0.5rem;
    }
    .contentSection{
      grid-area: contenido;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 0.5rem;
      padding-top: 0.5rem;

    }
    .title{
      margin: 0;
      font-size: 18px;
    }
    .subtitle{
      color: #8993A4;

    }
    .timeIcon{
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
    }
    .timeText{
      color: #FFC121;
      padding-bottom: 0.5rem;
    }
</style>

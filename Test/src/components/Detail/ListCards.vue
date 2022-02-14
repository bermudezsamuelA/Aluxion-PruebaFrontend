<script lang="js">
  import { defineComponent } from "vue";
  import BusCard from './BusCard.vue'
  export default defineComponent({
    name: 'ListCards',
    props: ['order'],
    components:{
        BusCard,
    },
    data () {
        return{
            exampleCards:[
                { active: true },
                { active: false }
            ]
        }
    },

}  )
</script>

<template>
  <article>
      <section class="CardsSection">
          <div class="busLineTop">
            <img alt="search" class="search" src="@/assets/Images/icons/bus.png" />
            <label class="busLineTitle">
                Linea 220
            </label>
          </div>
          <section class='CardsDisplay'>
              <div v-for="(card,index) in exampleCards" :key="index" class="cardContainer">
                <BusCard
                :card='card'
                />
              </div>
          </section>
      </section>
  </article>
</template>

<style scoped>
    .busLineTop{
        margin: 1rem;
    }
    .busLineTitle{
        font-size:20px;
    }
    .CardsSection{
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .subtitle{
        color: #42526E;
        margin: 0;
    }
    .nearBus{
        color: #fff;
        border-bottom: 0.5px solid #42526E;
    }
    .CardsDisplay{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        min-width: 50%;
        width: 100%;
        justify-content: space-around;
        align-items: baseline;
        align-content: space-around;
    }
    .cardContainer{
        width: 20vw;
        height: 15vh;
        display: grid;
    }
</style>

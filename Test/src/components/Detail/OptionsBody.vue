<script >
    import { RouterLink } from 'vue-router'
    import cardOn from '@/assests/images/icons/card-on.png'
    import ListCards from './ListCards.vue'
  import { defineComponent } from "vue";
  import {ref} from 'vue';
export default defineComponent({
    name: 'OptionsBody',
    components:{
        ListCards,
    },

    data () {
        return{
            order: 'row',
            card: 0,
            list: 3,

        }
    },
    setup(){
        const icons = ref([
            {
                id: 'cardOn',
                url: '@/assests/images/icons/card-on.png',
                name: 'card-on'
            },
             {
                id: 'cardOff',
                url: '@/assests/images/icons/card-off.png',
                name: 'card-off'
            },
            {
                id: 'listOn',
                url: '@/assests/images/icons/list-on.png',
                name: 'list-on'
            },
            {
                id: 'listOff',
                url: '@/assests/images/icons/list-off.png',
                name: 'list-off'
            },
        ])
        return {icons}
    }
}  )
</script>

<template>
  <article class="container">
      <!-- <pre>
          {{icons}}
      </pre> -->
      <section class="startMessage">
            <RouterLink to="/" id="logo">
                <img alt="arrow" class="arrow" src="@/assets/Images/icons/arrow.png" />
            </RouterLink>
          <label class="subtitle">
              Autobuses cercanos
          </label>
          <div class="nearBus">
              <h4 class="nameStreet">
                  algun titulo
              </h4>
              <div>
                <img :alt="icons[0].name" class="iconlist" :src="icons[0].url" />
                <img :alt="icons[3].name" class="iconlist" :src="icons[3].url" />
              </div>
          </div>
      </section>
      <ListCards
      :order="order"
      />
  </article>
</template>

<style scoped>
    .container{
        margin: 2rem;
    }
    .startMessage{
        display: flex;
        flex-direction: column;
    }
    .subtitle{
        color: #42526E;
        margin: 0;
    }
    .nearBus{
        color: #fff;
        border-bottom: 0.5px solid #42526E;
        display: flex;
        justify-content: space-between;
    }
    .nameStreet{
        font-size: 2rem;
        margin: 0;
        padding: 0;
        margin-bottom: 1rem;
    }
</style>

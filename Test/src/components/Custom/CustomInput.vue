<script lang="ts">
    import Lupa from '../icons/Lupa.vue'
    import { defineComponent } from "vue";
  export default defineComponent({
    name: 'CustomInput',
    components:{
      Lupa,
    }
}  )
</script>

<template>
    <div class="searchBar">
    <input type="text" class="destination" placeholder="¿Cuál es tu parada?"
      >
      <Lupa/>
      <!-- <img alt="search" class="search" src="@/assets/Images/icons/Search.png" /> -->
    </div>
</template>

<style scoped>
    .searchBar{
        margin: 0;
        grid-area: search;
        justify-self: end;
        min-width: none;
        width: 50%;
        display: grid;
        grid-template-areas: 
        '  question  '
        ;
        align-content: baseline;
    }
    .search{
        grid-area: question ;
        justify-self: flex-end;
        margin: 0;
        padding: 0;
        margin-right: -0.7rem;
        margin-bottom: 0.5rem;
    }
    .destination{
        grid-area: question ;
        text-decoration: none;
        background: transparent;
        border: none;
        color: #8993A4;
        border-bottom:  2px solid #8993A4;;
        justify-self: stretch;
        width: 100%;
        outline: 0;
        padding-right: 1rem;

    }

</style>

<script lang="ts">
import CustomInput from '../Custom/CustomInput.vue'
  import { defineComponent } from "vue";
  export default defineComponent({
    name: 'Presentation',
    components:{
      CustomInput,
    }
}  )
</script>

<template>
  <div class="greetings">
    <h1 class="principalMessage"> 
        Don't be late, aluxioner
    </h1>
    <CustomInput/>
  </div>
</template>

<style scoped>
.greetings{
    height: 55vh;
    width: 100%;
    min-width: none;
    display: grid;
    grid-template-areas: 
    ' . message . search  .'
    ;
    align-items: flex-end;
    
}
.principalMessage{
    grid-area: message;
    display: inline-block;
    width: 60%;
    font-size:  clamp(3vw, 6vw, 10vw);
    margin: 0;
}
.searchBar{
    margin: 0;
    grid-area: search;
    min-width: none;
    width: 25vw;
    /* margin-left: -20rem; */
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

.scrolledGreetings{
  min-height: 10vh;
  padding-bottom: 1rem;
    transition: height 0.5s ease;

}
.scrolledMessage{
  grid-area: message;
  width: 50%;
  font-size: 2rem;
  margin: 0;
  flex-basis: fit-content;
  transition: font-size 0.5s ease;
}


</style>

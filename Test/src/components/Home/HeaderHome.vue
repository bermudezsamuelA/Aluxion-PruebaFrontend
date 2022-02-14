<script lang="ts">
import { RouterLink } from 'vue-router'
import HeaderIcon from '../Custom/HeaderIcon.vue'
  import { defineComponent } from "vue";
  export default defineComponent({
    name: 'HeaderHome',
    components:{
      HeaderIcon,
    }
}  )
</script>

<template>
   <header>
    <HeaderIcon/>
      <nav>
        <RouterLink to="/" class="itemsNav">metro</RouterLink>
        <RouterLink to="/" class="itemsNav">cercanías</RouterLink>
        <RouterLink to="/" class="itemsNav">carsharing</RouterLink>
      </nav>
  </header>
</template>

<style scoped>
header{
  margin: 0;
  width: 97%;
  align-self: flex-start;
  justify-self: center;
  display: grid;
  padding-top: 2rem;
  padding-left: 2rem;
  position: sticky;
  align-items: end;
  grid-template-rows: repeat(2,1fr);
}
nav{
  display: flex;
  flex-direction: row;
  justify-self: flex-end;
  justify-content: space-between;
  width: 30%;

}

.itemsNav{
  text-decoration: none;
  color: #fff;
  display: flex;
}


</style>

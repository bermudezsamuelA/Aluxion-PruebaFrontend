<script lang="ts">
import HeaderIcon from '../Custom/HeaderIcon.vue'
import CustomInput from '../Custom/CustomInput.vue'
  import { defineComponent } from "vue";
  export default defineComponent({
    name: 'HeaderDetail',
    components:{
      HeaderIcon,
      CustomInput,
    },
}  )
</script>

<template>
   <header>
    <HeaderIcon/>
    <CustomInput/>
  </header>
</template>

<style scoped>
header{
  margin: 0;
  width: 90%;
  align-self: flex-start;
  justify-self: center;
  display: grid;
  padding: 1rem;
  position: sticky;
  align-items: end;
  grid-template-rows: repeat(2,1fr);
}

</style>

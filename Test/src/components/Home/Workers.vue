<script lang="ts">
  import { defineComponent } from "vue";
  import {workersData} from '../WorkersData/Workers';
  import Card from './Card.vue';
  export default defineComponent({
    name: 'Workers',
    components:{
      Card
    },
  data() {
    return {
      workers: workersData
    }
  },
}  )
</script>


<template>
  <div class="teamHolder">
      <div class="fordeployer" v-for="(worker,index) in workers" :key="index">
        <Card
        :workerInfo='worker'
        />
      </div>
  </div>
</template>

<style scoped>
.teamHolder{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    align-content: space-between;
    gap: 2rem 2rem;
}
</style>

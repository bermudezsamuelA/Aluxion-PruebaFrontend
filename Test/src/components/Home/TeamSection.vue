<script lang="ts">
import Workers from './Workers.vue'
  import { defineComponent } from "vue";
  export default defineComponent({
    name: 'TeamSection',
    components:{
        Workers
    }
}  )
</script>

<template>
    <div class="teamSection">
    <div class='title'>
        <label class="team"> 
        Team
        </label>
        <h3 class="alux">
            Aluxioners
        </h3>
    </div>
    
    <Workers/>
    </div>
</template>

<style scoped>
    .teamSection{
        padding: 1rem;
    }
    .title{
        display: flex;
        flex-direction: column;
        align-content: flex-start;        
    }
    .team{
        color: #42526E;
    }
    .alux{
        color: #fff;
        font-size: 33px;
        font-weight: bold;
        margin: 0;
    }
</style>

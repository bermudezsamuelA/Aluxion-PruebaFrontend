<script setup lang="js">
  import { defineComponent } from "vue";
  export default defineComponent({
    props: ['workerInfo'],
}  )
</script>

<template>
  <div class="card">
        <img :alt="workerInfo.name" class="profilePhoto" :src="workerInfo.photo" />
        <h4 class="workerName">
            {{workerInfo.name}}
        </h4>
        <span class="workerPosition">
            {{workerInfo.position}}
        </span>
  </div>
</template>

<style scoped>
  .profilePhoto{
    background: rgba(9, 30, 66, 0.95);
    mix-blend-mode: screen;
  }
  .workerName{
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  }
  .workerPosition{
    font-size: 14px;
    font-weight: 400;
    color: #42526E;
    margin: 0;
  }
  .card{
    display: flex;
    flex-direction: column;
    margin: 2rem;
  }
</style>

<script  lang="ts">
import { RouterView } from 'vue-router'
import { defineComponent } from "vue";
  export default defineComponent({
    name: 'App',
}  )
</script>

<template>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';
#app {
 color: #fff !important;
 display: grid;
 width: 100%;
  height: 100%;
}

</style>

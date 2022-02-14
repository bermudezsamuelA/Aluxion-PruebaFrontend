<script lang="ts">
import HeaderHome from '@/components/Home/HeaderHome.vue'
import Presentation from '@/components/Home/Presentation.vue'
import TeamSection from '@/components/Home/TeamSection.vue'
  import { defineComponent } from "vue";
  export default defineComponent({
    name: 'HomeView',
    components:{
      HeaderHome,
      Presentation,
      TeamSection
    },
}  )
</script>

<template>
  <main v-cloak>
    <HeaderHome/>
    <Presentation/>
    <TeamSection/>
  </main>
</template>

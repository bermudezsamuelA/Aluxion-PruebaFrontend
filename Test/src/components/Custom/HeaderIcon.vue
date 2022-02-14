<script lang="ts">
import { RouterLink } from 'vue-router'
    import { defineComponent } from "vue";
  export default defineComponent({
    name: 'HeaderIcon',
}  )
</script>

<template>
    <RouterLink to="/" id="logo">
          <img alt="Aluxion logo" src="@/assets/images/icons/ALUXION.png" />
        </RouterLink>
</template>

<style scoped>

#logo{
  margin-bottom: -1.3rem;
  justify-self: flex-start;
  align-self: end;
  text-decoration: none;
  display: inline;
}

</style>

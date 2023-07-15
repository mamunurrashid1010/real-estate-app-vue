<template>
  <div>
    <TopNavbar/>
    <h1>Real Estate App</h1>

    <router-view/>
  </div>

</template>

<script>
import TopNavbar from "./components/navbar/TopNavbar.vue";

export default {
  name:'App',
  components: {TopNavbar},
  data(){
    return{

    }
  }
}

</script>

<style scoped>

</style>

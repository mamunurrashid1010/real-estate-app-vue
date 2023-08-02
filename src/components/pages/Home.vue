<template>
  <div>
    <Banner/>
    <Service/>
    <Feature/>
    <Agent/>
  </div>
</template>

<script>
import Banner from "../component/home/Banner.vue";
import Service from "../component/home/Service.vue";
import Feature from "../component/home/Feature.vue";
import Agent from "../component/home/Agent.vue";

export default {
  name: 'Home',
  components: {Agent, Feature, Service, Banner},
  data(){
    return{

    }
  },
  methods:{
  }
}
</script>

<style>
</style>
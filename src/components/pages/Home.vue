<template>
  <div>
    <Banner/>
    <Service/>
    <Feature/>
    <Agent/>
    <Contact/>
  </div>
</template>

<script>
import Banner from "../component/home/Banner.vue";
import Service from "../component/home/Service.vue";
import Feature from "../component/home/Feature.vue";
import Agent from "../component/home/Agent.vue";
import Contact from "../component/home/Contact.vue";

export default {
  name: 'Home',
  components: {Contact, Agent, Feature, Service, Banner},
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
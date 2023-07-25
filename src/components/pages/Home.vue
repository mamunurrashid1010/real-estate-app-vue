<template>
  <div>
    <Banner/>
    <Service/>
    <Feature/>
  </div>
</template>

<script>
import Banner from "../component/home/Banner.vue";
import Service from "../component/home/Service.vue";
import Feature from "../component/home/Feature.vue";

export default {
  name: 'Home',
  components: {Feature, Service, Banner},
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
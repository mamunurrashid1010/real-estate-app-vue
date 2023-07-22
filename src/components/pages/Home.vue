<template>
  <div>
    <Banner/>
    <Service/>
  </div>
</template>

<script>
import Banner from "../component/home/Banner.vue";
import Service from "../component/home/Service.vue";

export default {
  name: 'Home',
  components: {Service, Banner},
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
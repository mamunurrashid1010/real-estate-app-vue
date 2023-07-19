<template>
  <div>
    <header>

      <router-link to="/" class="logo"><span>real</span>Estate</router-link>

      <nav class="navbar" :class="navBarActive">
        <router-link to="/">home</router-link>
        <router-link to="/">services</router-link>
        <router-link to="/">featured</router-link>
        <router-link to="/">agents</router-link>
        <router-link to="/">contact</router-link>
      </nav>

      <div class="icons">
        <div id="menu-bars" class="fas fa-bars" @click="mobileNavExpand()"></div>
        <router-link to="/" class="fas fa-heart"></router-link>
        <router-link to="/" class="fas fa-user"></router-link>
      </div>

    </header>
  </div>
</template>

<script>
export default {
  name:'TopNavbar',
  data(){
    return{
        navBarActive:'inactive'
    }
  },
  components:{

  },
  methods:{
    mobileNavExpand(){
      if (this.navBarActive == 'inactive')
        this.navBarActive = 'active';
      else
        this.navBarActive = 'inactive';

    }

  }
}
</script>

<style>

</style>
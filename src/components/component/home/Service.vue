<link rel="stylesheet" href="../../../../../../html-template/html-css-js/website/website-8-real-state/css/style.css">
<template>
  <div>
    <section class="services" id="services">

      <h1 class="heading"> our <span>services</span> </h1>

      <div class="box-container">

        <div class="box">
          <img src="images/s-1.png" alt="">
          <h3>buying home</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio ipsa ab cum error quas fuga ad? Perspiciatis, autem officiis?</p>
          <a href="#" class="btn">learn more</a>
        </div>

        <div class="box">
          <img src="images/s-2.png" alt="">
          <h3>renting home</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio ipsa ab cum error quas fuga ad? Perspiciatis, autem officiis?</p>
          <a href="#" class="btn">learn more</a>
        </div>

        <div class="box">
          <img src="images/s-3.png" alt="">
          <h3>selling home</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio ipsa ab cum error quas fuga ad? Perspiciatis, autem officiis?</p>
          <a href="#" class="btn">learn more</a>
        </div>

      </div>

    </section>
  </div>
</template>

<script>

export default {
  name: 'Service',
  data(){
    return{

    }
  },
  methods:{
  }
}
</script>

<style scoped>

.btn{
  margin-top: 1rem;
  display: inline-block;
  padding:.8rem 3.5rem;
  border-radius: .5rem;
  font-size: 1.7rem;
  color:var(--red);
  background:var(--light-red);
  cursor: pointer;
  text-align: center;
}

.btn:hover{
  background:var(--red);
  color:#fff;
}


</style>
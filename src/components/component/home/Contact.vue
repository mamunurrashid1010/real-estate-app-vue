<template>
  <div>
    <section class="contact" id="contact">

      <h1 class="heading"> <span>contact</span> us </h1>

      <div class="icons-container">

        <div class="icons">
          <img src="images/icon-1.png" alt="">
          <h3>phone number</h3>
          <p>+123-456-7890</p>
          <p>+111-222-3333</p>
        </div>

        <div class="icons">
          <img src="images/icon-2.png" alt="">
          <h3>email address</h3>
          <p>shaikhanas@gmail.com</p>
          <p>anasshaikha@gmail.com</p>
        </div>

        <div class="icons">
          <img src="images/icon-3.png" alt="">
          <h3>office address</h3>
          <p>jogeshwari, mumbai, india - 400104</p>
        </div>

      </div>

      <div class="row">

        <form action="">
          <div class="inputBox">
            <input type="text" placeholder="name">
            <input type="number" placeholder="number">
          </div>
          <div class="inputBox">
            <input type="email" placeholder="email">
            <input type="text" placeholder="subject">
          </div>
          <textarea name="" placeholder="message" id="" cols="30" rows="10"></textarea>
          <input type="submit" value="send message" class="btn">
        </form>

        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1626697480414!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>

      </div>

    </section>
  </div>
</template>

<script>

export default {
  name: 'Contact',
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
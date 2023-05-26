<script>
import Animation from "./AnimationComp.vue"
export default {
components: {
    Animation
  },
  data() { 
    return {
     
    }
  }
}
</script>
<template>
  <div class="banner">
    <h2 class="pt-24">透過<br>AI工具王的<br>強大模型<br>讓您的業務更聰明</h2>
    <a href="#" class="start-btn fs-5 rounded-3 fw-bold btn btn-outline-light mt-10 mb-md-25 mb-45">開始使用</a>
  </div>
  <Animation class="d-flex justify-content-md-end mb-30 mb-lg-40 "></Animation>
</template>
<style lang="scss">

@import 'bootstrap/scss/vendor/rfs';
  .banner{
    h2{
      font-size: 3rem;
      font-weight: 900;
    }

    @media screen and (min-width:1200px) {
      h2{
        @include font-size(7.5rem);
      }
    }
  }

</style>
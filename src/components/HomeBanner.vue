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
    <h1 class="pt-24">透過<br>AI工具王的<br>強大模型<br>讓您的業務更聰明</h1>
    <a href="#" class="start btn btn-outline-light mt-10 mb-md-25 mb-45">開始使用</a>
  </div>
  <Animation class="d-flex justify-content-md-end"></Animation>
</template>
<style lang="scss">

@import 'bootstrap/scss/vendor/rfs';
  .banner{
    h1{
      font-size: 3rem;
      font-weight: 900;
    }

    @media screen and (min-width:1200px) {
      h1{
        @include font-size(7.5rem);
      }
    }

    .start{
      padding: 20px 40px;
      border-radius: 16px;
      font-size: 20px;
      line-height: 1.2;
      font-weight: 900;
    }
     .start:hover{
        color: #000;
    }
  }
.pt-8{
  padding-top: 2rem;
}
.mt-9{
  margin-top: 2.25rem;
}
 .mt-10{
  margin-top: 2.5rem;
 }
 .mb-md-25{
  margin-bottom: 6.25rem;
 }

 .mb-45{
  margin-bottom: 11.25rem;
 }
</style>
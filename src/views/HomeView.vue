<script >
import HeaderComp from '../components/HeaderComp.vue'
import FooterComp from '../components/FooterComp.vue'
import Banner from '../components/HomeBanner.vue'
export default {
  components: {
    HeaderComp,
    Banner,
    FooterComp
  }
}
</script>

<template>
  <div class="container">
    <HeaderComp></HeaderComp>
    <Banner></Banner>
    <FooterComp></FooterComp>
  </div>

    
</template>

<style>

</style>
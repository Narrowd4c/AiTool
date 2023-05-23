<script >
import HeaderComp from '../components/HeaderComp.vue'
import FooterComp from '../components/FooterComp.vue'
import Banner from '../components/HomeBanner.vue'
import Feature from '../components/FeatureComp.vue'
import GetStart from '../components/GetStart.vue'
export default {
  components: {
    HeaderComp,
    Banner,
    FooterComp,
    Feature,
    GetStart
  }
}
</script>

<template>
  <div class="container">
    <HeaderComp></HeaderComp>
    <Banner></Banner>
    <Feature></Feature>
    <GetStart></GetStart>
    <FooterComp></FooterComp>
  </div>

    
</template>

<style>

</style>
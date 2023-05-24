<script>
import HeaderComp from '../components/HeaderComp.vue'
import FooterComp from '../components/FooterComp.vue'
import Banner from '../components/HomeBanner.vue'
import Feature from '../components/FeatureComp.vue'
import GetStart from '../components/GetStart.vue'
import Partner from '../components/PartnerComp.vue'
export default {
  components: {
    HeaderComp,
    Banner,
    FooterComp,
    Feature,
    GetStart,
    Partner
  },
}
</script>

<template>
  <div class="container">
    <HeaderComp></HeaderComp>
    <Banner></Banner>
    <Feature class="mb-30 mb-lg-40"></Feature>
    <Partner class="mb-12 mb-lg-40"></Partner>
    <GetStart></GetStart>
    <FooterComp></FooterComp>
  </div>
</template>

<style>

</style>

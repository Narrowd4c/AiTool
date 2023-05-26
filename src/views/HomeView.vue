<script>
import Banner from '../components/HomeBanner.vue'
import Feature from '../components/FeatureComp.vue'
import AiTool from '../components/AiTool.vue'
import GetStart from '../components/GetStart.vue'
import Partner from '../components/PartnerComp.vue'
import Recommend from '../components/RecommendComp.vue'
export default {
  components: {
    Banner,
    Feature,
    GetStart,
    Partner,
    Recommend,
    AiTool
  }
}
</script>

<template>
  <div class="container">
    <Banner></Banner>
    <Feature class="mb-30 mb-lg-40"></Feature>
    <Partner class="mb-12 mb-lg-40"></Partner>
    <Recommend class="mb-30 mb-lg-40" ></Recommend>
  </div>
  <AiTool></AiTool>
  <div class="container">
    <GetStart></GetStart>
  </div>
</template>

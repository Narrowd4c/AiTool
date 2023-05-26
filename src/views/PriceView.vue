<script>
import PriceBanner from '../components/PriceBanner.vue'
import PriceComp from '../components/PriceComp.vue'
import RulesComp from '../components/RulesComp.vue'
import AiTool from '../components/AiTool.vue'
import FaqComp  from '../components/FaqComp.vue'
export default {
    components: {
        PriceBanner,
        PriceComp,
        RulesComp,
        AiTool,
        FaqComp,
    }
}
</script>
<template>
    <div class="container">
        <PriceBanner></PriceBanner>
        <PriceComp></PriceComp>
        <RulesComp></RulesComp>
    </div>
    <AiTool class="mb-30 mb-lg-40"></AiTool>
    <div class="container">
        <FaqComp class="mb-30 mb-lg-40"></FaqComp>
    </div>
</template>
<style lang="scss">

</style>


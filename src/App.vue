<script>
import { RouterView } from 'vue-router';
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'
export default {
  components: {
    RouterView,
    HeaderComp,
    FooterComp
  },
}
</script>

<template>
  <HeaderComp></HeaderComp>
  <RouterView />
  <FooterComp></FooterComp>
</template>

<style lang="scss">
@import './assets/scss/all.scss';

</style>

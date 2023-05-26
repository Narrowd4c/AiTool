<script>
import Animation from './AnimationComp.vue'
export default {
  components: {
    Animation
  },
  data() {
    return {}
  }
}
</script>
<template>
  <div>
    <h2 class="banner-title pt-24 fw-bold">
      透過<br />AI工具王的<br />強大模型<br />讓您的業務更聰明
    </h2>
    <a href="#" class="start-btn fs-5 rounded-3 fw-bold btn btn-outline-light mt-10 mb-lg-25 mb-45"
      >開始使用</a
    >
  </div>
  <Animation class="d-flex justify-content-md-end mb-30 mb-lg-40"></Animation>
</template>
<style lang="scss" scoped>
.pt-24 {
  padding-top: 6rem;
}
.mb-45 {
  margin-bottom: 11.25rem;
}
@media screen and (min-width: 992px) {
  .mb-lg-25 {
    margin-bottom: 6.25rem;
  }
}
.start-btn {
  padding: 20px 40px;
}
.start-btn:hover {
  color: #000;
}
</style>

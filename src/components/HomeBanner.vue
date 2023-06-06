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
  <div class="vh-80 d-flex flex-column">
    <h2 class="banner-title pt-24 fw-bold">
      透過<br />AI工具王的<br />強大模型<br />讓您的業務更聰明
    </h2>
    <a href="#" class="align-self-start start-btn fs-5 rounded-4 fw-bold btn btn-outline-light mt-10"
      >開始使用</a
    >
    <Animation class="mt-auto d-flex justify-content-md-end"></Animation>
  </div>
</template>
<style lang="scss" scoped>
.vh-80{
  height: calc(100dvh - 80px);
}
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

<script>
export default {
  data() {
    return {
      isShow: false
    }
  }
}
</script>

<template>
  <header class="bg-black position-sticky">
    <div class="container">
    <div class="px-3 py-5 border-bottom d-flex justify-content-between align-items-center">
      <div>
        <img
          class="logo"
          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/logo.png"
          alt="AiTool-logo"
        />
        <h1 class="visually-hidden">AI工具王</h1>
      </div>
      <nav class="d-none d-lg-block">
        <RouterLink to="/" class="me-5">首頁</RouterLink>
        <RouterLink to="/price">定價</RouterLink>
      </nav>
      <span @click="isShow = !isShow" class="d-lg-none cursor-pointer material-symbols-outlined"
        >menu</span
      >
    </div>
    
    </div>
    <ul
      :class="{ 'menu-show': isShow }"
      class="d-lg-none bg-black menu-toggle d-flex align-center flex-column justify-content-between position-absolute top-100 text-center"
    >
      <div class="h-100 grow-1 d-flex align-center flex-column justify-content-center">
        <RouterLink to="/" @click='isShow = false' class="mb-5 display-1 fw-bolder">首頁</RouterLink>
        <RouterLink to="/price" @click='isShow = false' class="display-1 fw-bolder">定價</RouterLink>
      </div>
      <div class="fw-bolder pt-8 border-top">
        <p class="text-start">AI工具王 © 2023</p>
        <ul class="d-flex mt-9 gap-5 mb-5">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </ul>
  </header>
</template>
<style lang="scss">
.logo {
  height: 2.5rem;
  width: auto;
}

.position-sticky {
  position: sticky;
  top: 0px;
  z-index: 100;
}
.menu-toggle {
  width: 100%;
  height: 0px;
  transition: height 0.25s ease-in-out;
  overflow: hidden;
}
.menu-show {
  height: calc(100dvh - 81px);
}

</style>

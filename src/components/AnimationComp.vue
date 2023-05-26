<template>
  <ul class="d-flex">
    <li v-for="i in 3" :key="i" class="deco">
      <img
        class="deco-img"
        :class="`delay${i}`"
        src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/deco.png"
        alt="deco"
      />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.deco {
  overflow-y: hidden;
  &-img {
    max-width: 100%;
    position: relative;
    animation-name: banner;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
}

.delay1 {
  animation-delay: 0.5s;
}
.delay2 {
  animation-delay: 0.4s;
}
.delay3 {
  animation-delay: 0s;
}

@keyframes banner {
  0% {
    bottom: -100%;
  }
  35% {
    bottom: 0px;
  }
  70% {
    bottom: 0px;
  }
  100% {
    bottom: 100%;
  }
}
</style>

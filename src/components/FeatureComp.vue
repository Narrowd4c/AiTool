<script>
export default {
  data() {
    return {
      feature: [
        {
          imgUrl:
            'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/icons/flash%20on.png',
          title: '快速',
          article: '我們先進的推理基礎設施提供了極短的響應時間，讓你的產品服務不間斷。'
        },
        {
          imgUrl:
            'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/icons/auto%20awesome.png',
          title: '靈活',
          article: '我們的服務可以根據您的需求進行靈活調整，同時還可以滿足不同項目和預算的需求。'
        },
        {
          imgUrl:
            'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/icons/library%20add.png',
          title: '擴充',
          article: '我們的服務支持多種擴充選項，可以滿足您的不斷增長的 AI 需求。'
        }
      ]
    }
  }
}
</script>
<template>
  <div>
    <h3 class="fs-5 mb-6">我們的服務</h3>
    <p class="fs-1 fw-bold mb-12">
      我們相信透過 AI 技術，包括圖像識別、自然語言處理和機器翻譯等，讓您更快、更準確地做出決策。
    </p>
    <ul class="row row-gap-3">
      <li class="col-lg-4" v-for="({ imgUrl, title, article }, i) in feature" :key="i + imgUrl">
        <div class="py-10 px-5 px-lg-10 py-lg-20 rounded-3 border h-100">
          <img :src="imgUrl" alt="feature" />
          <h3 class="py-5 h2">{{ title }}</h3>
          <p class="lh-lg">{{ article }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.row-gap-3 {
  gap: 0.75rem 0px;
}
</style>

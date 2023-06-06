<script>
export default {
  data() {
    return {
      feature: [
        {
          icon:'flash_on',
          title: '快速',
          article: '我們先進的推理基礎設施提供了極短的響應時間，讓你的產品服務不間斷。'
        },
        {
          icon:'auto_awesome',
          title: '靈活',
          article: '我們的服務可以根據您的需求進行靈活調整，同時還可以滿足不同項目和預算的需求。'
        },
        {
          icon:'library_add',
          title: '擴充',
          article: '我們的服務支持多種擴充選項，可以滿足您的不斷增長的 AI 需求。'
        }
      ]
    }
  }
}
</script>
<template>
  <div class="mt-30 mt-lg-40">
    <div class='d-lg-flex'>
    <h3 class="fz-5 fz-lg-8 mb-6">我們的服務</h3>
    <p class="ms-auto fs-1 fw-bold mb-12 w-lg-75">
      我們相信透過 AI 技術，包括圖像識別、自然語言處理和機器翻譯等，讓您更快、更準確地做出決策。
    </p>
    </div>
    <ul class="row row-gap-3">
      <li class="col-lg-4" v-for="({ icon, title, article }, i) in feature" :key="i + title">
        <div class="py-10 px-5 px-lg-10 py-lg-20 rounded-3 border h-100">
          <span class="material-symbols-outlined">
{{ icon }}
</span>
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
.material-symbols-outlined {
  font-size: 60px;
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}

</style>

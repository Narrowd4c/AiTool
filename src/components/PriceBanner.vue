<script>
import Animation from './AnimationComp.vue'
export default {
  components: {
    Animation
  },
  data() {
    return {
      priceList: [
        {
          name: '琪琪',
          description: ['初級', '速度最快'],
          price: '5'
        },
        {
          name: '昊昊',
          description: ['中級'],
          price: '5'
        },
        {
          name: '卡卡',
          description: ['高級'],
          price: '5'
        },
        {
          name: '杰杰',
          description: ['最高級', '資訊最完善'],
          price: '5'
        }
      ],
      rules: [
        { title: '守法', description: '請遵守相關的法規和政策，不得進行任何違法違規的活動。' },
        { title: '資訊安全', description: '請務必保護好自己的帳號和密碼，不得將其透露給他人。' },
        { title: '守密', description: '需對使用過程中產生的數據負責，不得擅自泄露數據。' }
      ]
    }
  }
}
</script>
<template>
  <div>
    <h2 class="banner-title pt-10 mb-20 fw-bold">用多少，<br />付多少。</h2>
    <p class="fw-bold fs-1 w-75 w-xl-50 ms-auto mb-50">
      我們相信，最靈活的取用機制，才能最大化的幫助你業務的推動。
    </p>
  </div>
  <Animation class="mb-30 mb-lg-40"></Animation>
</template>
<style lang="scss" scoped>
.w-xl-50 {
  width: 50% !important;
}
.mb-50 {
  margin-bottom: 12.5rem;
}
.text-gray {
  color: #919191;
}
.list-style {
  list-style: disc;
}
</style>

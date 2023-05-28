<script>
export default {
  data() {
    return {
      faqList: [
        { question: '如何選擇適合的AI模型？', answer: '您可以根據應用需求和資料特性，評估模型的性能、準確性和適應性，以選擇最適合的AI模型。', hidden: false },
        { question: '租用模型的費用是如何計算的？', answer: '租用模型的費用是根據使用時間、計算資源和服務等級來計算的。', hidden: false },
        { question: '如何進行付款?', answer: '您可以透過我們的網站，使用安全的付款通道完成付款。', hidden: false },
        { question: '租用模型的期限是多久？', answer: '租用模型的期限根據您選擇的租用計劃而定，可以是每日或自訂的時間範圍。', hidden: false },
        { question: '如果在使用過程中遇到問題，應該怎麼處理？', answer: '如果在使用過程中遇到問題，請聯繫我們的客服團隊，我們將提供技術支援和解決方案。', hidden: false }
      ]
    }
  },
  methods: {
    trigger(val) {
      val.hidden = !val.hidden
    }
  }
}
</script>
<template>
  <div class="d-lg-flex justify-content-between">
    <h3 class="mb-6">常見問題</h3>
    <ul class="w-lg-75">
      <li
        class="position-relative mb-4 border px-10 py-5 rounded-4 cursor-pointer"
        v-for="(val, i) in faqList"
        :key="i"
        @click="trigger(val, $event)"
      >
        <div class="d-flex align-items-center">
          <span class="fw-bold me-5 align-bottom material-symbols-outlined"> add </span>
          <h4 class="fz-5 fw-bold">
            {{ val.question }}
          </h4>
        </div>
        <p :class="{ active: val.hidden }" class="toggle">{{ val.answer }}</p>
      </li>
    </ul>
  </div>
</template>
<style>
.toggle {
  height: 0px;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
}
.active {
  margin-top: 1rem;
  height: 2rem;
}
</style>

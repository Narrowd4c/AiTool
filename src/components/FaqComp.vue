<script>
export default {
  data() {
    return {
      faqList: [
        { question: '如何選擇適合的AI模型？', answer: "符合你需求的AI模型" ,hidden:false},
        { question: '租用模型的費用是如何計算的？', answer: "用加法",hidden:false },
        { question: '如何進行付款?', answer: "....", hidden:false },
        { question: '租用模型的期限是多久？', answer: ".....", hidden:false },
        { question: '如果在使用過程中遇到問題，應該怎麼處理？', answer: "...", hidden:false }
        ],
    }
    },
    methods: {
        trigger(val) { 
            val.hidden = !val.hidden
        }
    },
}
</script>
<template>
  <div class="d-lg-flex justify-content-between">
    <h3 class="mb-6">常見問題</h3>
    <ul class="">
      <li class='position-relative mb-4 border px-10 py-5 rounded-4 cursor-pointer' v-for="(val, i) in faqList" :key="i"  @click="trigger(val, $event)">
        <div class="d-flex align-items-center ">
          <span class="fw-bold me-5 align-bottom material-symbols-outlined"> add </span>
          <h4 class="fz-5 fw-bold">
            {{ val.question }}
          </h4>
          
        </div>
        <p :class="{active:val.hidden}" class="toggle">{{ val.answer }}</p>
      </li>
    </ul>
  </div>
</template>
<style>
    .toggle{
        height:0px;
        overflow: hidden;
        transition:height 0.3s ease-in-out ; 
    }
    .active{
         margin-top:1rem;
         height:2rem;
    }
</style>

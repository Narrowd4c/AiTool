<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/pagination'

export default {
  data() {
    return {
      modules: [Pagination],
      recommendList: [
        {
          name: '陳小姐',
          avatar:
            'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/avatar3.png',
          company: 'ABC科技有限公司',
          recommend:
            '作為一家醫療器材公司，我們非常關注人工智能技術的應用，而 AI工具王 提供的 AI 模型租賃服務為我們帶來了很大的幫助。我們使用 AI工具王 的模型進行醫學影像分析和預測，這些模型非常精確，能夠幫助我們更好地診斷病情，提高治療效果。感謝 AI工具王 團隊的辛勤工作！'
        },
        {
          name: '劉小姐',
          avatar:
            'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/avatar1.png',
          company: 'XYZ 醫療器材有限公司',
          recommend:
            '作為一家醫療器材公司，我們非常關注人工智能技術的應用，而 AI工具王 提供的 AI 模型租賃服務為我們帶來了很大的幫助。我們使用 AI工具王 的模型進行醫學影像分析和預測，這些模型非常精確，能夠幫助我們更好地診斷病情，提高治療效果。感謝 AI工具王 團隊的辛勤工作！'
        },
        {
          name: '黃先生',
          avatar:
            'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/avatar2.png',
          company: 'EFG 銀行',
          recommend:
            '我們銀行一直在尋找能夠幫助我們提高風險控制和客戶服務的解決方案，而 AI工具王 提供的 AI 模型租賃服務正好滿足了我們的需求。我們使用 AI工具王 的模型進行客戶信用評估和詐騙檢測等任務，這些模型非常準確，能夠幫助我們更好地控制風險，提高客戶滿意度。非常感謝 AI工具王 團隊的支持！'
        }
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
}
</script>

<template>
  <swiper
    :slides-per-view="1"
    :pagination="{ clickable: true }"
    :modules="modules"
    :breakpoints="{
      '765': {
        slidesPerView: 2,
        spaceBetween: 24
      },
      '992': {
        slidesPerView: 3,
        spaceBetween: 24
      }
    }"
    :space-between="24"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide
      v-for="({ name, avatar, company, recommend }, i) in recommendList"
      :key="i + avatar"
      class="h-auto pb-5"
    >
      <div class="p-5 recommend-bg rounded-4 d-flex flex-column h-100">
        <div class="d-flex mb-10 gap-1">
          <span v-for="i in 5" :key="i" class="material-symbols-outlined">grade</span>
        </div>
        <article class="mb-10 lh-base flex-grow-1">
          {{ recommend }}
        </article>
        <div class="d-flex align-items-center">
          <img :src="avatar" alt="avatar" />
          <div class="ms-4">
            <p class="mb-1">{{ name }}</p>
            <p>{{ company }}</p>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<style lang="scss">
.swiper {
  --swiper-pagination-bullet-inactive-color: rgb(255, 255, 255);
  --swiper-theme-color: rgb(255, 255, 255);
  --swiper-pagination-color: rgb(255, 255, 255);
  --swiper-pagination-bullet-size: 8px;
}
.swiper-pagination.swiper-pagination-bullets {
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-pagination-bullet-active {
  width: 12px;
  height: 12px;
}
.recommend-bg {
  background: rgba(255, 255, 255, 0.08);
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 1, 'wght' 200, 'GRAD' 0, 'opsz' 48;
}
</style>

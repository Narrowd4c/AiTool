<script>
export default {
  data() {
    return {
      active: false,
      color: 'transparent',
      aiToolList: [
        {
          name: 'Chatbot Builder',
          description: '建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。',
          type: '聊天',
          moduleName: '卡卡',
          imgUrl:
            'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool1.png'
        },
        {
          name: 'Image Recognition Platform',
          description: '專業的圖像識別平台，識別圖像、分類、標記等。',
          type: '影像辨識',
          moduleName: '杰杰',
          imgUrl:
            'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool2.png'
        },
        {
          name: 'Language Translation API',
          description: '專業的語言翻譯 API，實現文本翻譯功能，支援多種格式的文本。',
          type: '翻譯',
          moduleName: '琪琪',
          imgUrl:
            'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool3.png'
        },
        {
          name: 'Sentiment Analysis API',
          description:
            '自動識別文本中的情感傾向，包括正向、負向和中性等。適用於情感分析、社交媒體監控、市場調查等。',
          type: '行銷',
          moduleName: '昊昊',
          imgUrl:
            'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool4.png'
        },
        {
          name: 'Fraud Detection Platform',
          description: '預防詐騙活動，適用於銀行、金融、電商等。',
          type: '客服',
          moduleName: '卡卡',
          imgUrl:
            'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool5.png'
        },
        {
          name: 'Voice Assistant SDK',
          description:
            '通過語音控制應用程式、設備，實現多種功能，例如播放音樂、查詢天氣、發送信息等。',
          type: '生產力',
          moduleName: '杰杰',
          imgUrl:
            'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool6.png'
        }
      ],
      aiToolType: ['全部', '聊天', '影像辨識', '翻譯', '行銷', '客服', '生產力']
    }
  },
  methods: {
    blur() {
      this.active = !this.active
    }
  }
}
</script>

<template>
  <div class="bg-white text-black rounded-4">
    <div class="container py-20">
      <h2 class="fw-bold display-2 text-center mb-8">這些超酷的應用，都來自 AI工具王</h2>
      <div class="position-relative mb-10">
        <label
          :class="{ focu: active }"
          for=""
          class="fs-5 w-100 h-100 bg-gray top-0 left-0 rounded-4 text-muted position-absolute py-5 px-10"
          ><span :class="{ 'fs-6': active }" class="me-4 align-top material-symbols-outlined">
            search </span
          >輸入關鍵字搜尋</label
        >
        <input
          @focus="active = !active"
          @blur="blur"
          :class="{ color: 'active' }"
          class="border-0 bg-gray w-100 rounded-4 ps-10 pt-5"
          type="text"
          placeholder=""
        />
      </div>
      <div class="d-flex flex-wrap justify-content-lg-between align-items-center mb-12">
        <button type="button" class="btn-filter lh-sm">
          篩選<span class="align-text-bottom ms-3 text-black material-symbols-rounded"> tune </span>
        </button>
        <button type="button" class="order-lg-1 ms-auto m-lg-0 btn-filter">
          由新到舊<span class="align-text-bottom ms-3 text-black material-symbols-rounded">
            expand_more
          </span>
        </button>
        <ul class="mt-4 mt-lg-0 d-flex gap-2 overflow-auto">
          <li class="flex-shrink-0" v-for="value in aiToolType" :key="value">
            <button :class="{ selected: false }" class="btn-types">{{ value }}</button>
          </li>
        </ul>
      </div>
      <ul class="row gap-y-6 mb-12">
        <li
          class="col-lg-6 col-xl-4"
          v-for="({ name, description, type, moduleName, imgUrl }, i) in aiToolList"
          :key="i"
        >
          <div class="d-flex flex-column aitool-card rounded-4 border h-100">
            <div class="aitool-card_img">
              <img :src="imgUrl" :alt="name" />
            </div>

            <div class="py-5 px-8 flex-grow-1">
              <h3 class="mb-3 fw-bold">{{ name }}</h3>
              <p>{{ description }}</p>
            </div>
            <div class="hstack py-5 px-8 border-top border-black">
              <span>AI模型</span>
              <span class="ms-auto">{{ moduleName }}</span>
            </div>
            <div class="hstack py-5 px-8 border-top border-black">
              <span>#{{ type }}</span>
              <a href="#" class="ms-auto"
                ><span class="text-black material-symbols-rounded icon-share"> share </span></a
              >
            </div>
          </div>
        </li>
      </ul>
      <ul class="d-flex justify-content-end gap-1">
        <li class="flex-shrink-0 square-12 hstack justify-content-center bg-black rounded-4" v-for="i in 5" :key="i"><a href="#">{{ i }}</a></li>
        <li><a href="#"><span></span></a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
.fz-8 {
  font-size: 2rem;
  line-height: 1.5;
}
.square-12{
    width: 48px;
    height: 48px;
}
.bg-gray {
  background: #f2f2f2;
}

.gap-y-6 {
  gap: 1.5rem 0px;
}

a {
  & .material-symbols-outlined {
    font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 200, 'opsz' 48;
  }
}

input {
  height: 3.5rem;
  line-height: 1.2;
}
label {
  pointer-events: none;
  transition: all 0.15s;
}
.focu {
  font-size: 0.5rem !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  top: 8px !important;
  height: 0px !important;
}
@media screen and (min-width: 992px) {
  .fz-8 {
    font-size: 5rem;
  }
}

.aitool-card {
  &_img {
    overflow: hidden;
    border-radius: 16px 16px 0px 0px;
  }
  img {
    border-radius: 16px 16px 0px 0px;
    width: 100%;
    transform: scale(1);
    transition: transform 0.5s;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}

.btn-filter {
  background: white;
  border: 1px solid #f2f2f2;
  border-radius: 16px;
  padding: 20px;
  padding-left: 40px;
  padding-right: 32px;
}
.btn-types {
  background: #ffffff;
  border: 0;
  border-radius: 16px;
  padding: 8px 16px;
}
.selected {
  background: #f2f2f2;
}
</style>

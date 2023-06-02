<script>
export default {
  data() {
    return {
      active: false,
      color: 'transparent',
      text: '',
      filterBtn: false,
      order: '由新到舊',
      orderBtn: false,
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
    focus() {
      if (this.text.length === 0) {
        this.active = !this.active
      }
    }
  },
  computed: {
    moduleList() {
      let types = new Set(this.aiToolList.map((x) => x.moduleName))
      return ['所有類型', ...Array.from(types)]
    },
    typeList() {
      let result = [...this.aiToolType]
      result[0] = '所有類型'
      return result
    }
  }
}
</script>

<template>
  <main class="bg-white text-black rounded-4">
    <div class="container py-20">
      <h2 class="fw-bold display-2 text-center mb-8">這些超酷的應用，都來自 AI工具王</h2>
      <div class="position-relative mb-10">
        <label
          :class="{ 'ai-search-focus': active }"
          for="search"
          class="ai-search fs-5 w-100 h-100 bg-gray top-0 left-0 rounded-4 text-muted position-absolute py-5 px-10"
          ><span :class="{ 'fs-6': active }" class="me-4 align-top material-symbols-outlined">
            search </span
          >輸入關鍵字搜尋</label
        >
        <input
          id="search"
          @focus="focus"
          @blur="focus"
          v-model="text"
          class="border-0 bg-gray w-100 rounded-4 ps-10 py-5"
          type="text"
        />
      </div>
      <div class="d-flex flex-wrap justify-content-lg-between align-items-center mb-12">
        <div class="position-relative">
          <button @click="filterBtn = !filterBtn" type="button" class="btn-filter lh-sm">
            篩選<span class="align-text-bottom ms-3 text-black material-symbols-rounded">
              tune
            </span>
          </button>
          <div
            :class="{ 'd-none': !filterBtn }"
            class="position-absolute rounded-4 shadow py-5 w-240px z-index-1 bg-white"
          >
            <h4 class="px-10 fs-6 text-muted mb-2">AI 模型</h4>
            <ul class="mb-4">
              <li
                class="bg-gray-hover py-1 cursor-pointer"
                v-for="(module, i) in moduleList"
                :key="i + module"
              >
                <p class="px-10">{{ module }}</p>
              </li>
            </ul>
            <ul class="border-top pt-4">
              <h4 class="px-10 fs-6 text-muted mb-2">類型</h4>
              <li class="bg-gray-hover py-1 cursor-pointer" v-for="v in typeList" :key="v">
                <p class="px-10">{{ v }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="ms-auto m-lg-0 order-lg-1 position-relative">
          <button @click="orderBtn = !orderBtn" type="button" class="btn-filter">
            {{ order
            }}<span class="align-text-bottom ms-3 text-black material-symbols-rounded">
              expand_more
            </span>
          </button>
          <div
            :class="{ 'd-none': !orderBtn }"
            class="position-absolute end-0 rounded-4 shadow py-5 w-144px z-index-1 bg-white"
          >
            <ul>
              <li @click="order = '由新到舊'" class="cursor-pointer">
                <p class="px-10 py-1">由新到舊</p>
              </li>
              <li @click="order = '由舊到新'" class="cursor-pointer">
                <p class="px-10 py-1">由舊到新</p>
              </li>
            </ul>
          </div>
        </div>
        <ul class="mt-4 mt-lg-0 d-flex gap-2 overflow-auto">
          <li class="flex-shrink-0" v-for="value in aiToolType" :key="value">
            <button class="btn-types bg-gray-hover">
              {{ value }}
            </button>
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
        <li class="flex-shrink-0 rounded-4">
          <a class="hstack justify-content-center rounded-4 square-12 bg-black" href="#">1</a>
        </li>
        <li class="flex-shrink-0 rounded-4" v-for="i in 4" :key="i">
          <a class="hstack justify-content-center rounded-4 square-12 text-black" href="#">{{
            i + 1
          }}</a>
        </li>
        <li class="flex-shrink-0 rounded-4">
          <a class="hstack justify-content-center rounded-4 square-12" href="#"
            ><span class="text-black material-symbols-rounded"> chevron_right </span></a
          >
        </li>
      </ul>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

.square-12 {
  width: 48px;
  height: 48px;
}

.w-144px {
  width: 144px;
}
.w-240px {
  width: 240px;
}

.bg-gray {
  background: #f2f2f2;
}
.bg-gray-hover:hover {
  background: #f2f2f2;
}

.ai-search {
  pointer-events: none;
  transition: all 0.15s;
  &-focus {
    font-size: 0.5rem !important;
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    top: 8px !important;
    height: 0px !important;
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
  background: rgb(255, 255, 255);
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
</style>

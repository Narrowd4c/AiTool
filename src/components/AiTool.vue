<script>
export default {
  async mounted() {
    //https://2023-engineer-camp.zeabur.app/api/v1/works
    let response = await fetch('https://2023-engineer-camp.zeabur.app/api/v1/works')
    response = await response.json()
    console.log(response['ai_works'].page['total_pages'])
    this.aiToolList = response['ai_works'].data
    this.totalPage = response['ai_works'].page['total_pages']
  },
  data() {
    return {
      active: false,
      searchText: '',
      filterBtn: false,
      order: '由新到舊',
      orderBtn: false,
      aiToolList: [],
      totalPage: 0,
      currentPage: 1,
      moduleList: ['所有類型', '卡卡', '杰杰', '琪琪', '昊昊'],
      aiToolType: [
        '所有類型',
        '問答服務',
        '虛擬客服',
        '生活應用',
        '程式知識',
        '翻譯助手',
        '行銷文案'
      ],
      selectToolType: '所有類型'
    }
  },
  watch: {
    order() {
      this.currentPage = 1
      this.orderList()
    },
    selectToolType() {
      this.currentPage = 1
      this.orderList()
    },
    currentPage() {
      this.orderList()
    },
    searchText() {
      if (this.order == '由新到舊') {
        this.searchFunc(0, this.currentPage, this.selectToolType, this.searchText)
        console.log(this.searchText)
        return this.aiToolList.toSorted((a, b) => b['create_time'] - a['create_time'])
      } else if (this.order == '由舊到新') {
        this.searchFunc(1, this.currentPage, this.selectToolType, this.searchText)
        console.log(this.searchText)
        return this.aiToolList.toSorted((a, b) => a['create_time'] - b['create_time'])
      }
      return []
    }
  },
  methods: {
    focus() {
      if (this.searchText.length === 0) {
        this.active = !this.active
      }
    },
    async sortAITool(sort, page, type) {
      if (type == '所有類型') {
        type = ''
      }
      try {
        let response = await fetch(
          `https://2023-engineer-camp.zeabur.app/api/v1/works?page=${page}&sort=${sort}&type=${type}`
        )
        response = await response.json()
        let result = response['ai_works'].data
        this.totalPage = response['ai_works'].page['total_pages']
        this.aiToolList = result
      } catch {
        console.log('error')
        return null
      }
    },
    orderList() {
      if (this.order == '由新到舊') {
        this.sortAITool(0, this.currentPage, this.selectToolType)
        return this.aiToolList.toSorted((a, b) => b['create_time'] - a['create_time'])
      } else if (this.order == '由舊到新') {
        this.sortAITool(1, this.currentPage, this.selectToolType)
        return this.aiToolList.toSorted((a, b) => a['create_time'] - b['create_time'])
      }
      return []
    },
    async searchFunc(sort, page, type, search) {
      if (type == '所有類型') {
        type = ''
      }
      try {
        let response = await fetch(
          `https://2023-engineer-camp.zeabur.app/api/v1/works?page=${page}&sort=${sort}&type=${type}&search=${search}`
        )
        response = await response.json()
        let result = response['ai_works'].data
        this.totalPage = response['ai_works'].page['total_pages']
        this.aiToolList = result
      } catch {
        console.log('null')
      }
    }
  },
  computed: {}
}
</script>

<template>
  <main class="bg-white text-black rounded-40">
    <div class="container py-20">
      <h2 class="fw-bold fz-8 fz-lg-20 text-center mb-8">這些超酷的應用，都來自 AI工具王</h2>
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
          v-model.lazy="searchText"
          class="border-0 bg-gray w-100 rounded-4 ps-10 py-5"
          type="text"
        />
      </div>
      <div class="d-flex flex-wrap align-items-center mb-12">
        <div class="position-relative">
          <button type="button" @click="filterBtn = !filterBtn" class="btn-filter lh-sm">
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
                v-for="module in moduleList"
                :key="module"
              >
                <p class="px-10">{{ module }}</p>
              </li>
            </ul>
            <ul class="border-top pt-4">
              <h4 class="px-10 fs-6 text-muted mb-2">類型</h4>
              <li
                @click="selectToolType = type"
                class="bg-gray-hover py-1 cursor-pointer"
                v-for="type in aiToolType"
                :key="type"
              >
                <div class="hstack align-items-center px-10">
                  <a class="text-black">{{ type }}</a>
                  <span
                    v-show="selectToolType == type"
                    class="text-sm ms-auto material-symbols-outlined"
                  >
                    done
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="ms-auto m-xl-0 order-xl-1 position-relative">
          <button type="button" @click="orderBtn = !orderBtn" class="btn-filter">
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
        <ul class="mx-auto mt-4 mt-xl-0 d-flex gap-2 overflow-auto scrollbar-hide">
          <li @click='selectToolType = value' class="flex-shrink-0" v-for="value in aiToolType" :key="value">
            <button type="button" :class="{'bg-gray': selectToolType == value}" class="btn-types bg-gray-hover">
              {{ value }}
            </button>
          </li>
        </ul>
      </div>
      <ul class="row gap-y-6 mb-12">
        <li
          class="col-lg-6 col-xl-4"
          v-for="{ link, imageUrl, model, type, title, discordId, description, id } in aiToolList"
          :key="id"
        >
          <div class="d-flex flex-column aitool-card rounded-4 border h-100">
            <div class="aitool-card_img">
              <img :src="imageUrl" :alt="title" />
            </div>
            <div class="py-5 px-8 flex-grow-1">
              <h3 class="mb-3 fw-bold fs-5">{{ title }}</h3>
              <p class="description">{{ description }}</p>
            </div>
            <div class="hstack py-5 px-8 border-top border-black">
              <span class="fw-bolder">{{ model }}</span>
              <span class="ms-auto">{{ discordId }}</span>
            </div>
            <div class="hstack py-5 px-8 border-top border-black">
              <span>#{{ type }}</span>
              <a :href="link" class="ms-auto"
                ><span class="text-black material-symbols-rounded icon-share"> share </span></a
              >
            </div>
          </div>
        </li>
      </ul>
      <ul class="d-flex justify-content-end gap-1">
        <li class="flex-shrink-0 rounded-4" v-for="i in totalPage" :key="i">
          <a
            @click.prevent="currentPage = i"
            :class="{ 'bg-black': currentPage == i, 'text-white': currentPage == i }"
            class="cursor-pointer hstack justify-content-center rounded-4 square-12 text-black"
            >{{ i }}</a
          >
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
@media screen and (min-width: 992px) {
  .fz-lg-20 {
    font-size: 5rem;
  }
}
.text-sm {
  font-size: 1rem;
}
.description {
  color: #525252;
  font-size: 14px;
}
.w-144px {
  width: 144px;
}
.w-240px {
  width: 240px;
}
.rounded-40 {
  border-radius: 10rem;
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
.bg-gray {
  background: #f2f2f2;
}
.bg-gray-hover:hover {
  background: #f2f2f2;
}

.scrollbar-hide::-webkit-scrollbar{
  display: none;
}
</style>

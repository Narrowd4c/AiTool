<script>
export default {
  data() {
    return {
      partnerList: [
        'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/enterprise1.png',
        'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/enterprise2.png',
        'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/enterprise3.png',
        'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/enterprise4.png',
        'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/enterprise5.png',
        'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/enterprise6.png',
        'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/enterprise7.png',
        'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/enterprise8.png',
        'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/enterprise9.png',
        'https://raw.githubusercontent.com/Narrowd4c/AiTool/main/public/Rectangle22.png',
        'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/enterprise11.png',
        'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/enterprise12.png'
      ]
    }
  }
}
</script>
<template>
  <div>
    <h2 class="mb-6 mb-lg-20 fs-1 fw-bold">來自合作夥伴</h2>
    <div class="overflow-hidden h-40px mb-5">
      <ul class="d-flex justify-content-xl-center partner-list pb-8 px-10 mb-10">
        <li class="" v-for="(img, index) in partnerList.slice(0, 6)" :key="index + img">
          <img class="partner-logo" :src="img" :alt="`partner${index}`" />
        </li>
      </ul>
    </div>
    <div class="overflow-hidden h-40px mb-5">
      <ul class="d-flex justify-content-xl-center partner-list pb-8 ps-2 pe-8">
        <li class="pt-1" v-for="(img, index) in partnerList.slice(6, 12)" :key="index + img">
          <img class="partner-logo" :src="img" :alt="`partner${index}`" />
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.h-40px {
  height: 50px;
}
.partner-list {
  overflow-x: scroll;
  mask: linear-gradient(90deg, #000 80%, transparent);
  -webkit-mask: linear-gradient(90deg, transparent 2%, #000 10%, #000 70%, transparent);
  gap: 0px 1.25rem;
}
.partner-logo {
  max-width: 160px;
}
</style>

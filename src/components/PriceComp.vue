<script>
export default {
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
      ]
    }
  }
}
</script>
<template>
  <h3 class="mt-30 mt-lg-40 fz-8 mb-20 fw-bold">定價</h3>
  <ul class="row gap-y-6 mb-30">
    <li v-for="({ name, description, price }, i) in priceList" :key="i + name" class="col-md-6">
      <div class="border rounded-4 h-100 vstack">
        <div class="p-5 px-lg-8 py-lg-5 flex-grow-1">
          <h4 class="fw-bold fz-8 mb-3">{{ name }}</h4>
          <ul class="list-style ms-5 mb-10 flex-grow-1">
            <li v-for="d in description" :key="d">{{ d }}</li>
          </ul>
        </div>
        <div class="border-top hstack p-5">
          <p class="fz-5 fw-bold">NT${{ price }}<span class="text-gray">／1k tokens</span></p>
          <a class="cursor-pointer ms-auto fw-bolder"
            >開始使用<span class="fs-sub align-text-bottom material-symbols-outlined">
              north_east
            </span></a
          >
        </div>
      </div>
    </li>
  </ul>
</template>
<style lang='scss' scoped>
.text-gray {
  color: #919191;
}
.list-style {
  list-style: disc;
}

</style>

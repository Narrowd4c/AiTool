<script>
export default {
  data() {
    return {
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
  <div class="d-lg-flex justify-content-between mb-30">
    <h3 class="fw-bold pt-10">使用規範</h3>
    <ul class="w-lg-75">
      <li
        class="py-10 border-bottom border-secondary"
        v-for="{ title, description } in rules"
        :key="title"
      >
        <h4 class="mb-6 fz-8 fw-bold">{{ title }}</h4>
        <p>{{ description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
</script>
<template>
    <footer class="border-top">
    <div class="d-md-flex py-20">
        <img class="w-250px mb-10 order-1 ms-auto align-self-md-start" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/logo.png" alt="">
        <div class="display-1 fw-bolder"><a class="d-block" href="#">首頁</a><a class="d-block" href="#">定價</a></div>
    </div>
    <div class="d-flex flex-wrap border-top py-8">
      <span class="order-md-1 me-25 mb-9 mb-md-0">AI工具王 © 2023</span>
      <a class='ms-auto text-end order-md-2' href="#">Back to top <span>icon</span></a>    
      <ul class="d-flex w100 gap-5 order-md-1">
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
      </ul>
    </div>
  </footer>
</template>
<style lang="scss">

    .py-8{
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
    .py-20{
        padding-top: 5rem;
        padding-bottom: 5rem;
    }
    .mb-9{
        margin-bottom: 2.25rem;
    }
    .mb-10{
        margin-bottom: 2.5rem;
    }
    .w-250px{
        width: 250px;
    }
    @media screen and (min-width:576px){
        .me-25{
            margin-right: 6.25rem;
        }
    }
    @media screen and (max-width:576px){
        .w100{
            width: 100%;
        }
    }
        
</style>
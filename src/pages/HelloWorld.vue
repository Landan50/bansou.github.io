<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';
// import { useRoute } from 'vue-router'
const { locale } = useI18n();
// const route = useRoute();

const changeLang = type => {
  console.log(type);
  localStorage.setItem('lang',type);
  locale.value = type;
}

</script>

<template>
  <!-- {{ route.params }} -->
  <div class="container-fluid text-center">
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {{ $t('messages.selectTitle') }}
      </button>
      <ul class="dropdown-menu">
        <li @click="changeLang('zh')"><a class="dropdown-item" href="#">中文</a></li>
        <li @click="changeLang('en')"><a class="dropdown-item" href="#">英文</a></li>
      </ul>
    </div>
  </div>
  <div class="container-fluid text-center">
    <div class="row d-flex justify-content-around">
      <div class="col-10 col-sm-10 col-md-5 shadow box">
        <div class="row align-items-center flex-column d-flex flex-sm-row">
          <div class="col-auto">
            <!-- <img src="../assets/images/vue.svg" class="img-fluid img" alt=""> -->
          </div>
          <div class="col text-wrap">
            <p>{{ $t('messages.introduce1') }}</p>
          </div>
        </div>
      </div>
      <div class="col-10 col-sm-10 col-md-5 shadow box">
        <div class="row align-items-center flex-column d-flex flex-sm-row">
          <div class="col-auto">
            <!-- <img src="../assets/images/vue.svg" class="img-fluid img" alt=""> -->
          </div>
          <div class="col text-wrap">
            <p>{{ $t('messages.introduce2') }}</p>
          </div>
        </div>
      </div>
      <div class="col-10 col-sm-10 col-md-5 shadow box">
        <div class="row align-items-center flex-column d-flex flex-sm-row">
          <div class="col-auto">
            <!-- <img src="../assets/images/vue.svg" class="img-fluid img" alt=""> -->
          </div>
          <div class="col text-wrap">
            <p>{{ $t('messages.introduce3') }}</p>
          </div>
        </div>
      </div>
      <div class="col-10 col-sm-10 col-md-5 shadow box">
        <div class="row align-items-center flex-column d-flex flex-sm-row">
          <div class="col-auto">
            <!-- <img src="../assets/images/vue.svg" class="img-fluid img" alt=""> -->
          </div>
          <div class="col text-wrap">
            <p>{{ $t('messages.introduce4') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid text-center overflow-hidden">
    <div class="row d-flex justify-content-center justify-content-sm-around flex-column align-items-start flex-sm-row"
      id="img-container">
      <div class="col-12 col-sm-12 col-md-8">
        <div class="row">
          <!-- <img src="../assets/images/images1.webp" class="img-fluid" alt=""> -->
          <p>Introducing GPT‑4.5</p>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-md-4 overflow-auto" id="center-top">
        <div class="row d-flex justify-content-between">
          <div class="col-12 col-sm-5 col-md-12">
            <!-- <img src="../assets/images/images2.webp" alt="" class="img-fluid"> -->
            <p>Introducing deep research</p>
          </div>
          <div class="col-12 col-sm-5 col-md-12">
            <!-- <img src="../assets/images/images2.webp" alt="" class="img-fluid"> -->
            <p>Sharing the latest Model Spec</p>
          </div>
          <div class="col-12 col-sm-5 col-md-12">
            <!-- <img src="../assets/images/images2.webp" alt="" class="img-fluid"> -->
            <p>Catching halibut with ChatGPT</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  /* div {
    height: 100px;
  } */
}

.box {
  margin-top: 16px;
}

.img {
  width: 100px;
  height: 100px;
}

#img-container {
  margin-top: 24px;
  /* height: 600px; */
}

@media (min-width: 768px) {
  #center-top {
    max-height: 100vh;
  }
}
</style>

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // 注意必须使用bundle版本
import i18n from './i18n';
import router from './router/index';
// import './assets/css/app.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import VuePdfEmbed from 'vue-pdf-embed'
import StarRating from 'vue-star-rating'
import YouTube from 'vue3-youtube'
// import 'swiper/css/bundle';
// import { Swiper, SwiperSlide } from 'swiper/vue';
// .component('Swiper', Swiper).component('SwiperSlide', SwiperSlide)
const loadYouTubeAPI = () => {
  const tag = document.createElement('script')
  tag.src = 'https://www.youtube.com/iframe_api'
  const firstScriptTag = document.getElementsByTagName('script')[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
}

loadYouTubeAPI()

const app = createApp(App)

app.component('VuePdfEmbed', VuePdfEmbed)
app.component('StarRating', StarRating)
app.component('YouTube', YouTube)
app.use(router).use(i18n).mount('#app')

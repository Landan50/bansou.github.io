<script setup>
import { ref, onMounted } from 'vue'
import SwiperNew from 'swiper'
import '../../../node_modules/swiper/swiper-bundle.min.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const mySwiper = ref(null)

const getLeft = () => {
    mySwiper.value.slidePrev()
}

const getRight = () => {
    mySwiper.value.slideNext()
}

const onSwiper = (swiper) => {
    mySwiper.value = swiper
    console.log('swiper', swiper.slideNext);

}

onMounted(() => {
    new SwiperNew('.swiperContainer', {
        // 默认每行显示 3 个幻灯片
        slidesPerView: 1,
        spaceBetween: 0, // 幻灯片之间的间距
        // 根据屏幕宽度动态调整 slidesPerView
        breakpoints: {
            // 当屏幕宽度 >= 320px 时
            320: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            // 当屏幕宽度 >= 640px 时
            640: {
                slidesPerView: 6,
                spaceBetween: 0,
            },
            // 当屏幕宽度 >= 1024px 时
            1024: {
                slidesPerView: 8,
                spaceBetween: 0,
            },
        },
    });
})

const onSlideChange = () => {
    console.log('slide change');
};

</script>

<template>
    <div class="container">
        <div class="row align-items-center">

            <div @click="getLeft" class="col-1">
                <img src="../../assets/images/index/left_arrow@2x.png" id="arrow-box" class="img-fluid" alt="">
            </div>
            <div class="col-10">

                <swiper class="swiperContainer" :modules="[Navigation]" :space-between="0" @swiper="onSwiper"
                    @slideChange="onSlideChange">
                    <swiper-slide>
                        <div>
                            <div class="run-icon-box">
                                <img src="../../assets/images/index/home_serve@2x.png" id="run-image-box"
                                    class="img-fluid" alt="">
                            </div>
                            <div class="run-icon-text text-nowrap">居家服務</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <div class="run-icon-box">
                                <img src="../../assets/images/index/home_serve@2x.png" id="run-image-box"
                                    class="img-fluid" alt="">
                            </div>
                            <div class="run-icon-text text-nowrap">居家服務</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <div class="run-icon-box">
                                <img src="../../assets/images/index/home_serve@2x.png" id="run-image-box"
                                    class="img-fluid" alt="">
                            </div>
                            <div class="run-icon-text text-nowrap">居家服務</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <div class="run-icon-box">
                                <img src="../../assets/images/index/home_serve@2x.png" id="run-image-box"
                                    class="img-fluid" alt="">
                            </div>
                            <div class="run-icon-text text-nowrap">居家服務</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <div class="run-icon-box">
                                <img src="../../assets/images/index/home_serve@2x.png" id="run-image-box"
                                    class="img-fluid" alt="">
                            </div>
                            <div class="run-icon-text text-nowrap">居家服務</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <div class="run-icon-box">
                                <img src="../../assets/images/index/home_serve@2x.png" id="run-image-box"
                                    class="img-fluid" alt="">
                            </div>
                            <div class="run-icon-text text-nowrap">居家服務</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <div class="run-icon-box">
                                <img src="../../assets/images/index/home_serve@2x.png" id="run-image-box"
                                    class="img-fluid" alt="">
                            </div>
                            <div class="run-icon-text text-nowrap">居家服務</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <div class="run-icon-box">
                                <img src="../../assets/images/index/home_serve@2x.png" id="run-image-box"
                                    class="img-fluid" alt="">
                            </div>
                            <div class="run-icon-text text-nowrap">居家服務</div>
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div>
                            <div class="run-icon-box">
                                <img src="../../assets/images/index/home_serve@2x.png" id="run-image-box"
                                    class="img-fluid" alt="">
                            </div>
                            <div class="run-icon-text text-nowrap">487616</div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <div class="run-icon-box">
                                <img src="../../assets/images/index/home_serve@2x.png" id="run-image-box"
                                    class="img-fluid" alt="">
                            </div>
                            <div class="run-icon-text text-nowrap">84649</div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <div @click="getRight" class="col-1">
                <img src="../../assets/images/index/right_arrow@2x.png" id="arrow-box" class="img-fluid" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped></style>

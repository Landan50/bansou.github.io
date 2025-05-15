<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted, defineAsyncComponent } from 'vue'
import { useLazyLoad } from '../../utils/useLazyLoad'

const HeaderComponent = defineAsyncComponent(() =>
    import('@/pages/header.vue')
);

const BottomComponent = defineAsyncComponent(() =>
    import('@/pages/bottom.vue')
);

const { registerImage } = useLazyLoad()

const imgIndex = ref(0);

const clickIndex = ref(0);
const maxOffset = ref(0);//最大偏移量
const currentOffset = ref(0);//当前偏移量
const moveStatus = ref(true);

// const isClick = ref(true);
const isLength = ref(0);

//判断元素是否超出
const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    const container = document.querySelector('#run-row-box');
    const parent = container.getBoundingClientRect();

    // console.log('rect',el.offsetLeft);

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        (-(parent.left - rect.left)) <= (container.clientWidth)
    );
}

//统计可视区域的元素个数
const countVisibleElements = () => {
    let visibleCount = 0;
    const imgAll = document.querySelectorAll("#img-container");
    const run = document.querySelector('#run-container');
    run.style.transform = `translateX(0)`;
    clickIndex.value = 0;
    currentOffset.value = 0;


    imgAll.forEach(item => {
        if (isElementInViewport(item)) {
            visibleCount++;
        }
    });

    maxOffset.value = (imgAll.length - (visibleCount - 1)) * imgAll[0].clientWidth;
    isLength.value = visibleCount - 1;
}

onMounted(() => {
    countVisibleElements();
    window.addEventListener('resize', countVisibleElements);
})

onUnmounted(() => {
    window.removeEventListener('resize', countVisibleElements);
})

//向右滑动
const rightClick = () => {
    const container = document.querySelector('#run-row-box');
    const imgAll = document.querySelectorAll("#img-container");
    const run = document.querySelector('#run-container');

    clickIndex.value = clickIndex.value >= imgAll.length - 1 ? imgAll.length - 1 : clickIndex.value + 1;

    //下一个元素的边界
    if (!(container.getBoundingClientRect().right < (imgAll[clickIndex.value].getBoundingClientRect().left + 20))) {
        return
    }

    if (currentOffset.value > -maxOffset.value) {
        currentOffset.value -= imgAll[0].clientWidth;
        run.style.transform = `translateX(${currentOffset.value}px)`;
    }

}

// 向左滑动
const leftClick = () => {
    const container = document.querySelector('#run-row-box');
    const imgAll = document.querySelectorAll("#img-container");
    const run = document.querySelector('#run-container');

    clickIndex.value = clickIndex.value <= 0 ? 0 : clickIndex.value - 1;

    //上一个元素的边界
    if (!(container.getBoundingClientRect().left > imgAll[clickIndex.value].getBoundingClientRect().right)) {
        return;
    }

    if (currentOffset.value < 0) {
        currentOffset.value += imgAll[0].clientWidth;
        run.style.transform = `translateX(${currentOffset.value}px)`;
    }
}

const chilckMove = (index) => {
    clickIndex.value = index;
}

//App滑动
const moveBox = () => {
    moveStatus.value = !moveStatus.value;
}

</script>

<template>

    <div>
        <HeaderComponent />
    </div>

    <!-- 轮播图 -->
    <div id="carouselExampleAutoplaying" class="carousel slide carousel-box-wrap" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../../assets/images/index/banner@2x.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="../../assets/images/index/banner@2x.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="../../assets/images/index/banner@2x.png" class="d-block w-100" alt="...">
            </div>
        </div>
        <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button> -->
    </div>

    <!-- 走马灯 -->
    <div class="container text-center">
        <div class="row align-items-center justify-content-around flex-nowrap" id="run-light-box">
            <div class="col-2 col-sm-1" @click="leftClick">
                <img src="../../assets/images/index/left_arrow@2x.png" id="arrow-box" class="img-fluid" alt="">
            </div>
            <div class="col-md-10 col-lg-10 col-5 position-relative overflow-hidden" id="run-row-box">
                <div class="row flex-nowrap position-absolute align-items-center top-0 start-0 w-100"
                    id="run-container">
                    <div :class="clickIndex === 0 ? 'col-lg-2 col-md-3 col-12 run-active' : 'col-lg-2 col-md-3 col-12'"
                        id="img-container" @click="chilckMove(0)">
                        <div class="run-icon-box">
                            <img src="../../assets/images/index/home_serve@2x.png" id="run-image-box" class="img-fluid"
                                alt="">
                        </div>
                        <div class="run-icon-text text-nowrap">{{ $t('messages.projectList[0]') }}</div>
                    </div>
                    <div :class="clickIndex === 1 ? 'col-lg-2 col-md-3 col-12 run-active' : 'col-lg-2 col-md-3 col-12'"
                        id="img-container" @click="chilckMove(1)">
                        <div class="run-icon-box">
                            <img src="../../assets/images/index/beautyCare@2x.png" id="run-image-box" class="img-fluid"
                                alt="">
                        </div>
                        <div class="run-icon-text text-nowrap">{{ $t('messages.projectList[1]') }}</div>
                    </div>
                    <div :class="clickIndex === 2 ? 'col-lg-2 col-md-3 col-12 run-active' : 'col-lg-2 col-md-3 col-12'"
                        id="img-container" @click="chilckMove(2)">
                        <div class="run-icon-box">
                            <img src="../../assets/images/index/animal@2x.png" id="run-image-box" class="img-fluid"
                                alt="">
                        </div>
                        <div class="run-icon-text text-nowrap">{{ $t('messages.projectList[2]') }}</div>
                    </div>
                    <div :class="clickIndex === 3 ? 'col-lg-2 col-md-3 col-12 run-active' : 'col-lg-2 col-md-3 col-12'"
                        id="img-container" @click="chilckMove(3)">
                        <div class="run-icon-box">
                            <img src="../../assets/images/index/healthCare@2x.png" id="run-image-box" class="img-fluid"
                                alt="">
                        </div>
                        <div class="run-icon-text text-nowrap">{{ $t('messages.projectList[3]') }}</div>
                    </div>
                    <div :class="clickIndex === 4 ? 'col-lg-2 col-md-3 col-12 run-active' : 'col-lg-2 col-md-3 col-12'"
                        id="img-container" @click="chilckMove(4)">
                        <div class="run-icon-box">
                            <img src="../../assets/images/index/photoGraphy@2x.png" id="run-image-box" class="img-fluid"
                                alt="">
                        </div>
                        <div class="run-icon-text text-nowrap">{{ $t('messages.projectList[4]') }}</div>
                    </div>
                    <div :class="clickIndex === 5 ? 'col-lg-2 col-md-3 col-12 run-active' : 'col-lg-2 col-md-3 col-12'"
                        id="img-container" @click="chilckMove(5)">
                        <div class="run-icon-box">
                            <img src="../../assets/images/index/pregnancy@2x.png" id="run-image-box" class="img-fluid"
                                alt="">
                        </div>
                        <div class="run-icon-text nowrap">{{ $t('messages.projectList[5]') }}</div>
                    </div>
                    <div :class="clickIndex === 6 ? 'col-lg-2 col-md-3 col-12 run-active' : 'col-lg-2 col-md-3 col-12'"
                        id="img-container" @click="chilckMove(6)">
                        <div class="run-icon-box">
                            <img src="../../assets/images/index/learn@2x.png" id="run-image-box" class="img-fluid"
                                alt="">
                        </div>
                        <div class="run-icon-text nowrap">{{ $t('messages.projectList[6]') }}</div>
                    </div>
                    <div :class="clickIndex === 7 ? 'col-lg-2 col-md-3 col-12 run-active' : 'col-lg-2 col-md-3 col-12'"
                        id="img-container" @click="chilckMove(7)">
                        <div class="run-icon-box">
                            <img src="../../assets/images/index/wedding@2x.png" id="run-image-box" class="img-fluid"
                                alt="">
                        </div>
                        <div class="run-icon-text nowrap">{{ $t('messages.projectList[7]') }}</div>
                    </div>
                    <div :class="clickIndex === 8 ? 'col-lg-2 col-md-3 col-12 run-active' : 'col-lg-2 col-md-3 col-12'"
                        id="img-container" @click="chilckMove(8)">
                        <div class="run-icon-box">
                            <img src="../../assets/images/index/home_serve@2x.png" id="run-image-box" class="img-fluid"
                                alt="">
                        </div>
                        <div class="run-icon-text nowrap">{{ $t('messages.projectList[1]') }}</div>
                    </div>
                    <div :class="clickIndex === 9 ? 'col-lg-2 col-md-3 col-12 run-active' : 'col-lg-2 col-md-3 col-12'"
                        id="img-container" @click="chilckMove(9)">
                        <div class="run-icon-box">
                            <img src="../../assets/images/index/beautyCare@2x.png" id="run-image-box" class="img-fluid"
                                alt="">
                        </div>
                        <div class="run-icon-text nowrap">{{ $t('messages.projectList[2]') }}</div>
                    </div>
                </div>
            </div>
            <div class="col-2 col-sm-1" @click="rightClick">
                <img src="../../assets/images/index/right_arrow@2x.png" id="arrow-box" class="img-fluid" alt="">
            </div>
        </div>
    </div>

    <!-- 业务详情表 -->
    <div class="container text-center" id="list-introduce-box" style="background-color: #FAFAFA;padding-bottom: 10px;">
        <div class="row justify-content-around pt-3 mb-2 cancel-margin-wrap">
            <div class="col-md-3 col-12 mb-2 mb-md-0" id="project-list-wrap">
                <div class="row w-100 position-relative cancel-margin-wrap">
                    <!-- <div class="col-12">
                        <div class="row w-100 position-relative" style="margin-left: 0; margin-right: 0;"> -->
                    <div class="col-12 h-auto" id="eco-img-box" style="z-index: 0;">
                        <img src="../../assets/images/index/wangp1-tu@2x.png" id="common-ace-img" class="img-fluid"
                            style="object-fit: fill;" alt="">
                    </div>
                    <div class="row align-items-center position-absolute top-50 start-50 translate-middle"
                        style="z-index: 1;">
                        <div class="col-6">
                            <img src="../../assets/images/index/wangpai1@2x.png" class="img-fluid project-img-box"
                                alt="">
                        </div>
                        <div class="col-6">
                            <div class="row project-text-wrap">
                                <div class="col-12 text-white">清洁消毒</div>
                                <div class="col-10 mx-auto mt-1 mb-1" style="height: 1px;background-color: white;">
                                </div>
                                <div class="col-12 text-white">经验了得好帮手</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- </div>
                </div> -->
            </div>
            <div class="col-md-3 col-12 mb-2 mb-md-0" id="project-list-wrap">
                <div class="row w-100 position-relative cancel-margin-wrap">
                    <!-- <div class="col-12"> -->
                    <!-- <div class="row w-100 position-relative" style="margin-left: 0; margin-right: 0;"> -->
                    <div class="col-12 h-auto" id="eco-img-box" style="z-index: 0;">
                        <img src="../../assets/images/index/wangp2-tu@2x.png" id="common-ace-img" class="img-fluid"
                            alt="">
                    </div>
                    <div class="row align-items-center position-absolute top-50 start-50 translate-middle"
                        style="z-index: 1;">
                        <div class="col-6">
                            <img src="../../assets/images/index/wangpai2@2x.png" class="img-fluid project-img-box"
                                alt="">
                        </div>
                        <div class="col-6">
                            <div class="row project-text-wrap">
                                <div class="col-12 text-white">家居維修</div>
                                <div class="col-10 mx-auto mt-1 mb-1" style="height: 1px;background-color: white;">
                                </div>
                                <div class="col-12 text-white">服務超過數萬家庭</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- </div>
                </div> -->
            </div>
            <div class="col-md-3 col-12" id="project-list-wrap">
                <div class="row w-100 position-relative cancel-margin-wrap">
                    <!-- <div class="col-12"> -->
                    <!-- <div class="row w-100 position-relative" style="margin-left: 0; margin-right: 0;"> -->
                    <div class="col-12 h-auto" id="eco-img-box" style="z-index: 0;">
                        <img src="../../assets/images/index/wangp3-tu@2x.png" id="common-ace-img" class="img-fluid"
                            alt="">
                    </div>
                    <div class="row align-items-center position-absolute top-50 start-50 translate-middle"
                        style="z-index: 1;">
                        <div class="col-6">
                            <img src="../../assets/images/index/wangpai3@2x.png" class="img-fluid project-img-box"
                                alt="">
                        </div>
                        <div class="col-6">
                            <div class="row project-text-wrap">
                                <div class="col-12 text-white">通渠服務</div>
                                <div class="col-10 mx-auto mt-1 mb-1" style="height: 1px;background-color: white;">
                                </div>
                                <div class="col-12 text-white">專業師傅信得過</div>
                            </div>
                        </div>
                    </div>
                    <!-- </div> -->
                    <!-- </div> -->
                </div>
            </div>
        </div>
        <div class="common-mouse-box d-inline text-nowrap" style="color: #999999;font-size: 14px;">{{
            $t('messages.moreText') }}</div>
    </div>

    <!-- 视频 -->
    <div class="container text-center mt-5">
        <div class="row h-100 align-items-center justify-content-between">
            <div class="col-12 col-sm-3">
                <div class="text-sm-start video-title-box text-nowrap">
                    <div class="fw-bold fs-6" style="z-index: 1;position: relative;">{{ $t('messages.videoTexts[0]') }}
                    </div>
                    <div class="fw-bold fs-6" style="z-index: 1;position: relative;">{{ $t('messages.videoTexts[1]') }}
                    </div>
                </div>
                <div class="text-sm-start text-nowrap mt-3">
                    <div style="color: #666666;font-size: 12px;">{{ $t('messages.videoTexts[2]') }}</div>
                    <div style="color: #666666;font-size: 12px;">{{ $t('messages.videoTexts[3]') }}</div>
                </div>
            </div>
            <div class="col-12 col-sm-8 mt-4 mt-sm-0">
                <div class="ratio ratio-16x9">
                    <video controls autoplay loop muted>
                        <source src="../../assets/video/bs_video.mp4" type="video/mp4">
                        您的浏览器不支持视频播放。
                    </video>
                </div>
            </div>
        </div>
    </div>

    <!-- APP下载 -->
    <div class="container text-center mt-5" id="list-introduce-box">
        <div class="fs-5 fw-semibold mb-1">{{ $t('messages.reloadTitle') }}</div>
        <div style="color: #666666;font-size: 12px;">{{ $t('messages.reloadSubTitle') }}</div>
        <div class="row mt-4 align-items-center">
            <div v-if="moveStatus" class="col-md-4 col-12 mb-3 mb-md-0 left-btn-container" @mouseenter="moveBox"
                :id="moveStatus ? 'common-move-box' : ''">
                <div class="d-flex flex-sm-column justify-content-around justify-content-sm-center align-items-center">
                    <div>
                        <div>
                            <img src="../../assets/images/index/vip_icon@2x.png" style="height: 76px;" alt="">
                        </div>
                        <div class="mt-3">
                            <img src="../../assets/images/index/avatar_icon@2x.png" class="me-2" style="height: 24px;"
                                alt="">
                            <span class="align-middle" style="color: #CACACA;">{{ $t('messages.vipTexts[0]') }}</span>
                        </div>
                    </div>
                    <div class="mt-5">
                        <img src="../../assets/images/index/service_mobile_icon@2x.png" style="height: 132px;" alt="">
                    </div>
                </div>
            </div>

            <div v-else class="col-md-8 col-12 position-relative mt-4 mt-sm-0" style="height: 459px;"
                :id="!moveStatus ? 'common-move-box' : ''">
                <div class="position-absolute w-100 h-100 top-0 left-0" style="z-index: 0;">
                    <img class="img-fluid h-100 w-100" style="object-fit: fill;"
                        src="../../assets/images/index/vip_img@2x.png" alt="">
                </div>
                <div class="position-relative mt-2" style="z-index: 1;" id="title-header-box">
                    <img src="../../assets/images/index/vip_reload_icon@2x.png" style="height: 19px;" alt="">
                    <span class="align-middle ms-2" style="color: #FFFFFF;">{{ $t('messages.vipTexts[0]') }}</span>
                </div>
                <div class="position-relative" style="margin-top: 3em;">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-10 pe-5 ps-5" style="height: 103px;background: #FFE9AD;border-radius: 50px;">
                            <div class="row justify-content-center align-items-center h-100">
                                <div class="col-2">
                                    <img src="../../assets/images/index/vip_icon@2x.png" class="img-fluid"
                                        style="height: 70px;" alt="">
                                </div>
                                <div class="col-8 col-md-9 app-text-box">
                                    {{ $t('messages.vipTexts[1]') }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="position-absolute bottom-0 end-0 mb-sm-4 mb-4" id="wait-roald-box">
                    <div class="d-flex flex-column">
                        <div style="color: #999999;font-size: 16px;">{{ $t('messages.waitText') }}</div>
                        <div class="mt-3 mb-3">
                            <img src="../../assets/images/index/app_store_img.png" style="height: 46px;" alt="">
                        </div>
                        <div>
                            <img src="../../assets/images/index/google_img.png" style="height: 46px;" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="!moveStatus" class="col-md-4 col-12 mb-3 mb-sm-0 right-btn-container" @mouseenter="moveBox"
                :id="!moveStatus ? 'common-move-box' : ''">
                <div class="d-flex flex-sm-column justify-content-around justify-content-sm-center align-items-center">
                    <div>
                        <div>
                            <img src="../../assets/images/index/server_icon@2x.png" style="height: 76px;" alt="">
                        </div>
                        <div class="mt-3">
                            <img src="../../assets/images/index/service_reload_icon@2x.png" class="me-2"
                                style="height: 24px;" alt="">
                            <span class="align-middle" style="color: #CACACA;">{{ $t('messages.serviceTexts[0]')
                                }}</span>
                        </div>
                    </div>
                    <div class="mt-5">
                        <img src="../../assets/images/index/service_mobile_icon@2x.png" style="height: 132px;" alt="">
                    </div>
                </div>
            </div>

            <div v-else class="col-md-8 col-12 position-relative mt-4 mt-sm-0" style="height: 459px;"
                :id="moveStatus ? 'common-move-box' : ''">
                <div class="position-absolute w-100 h-100 top-0 left-0" style="z-index: 0;">
                    <img class="img-fluid h-100 w-100" style="object-fit: fill;"
                        src="../../assets/images/index/service_provider_background.png" alt="">
                    <!-- <img class="img-fluid h-100 w-100" style="object-fit: fill;"
                         :ref="el => { if(el) registerImage(el,'src/assets/images/index/service_provider_background.png') }" alt=""> -->
                </div>
                <div class="position-relative mt-2" style="z-index: 1;" id="title-header-box">
                    <img src="../../assets/images/index/service_provider_icon@2x.png" style="height: 19px;" alt="">
                    <span class="align-middle ms-2" style="color: #FFFFFF;">{{ $t('messages.serviceTexts[0]') }}</span>
                </div>
                <div class="position-relative" style="margin-top: 3em;">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-10 pe-5 ps-5" style="height: 103px;background: #EAF6FF;border-radius: 50px;">
                            <div class="row justify-content-center align-items-center h-100">
                                <div class="col-2 app-icon-box">
                                    <img src="../../assets/images/index/server_icon@2x.png" class="img-fluid"
                                        style="height: 70px;" alt="">
                                </div>
                                <div class="col-8 col-md-9 app-text-box">
                                    {{ $t('messages.serviceTexts[1]') }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="position-absolute bottom-0 end-0 mb-sm-4 mb-4" id="wait-roald-box">
                    <div class="d-flex flex-column">
                        <div style="color: #999999;font-size: 16px;">{{ $t('messages.waitText') }}</div>
                        <div class="mt-3 mb-3">
                            <img src="../../assets/images/index/app_store_img.png" class="img-fluid"
                                style="height: 46px;" alt="">
                        </div>
                        <div>
                            <img src="../../assets/images/index/google_img.png" class="img-fluid" style="height: 46px;"
                                alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div>
        <BottomComponent />
    </div>

</template>

<style scoped>
#project-list-wrap,
.common-mouse-box {
    cursor: pointer;
}

#common-move-box {
    animation: moveGrow 2s ease-in;
}

@keyframes moveGrow {
    0% {
        opacity: 0;
        transform: scaleX(0.5);
    }

    100% {
        opacity: 1;
        transform: scaleX(1);
    }
}

.hover-opacity-100 {
    top: -120%;
}

/* 隐藏视频的进度条 */
video::-webkit-media-controls-timeline {
    display: none;
}

/* 鼠标移入时显示二维码 */
/* :has(.hover-opacity-100:hover): 选择的是包含某个子元素，且该子元素具有类名 .hover-opacity-100 并在当前被鼠标悬停（:hover）的父元素 */
.main-img-box:hover:not(:has(.hover-opacity-100:hover)) {
    .hover-opacity-100 {
        opacity: 1 !important;
    }
}

/* #eco-img-box, */
/* #project-container {
    height: 192px;
    position: relative;
} */

/* #common-ace-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    position: relative;
} */

#eco-img-box::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    touch-action: none;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
}

.image-container img {
    /* 禁止图片伸缩 */
    /* flex: 0 0 auto; */
    margin-right: 10px;
}

.video-title-box {
    position: relative;
    z-index: 0;
}

.video-title-box::after {
    position: absolute;
    content: '';
    width: 200px;
    height: 8px;
    background-color: #FEB250;
    bottom: 5%;
}

.carousel-indicators [data-bs-target] {
    width: 10px;
    /* 宽度 */
    height: 10px;
    /* 高度 */
    border-radius: 50%;
    /* 圆形 */
    opacity: 0.4;
    background-color: #FFFFFF;
    /* 边框 */
    margin: 0 5px;
    /* 间距 */
}

/* 激活状态背景颜色 */
.carousel-indicators .active {
    opacity: 1;
    background-color: #fff;
}

/* 跑马灯 */
#run-image-box {
    width: 60px;
    height: 60px;
}

#arrow-box {
    width: 30px;
    height: 30px;
    cursor: pointer;
}

.run-active {
    border-bottom: 2px #feb250 solid;
    position: relative;
}

.run-active::after {
    position: absolute;
    content: '';
    border-left: 6px solid transparent;
    /* 左边框透明 */
    border-right: 6px solid transparent;
    /* 右边框透明 */
    border-top: 6px solid #feb250;
    bottom: -7px;
    left: 50%;
    transform: translateX(-50%);
}

#img-container {
    padding-bottom: 20px;
    cursor: pointer;
}

#run-light-box,
#run-row-box,
#run-container {
    height: 128px;
}

.cancel-margin-wrap {
    margin-left: 0;
    margin-right: 0;
}

#run-row-box {
    .row>* {
        padding-right: 0 !important;
    }
}

#list-introduce-box {
    .row>* {
        padding-right: 0 !important;
        padding-left: 0 !important;
    }
}

@media (max-width: 578px) {
    .video-title-box::after {
        left: 50%;
        transform: translateX(-50%);
    }
}

@media (max-width: 420px) {
    .app-text-box {
        font-size: 12px;
    }
}

@media (max-width: 400px) {
    #wait-roald-box {
        margin-right: 0;
    }
}

@media (min-width: 550px) and (max-width: 1200px) {
    #wait-roald-box {
        margin-right: 3em;
    }
}

@media (min-width: 768px) and (max-width: 1000px) {
    .project-text-wrap {
        font-size: 10px;
    }

    .project-img-box {
        width: 56px;
    }
}

@media (min-width: 1200px) {
    #wait-roald-box {
        margin-right: 7em;
    }
}

@media (min-width: 1200px) {
    #img-container {
        padding: 0 10px 20px 10px !important;
    }
}
</style>

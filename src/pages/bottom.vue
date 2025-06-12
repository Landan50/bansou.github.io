<script setup>
import { useRouter, RouterLink, useRoute, onBeforeRouteUpdate } from 'vue-router';
import { watch, onMounted, ref } from "vue";

const route = useRoute();
const isActive = ref("");

onMounted(() => {
    // console.log(route);
    isActive.value = route.path;
})

// watch(
//     () => route.path,
//     (newPath, oldPath) => {
//         console.log('路径变化:', oldPath, '->', newPath);
//         isActive.value = newPath;
//     },
//     // { immediate: true }
// )

//想通组件内，路由变化才会触发
// onBeforeRouteUpdate((to, from) => {
//     console.log('从', from.path, '跳转到', to.path);
// });
</script>

<template>
    <!-- 底部 -->
    <div class="container text-center">
        <div class="row d-inline-flex w-auto justify-content-between align-items-start">
            <div class="col-md-7 col-12">
                <div class="row justify-content-around">
                    <div class="col-2">
                        <div class="row gap-3">
                            <div class="col-12 text-nowrap fw-semibold bottom-text-gesture" id="bottom-left-title">
                                {{ $t('messages.bottomList[0][0]') }}
                            </div>
                            <div class="col-12 text-nowrap bottom-text-gesture" id="bottom-left-text">
                                <router-link to="/aboutUs/2">
                                    <div :class="isActive === '/aboutUs/2' ? 'list-router-active' : ''">
                                        {{ $t('messages.bottomList[0][1]') }}
                                    </div>
                                </router-link>
                            </div>
                            <div class="col-12 text-nowrap bottom-text-gesture" id="bottom-left-text">
                                <router-link :to="`/about/1`">
                                    <div :class="isActive === '/about/1' ? 'list-router-active' : ''">
                                        {{ $t('messages.bottomList[0][2]') }}
                                    </div>
                                </router-link>
                            </div>
                            <div class="col-12 text-nowrap bottom-text-gesture" id="bottom-left-text">
                                <router-link :to="`/about/2`">
                                    <div :class="isActive === '/about/2' ? 'list-router-active' : ''">
                                        {{ $t('messages.bottomList[0][3]') }}
                                    </div>
                                </router-link>
                            </div>
                            <!-- <div class="col-12 text-nowrap bottom-text-gesture" id="bottom-left-text">{{
                                $t('messages.bottomList[0][4]') }}
                            </div> -->
                            <div class="col-12 text-nowrap bottom-text-gesture" id="bottom-left-text">
                                <router-link to="/aboutUs/3">
                                    <div :class="isActive === '/aboutUs/3' ? 'list-router-active' : ''">
                                        {{ $t('messages.bottomList[0][5]') }}
                                    </div>
                                </router-link>
                            </div>
                            <div class="col-12 text-nowrap bottom-text-gesture" id="bottom-left-text">
                                <router-link to="/feedBack" target="_blank">
                                    <div :class="isActive === '/feedBack' ? 'list-router-active' : ''">
                                        {{ $t('messages.bottomList[0][6]') }}
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="row gap-3">
                            <div class="col-12 text-nowrap fw-semibold bottom-text-gesture" id="bottom-left-title">
                                {{ $t('messages.bottomList[1][0]') }}
                            </div>
                            <div class="col-12 text-nowrap bottom-text-gesture" id="bottom-left-text">
                                <router-link to="/memberProblem">
                                    <div :class="isActive === '/memberProblem' ? 'list-router-active' : ''">
                                        {{ $t('messages.bottomList[1][1]') }}
                                    </div>
                                </router-link>
                            </div>
                            <div class="col-12 text-nowrap bottom-text-gesture" id="bottom-left-text">
                                <router-link to="/memberUse">
                                    <div :class="isActive === '/memberUse' ? 'list-router-active' : ''">
                                        {{ $t('messages.bottomList[1][2]') }}
                                    </div>
                                </router-link>
                            </div>
                            <!-- <div class="col-12 text-nowrap bottom-text-gesture" id="bottom-left-text">{{
                                $t('messages.bottomList[1][3]') }}
                            </div>
                            <div class="col-12 text-nowrap bottom-text-gesture" id="bottom-left-text">{{
                                $t('messages.bottomList[1][4]') }}
                            </div> -->
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="row gap-3">
                            <div class="col-12 text-nowrap fw-semibold bottom-text-gesture" id="bottom-left-title">
                                {{ $t('messages.bottomList[2][0]') }}
                            </div>
                            <div class="col-12 text-nowrap bottom-text-gesture" id="bottom-left-text">
                                <router-link to="/serviceProblem">
                                    <div :class="isActive === '/serviceProblem' ? 'list-router-active' : ''">
                                        {{ $t('messages.bottomList[2][1]') }}
                                    </div>
                                </router-link>
                            </div>
                            <div class="col-12 text-nowrap bottom-text-gesture" id="bottom-left-text">
                                <router-link to="/serviceUse">
                                    <div :class="isActive === '/serviceUse' ? 'list-router-active' : ''">
                                        {{ $t('messages.bottomList[2][2]') }}
                                    </div>
                                </router-link>
                            </div>
                            <!-- <div class="col-12 text-nowrap bottom-text-gesture" id="bottom-left-text">{{
                                $t('messages.bottomList[2][3]') }}
                            </div> -->
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="row gap-3">
                            <div class="col-12 text-nowrap fw-semibold bottom-text-gesture" id="bottom-left-title">
                                {{ $t('messages.bottomList[3][0]') }}
                            </div>
                            <div class="col-12 text-nowrap bottom-text-gesture" id="bottom-left-text">
                                <router-link to="/hotView">
                                    <div :class="isActive === '/hotView/list' ? 'list-router-active' : ''">
                                        {{ $t('messages.bottomList[3][1]') }}
                                    </div>
                                </router-link>
                            </div>
                            <!-- <div class="col-12 text-nowrap bottom-text-gesture" id="bottom-left-text">{{
                                $t('messages.bottomList[3][2]') }}
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-12 mt-4 mt-md-0">
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex justify-content-around">
                            <div class="position-relative common-mouse-box main-img-box">
                                <!-- 二维码图片 -->
                                <div
                                    class="position-absolute start-0 w-auto h-auto opacity-0 hover-opacity-100 transition-code">
                                    <img src="../assets/images/index/You Tube@2x.png" class="img-fluid" alt="二维码">
                                </div>
                                <a href="https://www.facebook.com/bonshou.hk" target="_blank">
                                    <img src="../assets/images/index/fb@2x.png" class="img-fluid common-img-box"
                                        style="object-fit: fill" alt="">
                                </a>
                            </div>
                            <div class="common-mouse-box">
                                <a href="https://www.youtube.com/@bonshou_hk" target="_blank">
                                    <img src="../assets/images/index/yutube@2x.png" class="common-img-box img-fluid"
                                        style="object-fit: fill" alt="">
                                </a>
                            </div>
                            <div class="common-mouse-box">
                                <a href="https://www.instagram.com/bonshou_hk" target="_blank">
                                    <img src="../assets/images/index/IG@2x.png" class="common-img-box img-fluid"
                                        style="object-fit: fill" alt="">
                                </a>
                            </div>
                            <div class="common-mouse-box">
                                <img src="../assets/images/index/email@2x.png" class="common-img-box img-fluid"
                                    style="object-fit: fill" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mt-5">
                        <img src="../assets/images/index/business_img@2x.png" class="img-fluid" style="height: 52px;"
                            alt="">
                    </div>
                    <div class="col-12 mt-4">
                        <img src="../assets/images/index/pay_img@2x.png" class="img-fluid" style="height: 109px;"
                            alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4" style="font-size: 14px;">{{ $t('messages.bottomList[4]') }}</div>
    </div>
</template>

<style scoped>
.common-img-box {
    width: 50px;
    height: 50px;
}

.common-mouse-box,
.bottom-text-gesture {
    cursor: pointer;
}

.hover-opacity-100 {
    top: -100%;
}

/* 鼠标移入时显示二维码 */
/* :has(.hover-opacity-100:hover): 选择的是包含某个子元素，且该子元素具有类名 .hover-opacity-100 并在当前被鼠标悬停（:hover）的父元素 */
.main-img-box:hover:not(:has(.hover-opacity-100:hover)) {
    .hover-opacity-100 {
        opacity: 1 !important;
    }
}

/* 过渡效果 */
.transition-code {
    transition: opacity 0.3s ease;
}

#bottom-left-text {
    font-size: 14px;

    a:hover {
        color: #FF9000;
    }
}

.list-router-active {
    color: #FF9000;
}

#bottom-left-title {
    font-size: 20px;
}

@media (min-width: 400px) {
    #bottom-left-title {
        font-size: 14px;
    }

    #bottom-left-text {
        font-size: 12px;
    }
}

@media (max-width: 400px) {
    #bottom-left-title {
        font-size: 12px;
    }

    #bottom-left-text {
        font-size: 10px;
    }
}
</style>

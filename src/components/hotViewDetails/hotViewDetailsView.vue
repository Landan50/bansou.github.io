<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { hotVidewData } from '@/utils/data.js';

const route = useRoute();
const imgRef = ref(null);
const activeIndex = ref(0);
const detailsData = ref(hotVidewData[route.params.page - 1].find(item => item.id === route.params.id));

onMounted(() => {
    if (route.params.id === "1005") {
        detailsData.value.title = "掀起本土文創新景象，兔兔插畫重塑香港本色";
    }
    detailsData.value.images.length > 0 && detailsData.value.images.unshift(detailsData.value.src)
    // if (imgRef.value.complete) {
    //     handleImageLoad();
    // } else {
    //     imgRef.value.addEventListener('load', handleImageLoad);
    // }
})

onUnmounted(() => {
    if (detailsData.value.images.length > 0) {
        detailsData.value.src = detailsData.value.images[0];
        detailsData.value.images.shift();
    }
    // imgRef.value?.removeEventListener('load', handleImageLoad);
})

function handleImageLoad() {
    // console.log('图片宽度:', imgRef.value.naturalWidth) // 原始宽度
    // console.log('图片高度:', imgRef.value.naturalHeight) // 原始高度
    // console.log('渲染宽度:', imgRef.value.offsetWidth)  // 显示宽度
    // console.log('渲染高度:', imgRef.value.offsetHeight) // 显示高度
    // imgRef.value.style.width = imgRef.value.naturalWidth / 2 + 'px';
    // imgRef.value.style.height = imgRef.value.naturalHeight / 2 + 'px';
    imgRef.value.style.width = 289 + 'px';
    imgRef.value.style.height = 356 + 'px';
}

//切换图片
const changeImg = (index, src) => {
    activeIndex.value = index;
    detailsData.value.src = src;
}

//向左移动切换图片
const moveLeft = () => {
    if (activeIndex.value <= 0) {
        return;
    }
    activeIndex.value--;
    detailsData.value.src = detailsData.value.images[activeIndex.value];
}

//向右移动切换图片
const moveRight = () => {
    if (activeIndex.value >= detailsData.value.images.length - 1) {
        return;
    }
    activeIndex.value++;
    detailsData.value.src = detailsData.value.images[activeIndex.value];
}
</script>

<template>
    <div class="hot-container-box">
        <div class="container hot-deatils-wrap">
            <div class="fw-bold fs-2 text-start">{{ detailsData.title }}</div>
            <div class="text-start d-flex align-items-center mt-2">
                <!-- <div class="common-font-style">2024-08-20 | 編輯：幫搜小姐姐 | 分享</div> -->
                <div class="common-font-style">{{ detailsData.date }}</div>
                <div class="d-flex align-items-center">
                    <div class="comon-img-box">
                        <img src="../../assets/images/index/fb@2x.png" alt="">
                    </div>
                    <div class="comon-img-box">
                        <img src="../../assets/images/index/yutube@2x.png" alt="">
                    </div>
                    <div class="comon-img-box">
                        <img src="../../assets/images/index/IG@2x.png" alt="">
                    </div>
                    <div class="comon-img-box">
                        <img src="../../assets/images/index/email@2x.png" alt="">
                    </div>
                </div>
            </div>
            <div class="hot-details-img mt-4 mb-3 d-flex align-items-center justify-content-center">
                <div class="hot-arrow-box" v-if="detailsData.images.length > 0" @click="moveLeft">
                    <img src="../../assets/images/hotView/leftIcon@2x.png" alt="">
                </div>
                <div class="details-img-container">
                    <img class="details-img-box" ref="imgRef" :src="detailsData.src" alt="">
                </div>
                <div class="hot-arrow-box" v-if="detailsData.images.length > 0" @click="moveRight">
                    <img src="../../assets/images/hotView/rightIcon@2x.png" alt="">
                </div>
            </div>
            <div class="more-details-img" v-if="detailsData.images.length > 0">
                <div :class="activeIndex === index ? 'more-img-box more-active-box' : 'more-img-box'"
                    v-for="(item, index) in detailsData.images" :key="index" @click="changeImg(index, item)">
                    <img :src="item" alt="">
                </div>
            </div>
            <div class="text-start common-font-style" v-html="detailsData.content"></div>
            <div class="details-tag-box" v-if="detailsData.tags.length > 0">
                <div class="tag-text-box">孕婦日常</div>
                <div class="tag-text-box">幫搜孕婦按摩服務</div>
                <div class="tag-text-box">孕婦</div>
                <div class="tag-text-box">孕婦按摩</div>
                <div class="tag-text-box">孕期保養</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.details-img-box {
    width: 289px;
    height: 356px;
}

.hot-container-box {
    border-top: 1px solid #C1C1C1;
}

.hot-deatils-wrap {
    padding: 43px 10% 0 10%;
    margin-bottom: 100px;

    .common-font-style {
        font-size: 14px;
    }

    .comon-img-box {
        width: 29.72px;
        height: 29.72px;
        margin-left: 14px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .details-img-container {
        margin: 0 4.5%;
    }

    .more-details-img {
        /* width: calc(100% - 440px); */
        max-width: calc(69px * 6 + 5 * 11px);
        margin: 0 auto 33px auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(69px, 1fr));
        gap: 11px;

        .more-img-box {
            cursor: pointer;
            position: relative;

            img {
                /* width: 100%; */
                width: 69px;
                height: 85px;
                object-fit: fill;
            }
        }


        .more-active-box {
            /* filter: grayscale(50%); */
            position: relative;
            filter:
                drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.5)) brightness(0.8);
            /* 降低亮度形成遮罩 */
        }
    }

    .hot-arrow-box {
        cursor: pointer;

        img {
            width: 30px;
            height: 30px;
        }
    }

    .details-tag-box {
        display: flex;
        align-items: center;
        justify-content: start;
        margin-top: 10%;

        .tag-text-box {
            color: #666666;
            border-radius: 6px;
            border: 1px solid #666666;
            padding: 3px 21px;
        }

        .tag-text-box:not(:last-child) {
            margin-right: 9px;
        }
    }
}
</style>
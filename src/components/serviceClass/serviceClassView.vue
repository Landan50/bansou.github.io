<script setup>
import { ref, onMounted, onUnmounted, defineAsyncComponent } from 'vue';
import { classData } from '@/utils/data.js';

const HeaderComponent = defineAsyncComponent(() =>
    import('@/pages/header.vue')
);

const BottomComponent = defineAsyncComponent(() =>
    import('@/pages/bottom.vue')
);
</script>

<template>
    <div>
        <HeaderComponent />
    </div>

    <div class="container-fluid mb-5 pe-0 ps-0">
        <div class="service-header-box">
            <div class="service-text-box">
                <div class="header-text1 mb-2">{{ $t('messages.serviceClassHeader[0]') }}</div>
                <div class="header-text2 mb-1">{{ $t('messages.serviceClassHeader[1]') }}</div>
                <div class="header-text2">{{ $t('messages.serviceClassHeader[2]') }}</div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="service-class-wrap d-flex align-items-center justify-content-between me-auto ms-auto">
            <div class="service-class-for d-flex align-items-center mb-3" v-for="(item1,index1) in classData" :key="item1.id">
                <div class="data-left-box">
                    <div>
                        <img :src="item1.url" alt="" class="img-fluid">
                    </div>
                    <div class="text">{{ $t(`messages.serviceClassList[${index1}].title`) }}</div>
                </div>
                <div class="data-right-box text-start">
                    <div v-for="(item2,index2) in item1.contentLength" :key="index2">
                        {{ $t(`messages.serviceClassList[${index1}].content[${index2}]`) }}
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
.service-header-box {
    width: 100%;
    background-size: cover;
    background-position: center;
    /* 居中显示，避免裁剪重要部分 */
    background-repeat: no-repeat;
    /* 防止重复 */
    height: 490px;
    background-image: url('../../assets/images/index/serviceClassBanner.png');
    position: relative;

    .service-text-box {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        top: 50%;
        white-space: nowrap;
        color: #FEFEFE;

        .header-text1 {
            font-size: 48px;
            font-weight: 800;
        }

        .header-text2 {
            font-size: 23px;
        }
    }
}

.service-class-wrap {
    width: 1214px;
    margin-bottom: 100px;
    flex-wrap: wrap;
    .service-class-for {
        width: 49%;
        height: 265px;
        box-shadow: 0 0px 8px 0px rgba(0, 0, 0, 0.2);
        border-radius: 6px;
        padding: 0 10px;

        .data-left-box {
            text {
                font-weight: bold;
                font-size: 20px;
                color: #666666;
            }
        }

        .data-right-box {
            line-height: 1.6em;
            color: #666666;
            margin: 0 0 0 24px;
        }
    }
}

@media (min-width: 900px) and (max-width: 1200px) {
    .service-text-box {

        .header-text1 {
            font-size: 36px !important;
        }

        .header-text2 {
            font-size: 16px !important;
        }
    }
}

@media (max-width: 899px) {
    .service-text-box {

        .header-text1 {
            font-size: 32px !important;
        }

        .header-text2 {
            font-size: 12px !important;
        }
    }
}
</style>
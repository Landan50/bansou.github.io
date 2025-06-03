<script setup>
import { ref, onMounted, onUnmounted, defineAsyncComponent } from 'vue';

const HeaderComponent = defineAsyncComponent(() =>
    import('@/pages/header.vue')
);

const BottomComponent = defineAsyncComponent(() =>
    import('@/pages/bottom.vue')
);

const collapseComponent = defineAsyncComponent(() =>
    import('@/pages/collapse.vue')
);

const titleList = ref([
    {
        titleName: "messages.sProblemTitles[0]",
        id: 201,
        num: 3
    },
    {
        titleName: "messages.sProblemTitles[1]",
        id: 202,
        num: 7
    },
    {
        titleName: "messages.sProblemTitles[2]",
        id: 203,
        num: 4
    },
    {
        titleName: "messages.sProblemTitles[3]",
        id: 204,
        num: 4
    },
    {
        titleName: "messages.sProblemTitles[4]",
        id: 205,
        num: 4
    },
    {
        titleName: "messages.sProblemTitles[5]",
        id: 206,
        num: 6
    },
    {
        titleName: "messages.sProblemTitles[6]",
        id: 207,
        num: 7
    },
    {
        titleName: "messages.sProblemTitles[7]",
        id: 208,
        num: 6
    },
    {
        titleName: "messages.sProblemTitles[8]",
        id: 209,
        num: 1
    }
])

const contentList = ref([
    {
        id: 2001,
        type: "sProblemContents[0]"
    },
    {
        id: 2002,
        type: "sProblemContents[0]"
    },
    {
        id: 2003,
        type: "sProblemContents[0]"
    }
])
const type = ref("sProblemContents")
</script>

<template>
    <div>
        <HeaderComponent />
    </div>

    <div class="container-fluid mb-4 pe-0 ps-0">
        <div class="service-header-box">
            <div class="service-text-box">
                <div class="header-text1 mb-2">{{ $t('messages.sProblemHeaders[0]') }}</div>
                <div class="header-text2">{{ $t('messages.sProblemHeaders[1]') }}</div>
            </div>
        </div>
    </div>

    <div class="container service-problem-wrap">
        <collapseComponent :contentList="contentList" :titleList="titleList" :type="type">
        </collapseComponent>
    </div>

    <div>
        <BottomComponent />
    </div>
</template>

<style scoped>
.service-problem-wrap {
    margin-bottom: 128px;
}

.service-header-box {
    width: 100%;
    background-size: cover;
    background-position: center;
    /* 居中显示，避免裁剪重要部分 */
    background-repeat: no-repeat;
    /* 防止重复 */
    height: 464px;
    background-image: url('../../assets/images/service/serviceBanner@2x.png');
    position: relative;

    .service-text-box {
        position: absolute;
        left: 50%;
        transform: translate(-95%, -50%);
        top: 50%;
        white-space: nowrap;

        .header-text1 {
            font-size: 48px;
            font-weight: 800;
        }

        .header-text2 {
            font-size: 23px;
        }
    }
}

@media (max-width: 1200px) {
    .service-header-box {
        .service-text-box {

            .header-text1 {
                font-size: 32px;
            }

            .header-text2 {
                font-size: 16px;
            }
        }
    }
}

@media (max-width: 800px) {
    .service-header-box {
        .service-text-box {
            transform: translate(-75%, -50%);
        }
    }
}
</style>
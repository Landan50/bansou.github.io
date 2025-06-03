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
        titleName: "messages.mProblemTitles[0]",
        id: 101,
        num: 4
    },
    {
        titleName: "messages.mProblemTitles[1]",
        id: 102,
        num: 17
    },
    {
        titleName: "messages.mProblemTitles[2]",
        id: 103,
        num: 5
    },
    {
        titleName: "messages.mProblemTitles[3]",
        id: 104,
        num: 8
    },
    {
        titleName: "messages.mProblemTitles[4]",
        id: 105,
        num: 9
    },
    {
        titleName: "messages.mProblemTitles[5]",
        id: 106,
        num: 2
    },
    {
        titleName: "messages.mProblemTitles[6]",
        id: 107,
        num: 6
    },
    {
        titleName: "messages.mProblemTitles[7]",
        id: 108,
        num: 5
    }
])

const contentList = ref([
    {
        id: 1001,
        type: "mProblemContents[0]"
    },
    {
        id: 1002,
        type: "mProblemContents[0]"
    },
    {
        id: 1003,
        type: "mProblemContents[0]"
    },
    {
        id: 1004,
        type: "mProblemContents[0]"
    }
])
const type = ref("mProblemContents")
</script>

<template>
    <div>
        <HeaderComponent />
    </div>

    <div class="container-fluid mb-4 pe-0 ps-0">
        <div class="member-header-box">
            <div class="member-text-box">
                <div class="header-text1 mb-2">{{ $t('messages.mProblemHeaders[0]') }}</div>
                <div class="header-text2">{{ $t('messages.mProblemHeaders[1]') }}</div>
            </div>
        </div>
    </div>

    <div class="container member-problem-wrap">
        <collapseComponent :titleList="titleList" :type="type" :contentList="contentList">
        </collapseComponent>
    </div>

    <div>
        <BottomComponent />
    </div>
</template>

<style scoped>
.member-problem-wrap {
    margin-bottom: 88px;
}

.member-header-box {
    width: 100%;
    background-size: cover;
    background-position: center;
    /* 居中显示，避免裁剪重要部分 */
    background-repeat: no-repeat;
    /* 防止重复 */
    height: 464px;
    background-image: url('../../assets/images/member/memberBanner@2x.png');
    position: relative;

    .member-text-box {
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
    .member-header-box {
        .member-text-box {

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
    .member-header-box {
        .member-text-box {
            transform: translate(-75%, -50%);
        }
    }
}
</style>
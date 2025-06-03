<script setup>
import { ref, onMounted, onUnmounted, defineAsyncComponent } from 'vue';

const HeaderComponent = defineAsyncComponent(() =>
    import('@/pages/header.vue')
);

const BottomComponent = defineAsyncComponent(() =>
    import('@/pages/bottom.vue')
);

const playerVars = {
    autoplay: 0,
    controls: 1
}

const videoList = ref([
    {
        id: "6vjiA_LwELM",
        src: "https://www.youtube.com/watch?v=6vjiA_LwELM",
        showPlayer: true,
        title: "messages.mUseTitles[0]",
        content: "messages.mUseContents[0]"
    },
    {
        id: "0UvNOdQIyMQ",
        src: "https://www.youtube.com/watch?v=0UvNOdQIyMQ",
        showPlayer: false,
        title: "messages.mUseTitles[1]",
        content: "messages.mUseContents[1]"
    },
    {
        id: "VY8RZgE8Vfo",
        src: "https://www.youtube.com/watch?v=VY8RZgE8Vfo",
        showPlayer: false,
        title: "messages.mUseTitles[2]",
        content: "messages.mUseContents[2]"
    },
    {
        id: "vsKDptYGQTE",
        src: "https://www.youtube.com/watch?v=vsKDptYGQTE",
        showPlayer: false,
        title: "messages.mUseTitles[3]",
        content: "messages.mUseContents[3]"
    }
])

const onPlayerReady = (index) => {
    if (index <= videoList.value.length - 1) {
        videoList.value[index].showPlayer = true
    }
}
</script>

<template>
    <div>
        <HeaderComponent />
    </div>

    <div class="container-fluid mb-4 pe-0 ps-0">
        <div class="member-use-wrap">
            <div class="member-use-box">
                <div class="header-text1 mb-2">{{ $t('messages.mUseHeaders[0]') }}</div>
                <div class="header-text2">{{ $t('messages.mUseHeaders[1]') }}</div>
            </div>
        </div>
    </div>

    <div class="container d-flex align-items justify-content-around flex-wrap member-video-wrap">
        <div class="youtube-container" v-for="(item, index) in videoList" :key="item.id">
            <div class="youtube-video-box">
                <YouTube :src="item.src" v-if="item.showPlayer" width="543" height="306" :player-vars="playerVars"
                    @ready="onPlayerReady(index + 1)" />
            </div>
            <div class="text-start fw-bold youtube-video-title mt-2 mb-2" v-html="$t(`${item.title}`)"></div>
            <div class="text-start youtube-video-content" v-html="$t(`${item.content}`)"></div>
        </div>
    </div>

    <div class="container member-introduce-wrap d-flex align-items-center justify-content-around">
        <div class="member-introduce-left">
            <img src="../../assets/images/member/js@2x.png" alt="">
        </div>
        <div class="mrmber-introduce-right">
            <div class="introduce-title-box fw-bold">{{ $t('messages.mIntroduces[0]') }}</div>
            <div class="fw-bold common-content-box">{{ $t('messages.mIntroduces[1]') }}</div>
            <div class="fw-bold common-content-box">{{ $t('messages.mIntroduces[2]') }}</div>
            <div class="fw-bold common-content-box">{{ $t('messages.mIntroduces[3]') }}</div>
        </div>
    </div>

    <div>
        <BottomComponent />
    </div>
</template>

<style scoped>
.member-use-wrap {
    width: 100%;
    background-size: cover;
    background-position: center;
    /* 居中显示，避免裁剪重要部分 */
    background-repeat: no-repeat;
    /* 防止重复 */
    height: 464px;
    background-image: url('../../assets/images/member/memberUseBanner@2x.png');
    position: relative;

    .member-use-box {
        position: absolute;
        left: 50%;
        transform: translate(-100%, -80%);
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

.member-introduce-wrap {
    margin-bottom: 100px;

    .member-introduce-left {
        width: 437px;
        height: 553px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .mrmber-introduce-right {
        .introduce-title-box {
            font-size: 24px;
            position: relative;
            z-index: 2;
        }

        .introduce-title-box::after {
            position: absolute;
            content: "";
            width: 256px;
            height: 12px;
            background: #FEB250;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            z-index: -1;
        }

        .common-content-box {
            color: #666666;
            font-size: 16px;
            margin-top: 16px;
        }
    }
}

.member-video-wrap {
    margin: 50px auto 110px auto;
}

.youtube-container {
    display: flex;
    flex-direction: column;
    align-items: start;

    .youtube-video-title {
        font-size: 20px;
    }

    .youtube-video-content {
        color: #666666;
        line-height: 1.6em;
    }
}

.youtube-container:nth-child(n+3) {
    margin-top: 97px;
}

@media (max-width: 1200px) {
    .member-use-wrap {
        .member-use-box {

            .header-text1 {
                font-size: 32px;
            }

            .header-text2 {
                font-size: 16px;
            }
        }
    }
}

@media (max-width: 900px) {
    .member-use-wrap {
        .member-use-box {
            transform: translate(-80%, -80%);
        }
    }
}
</style>
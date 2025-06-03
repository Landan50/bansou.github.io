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
        id: "huk19pG4xQ",
        src: "https://www.youtube.com/watch?v=-huk19pG4xQ",
        showPlayer: true,
        title: "messages.sUseTitles[0]",
        content: "messages.sUseContents[0]"
    },
    {
        id: "KQouIHRFW-I",
        src: "https://www.youtube.com/watch?v=KQouIHRFW-I",
        showPlayer: false,
        title: "messages.sUseTitles[1]",
        content: "messages.sUseContents[1]"
    },
    {
        id: "oZWqVBMLaEU",
        src: "https://www.youtube.com/watch?v=oZWqVBMLaEU",
        showPlayer: false,
        title: "messages.sUseTitles[2]",
        content: "messages.sUseContents[2]"
    },
    {
        id: "ZzzVT4Yc9I8",
        src: "https://www.youtube.com/watch?v=ZzzVT4Yc9I8",
        showPlayer: false,
        title: "messages.sUseTitles[3]",
        content: "messages.sUseContents[3]"
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
        <div class="service-use-wrap">
            <div class="service-use-box">
                <div class="header-text1 mb-2">{{ $t('messages.sUseHeaders[0]') }}</div>
                <div class="header-text2">{{ $t('messages.sUseHeaders[1]') }}</div>
            </div>
        </div>
    </div>

    <div class="container d-flex align-items justify-content-around flex-wrap service-video-wrap">
        <div class="youtube-container" v-for="(item, index) in videoList" :key="item.id">
            <div class="youtube-video-box">
                <YouTube :src="item.src" v-if="item.showPlayer" width="543" height="306" :player-vars="playerVars"
                    @ready="onPlayerReady(index + 1)" />
            </div>
            <div class="text-start fw-bold youtube-video-title mt-2 mb-2" v-html="$t(`${item.title}`)"></div>
            <div class="text-start youtube-video-content">{{ $t(`${item.content}`) }}</div>
        </div>
    </div>

    <div>
        <BottomComponent />
    </div>
</template>

<style scoped>
.service-use-wrap {
    width: 100%;
    background-size: cover;
    background-position: center;
    /* 居中显示，避免裁剪重要部分 */
    background-repeat: no-repeat;
    /* 防止重复 */
    height: 464px;
    background-image: url('../../assets/images/service/serviceUseBanner@2x.png');
    position: relative;

    .service-use-box {
        position: absolute;
        left: 50%;
        transform: translate(-113%, -80%);
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

.service-video-wrap {
    margin-bottom: 114px;
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
    .service-use-wrap {
        .service-use-box {

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
    .service-use-wrap {
        .service-use-box {
            transform: translate(-80%, -80%);
        }
    }
}
</style>
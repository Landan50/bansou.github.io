<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { createResizeObserverManager } from '@/utils/useResizeObserver';
import { hotVidewData } from '@/utils/data.js';
import { useRouter } from 'vue-router';
const router = useRouter();

const headerIndex = ref(0);
const resizeManager = createResizeObserverManager();
const newHotViewData = ref(hotVidewData[0]);
const paginationIndex = ref(1);

//监听屏幕尺寸变化
const getGridEnd = () => {
    const lists = document.querySelectorAll('.article-list-box');
    resizeManager.observeElements(lists, handleResize);
}

//设置grid的分隔
const handleResize = (entries) => {
    entries.forEach(entry => {
        const row = Math.ceil(entry.contentRect.height / 10) + 2;
        entry.target.style.gridRowEnd = `span ${row}`;
    });
};

//头部选项切换
const changIndex = (index) => {
    headerIndex.value = index
}

onMounted(() => {
    // console.log(hotVidewData);
    
    nextTick(() => {
        getGridEnd();
    })
})

onUnmounted(() => {
    // 组件卸载时取消所有监听
    resizeManager.unobserveAll();
})

//点击跳转
const toDetails = (id,index) => {
    router.push({ name: 'details', params: { id: id,page: paginationIndex.value,arrIndex: index } });
}
</script>

<template>
    <div class="container-fluid mb-4 pe-0 ps-0">
        <div class="hot-view-wrap">
            <div class="hot-view-box">
                <div class="header-text1 mb-2">HotView 文章</div>
                <div class="header-text2">{{ $t('messages.hotViewTitle') }}</div>
            </div>
        </div>
    </div>

    <div class="container hot-view-container">
        <div class="hot-view-header">
            <div class="view-header-box text-nowrap" @click="changIndex(0)">
                <span>HotView 文章</span>
                <div v-if="headerIndex === 0" class="header-active-line"></div>
                <div v-if="headerIndex === 0" class="header-active-triangle"></div>
            </div>
            <div class="view-header-box text-nowrap" @click="changIndex(1)">
                <span>{{ $t('messages.gotViewNavs[0]') }}</span>
                <div v-if="headerIndex === 1" class="header-active-line"></div>
                <div v-if="headerIndex === 1" class="header-active-triangle"></div>
            </div>
            <div class="view-header-box text-nowrap" @click="changIndex(2)">
                <span>HOME 家居</span>
                <div v-if="headerIndex === 2" class="header-active-line"></div>
                <div v-if="headerIndex === 2" class="header-active-triangle"></div>
            </div>
            <div class="view-header-box text-nowrap" @click="changIndex(3)">
                <span>BABY & KIDS</span>
                <div v-if="headerIndex === 3" class="header-active-line"></div>
                <div v-if="headerIndex === 3" class="header-active-triangle"></div>
            </div>
            <div class="view-header-box text-nowrap" @click="changIndex(4)">
                <span>WEDDING 新婚</span>
                <div v-if="headerIndex === 4" class="header-active-line"></div>
                <div v-if="headerIndex === 4" class="header-active-triangle"></div>
            </div>
            <div class="view-header-box text-nowrap" @click="changIndex(5)">
                <span>{{ $t('messages.gotViewNavs[1]') }}</span>
                <div v-if="headerIndex === 5" class="header-active-line"></div>
                <div v-if="headerIndex === 5" class="header-active-triangle"></div>
            </div>
            <div class="view-header-box text-nowrap" @click="changIndex(6)">
                <span>{{ $t('messages.gotViewNavs[2]') }}</span>
                <div v-if="headerIndex === 6" class="header-active-line"></div>
                <div v-if="headerIndex === 6" class="header-active-triangle"></div>
            </div>
            <div class="view-header-box text-nowrap" @click="changIndex(7)">
                <span>WELLNESS健康</span>
                <div v-if="headerIndex === 7" class="header-active-line"></div>
                <div v-if="headerIndex === 7" class="header-active-triangle"></div>
            </div>
            <div class="view-header-box text-nowrap" @click="changIndex(8)">
                <span>移民生活</span>
                <div v-if="headerIndex === 8" class="header-active-line"></div>
                <div v-if="headerIndex === 8" class="header-active-triangle"></div>
            </div>
        </div>

        <div class="hot-view-input">
            <form role="search" id="form-box">
                <div class="input-group position-relative">
                    <input class="form-control no-focus-border" type="text" :placeholder="$t('messages.hotViewPlaceholder')"
                        aria-label="Search">
                    <span class="position-absolute top-50 end-0 translate-middle-y me-2">
                        <i class="bi bi-search"></i>
                    </span>
                </div>
            </form>
        </div>

        <div class="hot-article-container mt-5 mb-4">
            <div class="article-list-box" v-for="(item, index) in newHotViewData" :key="item.id" @click="toDetails(item.id,index)">
                <div class="article-img-box">
                    <img :src="item.src" alt="">
                </div>
                <div class="article-title-box text-start" v-text="$t(`messages.hotViewList[${paginationIndex-1}][${index}].title`)"></div>
            </div>
        </div>

        <nav aria-label="...">
            <ul class="pagination justify-content-center pagination-tool-wrap">
                <li class="page-item">
                    <span class="page-link">上一页</span>
                </li>
                <li class="page-item" v-for="(item, index) in hotVidewData" :key="item.id"><span
                        :class="paginationIndex === (index + 1) ? 'active page-link' : 'page-link'">{{
                            index + 1 }}</span></li>
                <li class="page-item">
                    <span class="page-link">下一页</span>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.hot-view-wrap {
    width: 100%;
    background-size: cover;
    background-position: center;
    /* 居中显示，避免裁剪重要部分 */
    background-repeat: no-repeat;
    /* 防止重复 */
    height: 464px;
    background-image: url('../../assets/images/hotView/hotViewBanner@2x.png');
    position: relative;

    .hot-view-box {
        position: absolute;
        left: 50%;
        transform: translate(-103%, -80%);
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

.hot-view-container {
    margin-bottom: 95px;
}

.hot-view-header {
    width: 1120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    position: relative;

    .view-header-box {
        position: relative;
        cursor: pointer;

        span {
            font-size: 18px;
        }
    }
}

.header-active-line {
    width: 100%;
    height: 4px;
    background: #FEB250;
    position: absolute;
    left: 0;
    bottom: -13px;
    z-index: 2;
}

.header-active-triangle {
    position: absolute;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 10px solid #FEB250;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
}

.hot-view-header::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background: #E8E8E8;
    left: 0;
    bottom: -12px;
    z-index: 1;
}

.hot-article-container {
    display: grid;
    gap: 10px;
    column-gap: 15px;
    grid-template-columns: repeat(4, 1fr);
    align-items: start;
    justify-content: space-between;

    .article-list-box {
        cursor: pointer;

        .article-img-box {
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .article-title-box {
            margin-top: 16px;
            line-height: 1.6em;
            font-size: 18px;
            color: #999999;
        }
    }
}

.pagination-tool-wrap {
    .page-item {
        cursor: pointer;

        .page-link {
            color: #333333;
            font-size: 18px;
            border-radius: 6px;
            overflow: hidden;
            border-color: #666666;
        }
    }

    .page-item:not(:last-child) {
        margin-right: 9px;
    }

    .page-item .page-link.active {
        background: #FEBB5B;
        border-color: #666666;
    }
}

.hot-view-input {
    margin: 40px auto 0 auto;
    width: 726px;

    .no-focus-border:focus {
        box-shadow: none !important;
        border-color: #ced4da !important;
        /* 保持默认边框颜色 */
        outline: none !important;
    }

    .bi-search {
        pointer-events: none;
        /* 防止图标拦截点击事件 */
    }

    /* 输入框 */
    .input-group {
        border-radius: 6px;
        overflow: hidden;
    }
}
</style>
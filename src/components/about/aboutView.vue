<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue';
import { defineAsyncComponent } from 'vue';

const HeaderComponent = defineAsyncComponent(() =>
    import('@/pages/header.vue')
);

const BottomComponent = defineAsyncComponent(() =>
    import('@/pages/bottom.vue')
);

const pdfSource = ref("/PDF/member_ft.pdf");
const renderKey = ref(0);
let resizeObserver = null;
const pdfContainer = ref(null);
const activeIndex = ref(0);
const pdfTitle = ref("");
const pdfList = reactive(["member_ft", "member_zh", "member_en", "service_ft", "service_zh", "service_en", "privacy_ft", "privacy_zh", "privacy_en"]);

const forceRerender = () => {
    renderKey.value += 1;
}

onMounted(() => {
    resizeObserver = new ResizeObserver(() => {
        forceRerender();
    })
    if (pdfContainer.value) {
        resizeObserver.observe(pdfContainer.value);
    }

    clickShowPdf(0,"會員使用條款 (繁體中文)");
})

onUnmounted(() => {
    if (resizeObserver && pdfContainer.value) {
        resizeObserver.unobserve(pdfContainer.value);
    }
})

const clickShowPdf = (value, title) => {
    // const module = await import(`./assets/pdf/${pdfList[value]}`);
    // console.log(module);
    
    // const url = new URL(`./assets/pdf/${pdfList[value]}`,import.meta.url);
    // console.log(url);
    
    //静态资源动态引入
    import(`@/assets/pdf/${pdfList[value]}.pdf`).then((path) => {
        activeIndex.value = value;
        pdfTitle.value = title;
        
        pdfSource.value = path.default;
        forceRerender();
    })
}
</script>

<template>
    <div>
        <HeaderComponent />
    </div>

    <div class="container mt-4 pdf-container-wrap" style="height: 740px;">
        <div class="row h-100">
            <div class="col-5 ps-2 container-left-wrap col-md-2 h-100 border border-1" style="background: #F8F8F8; border-radius: 8px;">
                <div class="d-flex flex-column align-items-start justify-content-start">
                    <div class="mt-4 pe-2">
                        <div class="nav-list-wrap d-flex align-items-center ps-2">
                            <img src="../../assets/images/about/hyicon@2x.png" class="me-2 nav-list-icon" alt="">
                            <span class="align-middle nav-list-title">會員 (Member)</span>
                        </div>
                        <div :class="activeIndex === 0 ? 'text-start nav-list-text mt-3 active-text' : 'text-start nav-list-text mt-3'"
                            @click="clickShowPdf(0, '會員使用條款 (繁體中文)')">▪ 會員使用條款 (繁體中文)</div>
                        <div :class="activeIndex === 1 ? 'text-start nav-list-text mt-3 active-text' : 'text-start nav-list-text mt-3'"
                            @click="clickShowPdf(1, '会员使用条款 (簡体中文)')">▪ 会员使用条款 (簡体中文)</div>
                        <div :class="activeIndex === 2 ? 'text-start nav-list-text mt-3 active-text' : 'text-start nav-list-text mt-3'"
                            @click="clickShowPdf(2, 'Member Terms of Use(English)')">▪ Member Terms of Use (English)</div>
                    </div>
                    <div class="mt-4 pe-2">
                        <div class="nav-list-wrap d-flex align-items-center flex-nowrap ps-2">
                            <img src="../../assets/images/about/fwsicon@2x.png" class="me-2 nav-list-icon" alt="">
                            <span class="align-middle nav-list-title">服務商 (Provider)</span>
                        </div>
                        <div :class="activeIndex === 3 ? 'text-start nav-list-text mt-3 active-text' : 'text-start nav-list-text mt-3'"
                            @click="clickShowPdf(3, '服務商使用條款 (繁體中文)')">▪ 服務商使用條款 (繁體中文)</div>
                        <div :class="activeIndex === 4 ? 'text-start nav-list-text mt-3 active-text' : 'text-start nav-list-text mt-3'"
                            @click="clickShowPdf(4, '服务商使用条款 (簡体中文)')">▪ 服务商使用条款 (簡体中文)</div>
                        <div :class="activeIndex === 5 ? 'text-start nav-list-text mt-3 active-text' : 'text-start nav-list-text mt-3'"
                            @click="clickShowPdf(5, '▪Provider Terms of Use(English)')">▪ Provider Terms of Use (English)
                        </div>
                    </div>
                    <div class="mt-4 pe-2">
                        <div class="nav-list-wrap text-start nav-list-title ps-2">隱私政策聲明</div>
                        <div :class="activeIndex === 6 ? 'text-start nav-list-text mt-3 active-text' : 'text-start nav-list-text mt-3'"
                            @click="clickShowPdf(6, '私隱政策聲明 (繁體中文)')">▪ 隱私政策聲明 (繁體中文)</div>
                        <div :class="activeIndex === 7 ? 'text-start nav-list-text mt-3 active-text' : 'text-start nav-list-text mt-3'"
                            @click="clickShowPdf(7, '隐私政策声明 (簡体中文)')">▪ 隐私政策声明 (簡体中文)</div>
                        <div :class="activeIndex === 8 ? 'text-start nav-list-text mt-3 active-text' : 'text-start nav-list-text mt-3'"
                            @click="clickShowPdf(8, 'Personal Data Collection Statement(English)')">▪ Personal Data
                            Collection Statement(English)</div>
                    </div>
                </div>
            </div>
            <div class="col-7 col-md-10 h-100">
                <div class="card h-100">
                    <div class="card-header text-start">
                        {{ pdfTitle }}
                    </div>
                    <div class="card-body" ref="pdfContainer">
                        <vue-pdf-embed :source="pdfSource" :key="renderKey" />
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
.container-left-wrap {
    padding-right: 0 !important;
}

.card-body {
    flex: 1;
    /* 占据剩余空间 */
    overflow-y: auto;
    /* height: 695px; */
    border: none !important;
}

.nav-list-wrap {
    border-bottom: 1px solid #999999;
    padding-bottom: .8em;
}

.nav-list-icon {
    width: 20px;
    height: 20px;
}

.nav-list-text {
    font-size: 14px;
    cursor: pointer;
}

.active-text {
    color: #FEB250;
}

.card-body {
    padding: 0 !important;
}

.pdf-container-wrap {
    margin-bottom: 5%;
}

@media (max-width: 430px) {
    .pdf-container-wrap {
        margin-bottom: 20%;
    }
}

@media (max-width: 1200px) {
    .nav-list-text {
        font-size: 10px;
    }

    .nav-list-title {
        font-size: 12px;
    }

    .nav-list-icon {
        width: 10px;
        height: 10px;
    }
}

@media (min-width: 430px) and (max-width: 1200px) {
    .pdf-container-wrap {
        margin-bottom: 8%;
    }
}
</style>

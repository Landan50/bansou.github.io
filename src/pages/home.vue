<script setup>
import { RouterLink } from 'vue-router';
import { useI18nTools } from '../tools/i18nTools';
import { RouterView } from 'vue-router';

const { locale } = useI18nTools();
// const pageIndex = ref(0);

const changeLang = (type) => {
    localStorage.setItem('lang', type);
    locale.value = type;
}

</script>

<template>
    <!-- 查询参数 (Query) 不需要在路由里面进行相应的配置 -->
    <!-- <router-link :to="{ path: '/detail', query: { id: 123 } }">详情页</router-link> -->
    <!-- 或拼接字符串 -->
    <!-- <router-link to="/detail?id=123">详情页</router-link> -->

    <!-- 动态路由参数 (Params) -->
    <!-- <router-link :to="{ name: 'Detail', params: { id: 123 } }">详情页</router-link> -->
    <!-- 或直接拼接路径 -->
    <!-- <router-link to="/detail/123">详情页</router-link> -->

    <!-- <RouterLink :to="{name:'hello', params:{id: 1, title: '你好'}}" active-class="page-router-active">跳转到Hello页面</RouterLink> -->
    <!-- <RouterLink to="/hello" active-class="page-router-active">跳转到Hello页面</RouterLink> -->
    <!-- sticky-top控制滚动到导航底部就可以固定在顶部 -->

    <!-- 一级导航栏 -->
    <nav class="navbar navbar-expand-lg" id="navbar-header-box" style="background-color: #FEB250;">
        <div class="container-fluid justify-content-lg-around">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <img src="../assets/images/index/logo@2x.png" class="img-fluid" id="header-left-icon">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent1">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                    <li class="nav-item px-lg-2 py-md-1">
                        <img src="../assets/images/index/member@2x.png" class="img-fluid " alt=""
                            id="header-right-icon">
                        <span class="text align-middle">{{ $t('messages.headerSelect["member"]') }}</span>
                    </li>
                    <li class="nav-item px-lg-2 py-md-1">
                        <img src="../assets/images/index/ServiceProvider@2x.png" class="img-fluid" alt=""
                            id="header-right-icon">
                        <span class="text align-middle">{{ $t('messages.headerSelect["service"]') }}</span>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <img src="../assets/images/index/ServiceProvider@2x.png" class="img-fluid" alt=""
                                id="header-right-icon">
                            <span class="text align-middle">{{ $t('messages.headerSelect["selectTitle"]') }}</span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" @click="changeLang('ft')">繁體中文</a></li>
                            <li><a class="dropdown-item" href="#" @click="changeLang('zh')">简体中文</a></li>
                            <!-- <li>
                                <hr class="dropdown-divider">
                            </li> -->
                            <!-- <li><a class="dropdown-item" href="#">英文</a></li> -->
                        </ul>
                    </li>
                    <li class="nav-item ms-lg-3 mb-2 mb-lg-0" id="button-box" style="background-color: white;">
                        <span class="button-text">{{ $t('messages.headerSelect["register"]') }}</span>
                    </li>
                    <li class="nav-item ms-lg-3" id="button-box" style="background-color: white;">
                        <span class="button-text">{{ $t('messages.headerSelect["login"]') }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- 二级导航栏 -->
    <nav class="navbar navbar-expand-lg" id="select-header-box">
        <div class="container-fluid justify-content-lg-around">
            <div class="d-lg-none"></div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent2">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                    <li class="nav-item dropdown mx-lg-3">
                        <a class="nav-link dropdown-toggle no-caret border-bottom border-transparent hover-border-primary"
                            href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {{ $t('messages.subHeaderSelect[0]["title"]') }}
                        </a>
                        <ul class="dropdown-menu dropdown-menu-center">
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[0]["select"][0]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[0]["select"][1]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[0]["select"][2]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[0]["select"][3]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[0]["select"][4]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[0]["select"][5]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[0]["select"][6]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[0]["select"][7]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[0]["select"][8]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[0]["select"][9]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[0]["select"][10]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[0]["select"][11]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[0]["select"][12]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[0]["select"][13]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[0]["select"][14]')
                            }}</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown mx-lg-3">
                        <a class="nav-link dropdown-toggle no-caret border-bottom border-transparent hover-border-primary"
                            href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {{ $t('messages.subHeaderSelect[1]["title"]') }}
                        </a>
                        <ul class="dropdown-menu dropdown-menu-center">
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[1]["select"][0]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[1]["select"][1]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[1]["select"][2]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[1]["select"][3]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[1]["select"][4]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[1]["select"][5]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[1]["select"][6]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[1]["select"][7]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[1]["select"][8]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[1]["select"][9]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[1]["select"][10]')
                            }}</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown mx-lg-3">
                        <a class="nav-link dropdown-toggle no-caret border-bottom border-transparent hover-border-primary"
                            href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {{ $t('messages.subHeaderSelect[2]["title"]') }}
                        </a>
                        <ul class="dropdown-menu dropdown-menu-center">
                            <li><a class="dropdown-item" href="#">
                                    {{ $t('messages.subHeaderSelect[2]["select"][0]') }}</a></li>
                            <li><a class="dropdown-item" href="#">
                                    {{ $t('messages.subHeaderSelect[2]["select"][1]') }}</a></li>
                            <li><a class="dropdown-item" href="#">
                                    {{ $t('messages.subHeaderSelect[2]["select"][2]') }}</a></li>
                            <li><a class="dropdown-item" href="#">
                                    {{ $t('messages.subHeaderSelect[2]["select"][3]') }}</a></li>
                            <li><a class="dropdown-item" href="#">
                                    {{ $t('messages.subHeaderSelect[2]["select"][4]') }}</a></li>
                            <li><a class="dropdown-item" href="#">
                                    {{ $t('messages.subHeaderSelect[2]["select"][5]') }}</a></li>
                            <li><a class="dropdown-item" href="#">
                                    {{ $t('messages.subHeaderSelect[2]["select"][6]') }}</a></li>
                            <li><a class="dropdown-item" href="#">
                                    {{ $t('messages.subHeaderSelect[2]["select"][7]') }}</a></li>
                            <li><a class="dropdown-item" href="#">
                                    {{ $t('messages.subHeaderSelect[2]["select"][8]') }}</a></li>
                            <li><a class="dropdown-item" href="#">
                                    {{ $t('messages.subHeaderSelect[2]["select"][9]') }}</a></li>
                            <li><a class="dropdown-item" href="#">
                                    {{ $t('messages.subHeaderSelect[2]["select"][10]') }}</a></li>
                            <li><a class="dropdown-item" href="#">
                                    {{ $t('messages.subHeaderSelect[2]["select"][11]') }}</a></li>
                            <li><a class="dropdown-item" href="#">
                                    {{ $t('messages.subHeaderSelect[2]["select"][12]') }}</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown mx-lg-3">
                        <a class="nav-link dropdown-toggle no-caret border-bottom border-transparent hover-border-primary"
                            href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {{ $t('messages.subHeaderSelect[3]["title"]') }}
                        </a>
                        <ul class="dropdown-menu dropdown-menu-center">
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[3]["select"][0]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[3]["select"][1]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[3]["select"][2]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[3]["select"][3]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[3]["select"][4]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[3]["select"][5]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[3]["select"][6]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[3]["select"][7]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[3]["select"][8]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[3]["select"][9]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[3]["select"][10]')
                            }}</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown mx-lg-3">
                        <a class="nav-link dropdown-toggle border-bottom border-transparent hover-border-primary"
                            href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="../assets/images/index/type@2x.png" class="img-fluid me-1" alt=""
                                id="all-type-icon">
                            <span class="text align-middle">
                                {{ $t('messages.subHeaderSelect[4]["title"]') }}</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-center">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown mx-lg-3">
                        <a class="nav-link dropdown-toggle no-caret" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            {{ $t('messages.subHeaderSelect[5]["title"]') }}
                        </a>
                        <!-- <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                        </ul> -->
                    </li>
                    <li class="nav-item dropdown mx-lg-3">
                        <a class="nav-link dropdown-toggle no-caret" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            {{ $t('messages.subHeaderSelect[6]["title"]') }}
                        </a>
                        <!-- <router-link class="nav-link dropdown-toggle no-caret" :to="{ name: 'hello' }" target="_blank">
                            打开新窗口
                        </router-link> -->
                        <!-- <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                        </ul> -->
                    </li>
                    <li class="nav-item dropdown mx-lg-3">
                        <a class="nav-link dropdown-toggle no-caret" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            {{ $t('messages.subHeaderSelect[7]["title"]') }}
                        </a>
                        <!-- <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                        </ul> -->
                    </li>
                </ul>
                <div class="search-box">
                    <div class="row w-100 justify-content-center">
                        <div class="col flex-grow-0">
                            <form role="search" id="form-box">
                                <div class="input-group">
                                    <select class="form-select" id="input-select-box"
                                        aria-label="Default select example">
                                        <option selected>{{ $t('messages.formText[0][0]') }}</option>
                                        <option value="1">{{ $t('messages.formText[0][1]') }}</option>
                                        <option value="2">{{ $t('messages.formText[0][2]') }}</option>
                                        <option value="3">{{ $t('messages.formText[0][3]') }}</option>
                                    </select>
                                    <input class="form-control" id="input-form-box" type="search"
                                        :placeholder="$t('messages.formText[1]')" aria-label="Search">
                                    <span class="input-group-text">
                                        <i class="bi bi-search"></i>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <div>
        <RouterView></RouterView>
    </div>

    <!-- 底部 -->
    <div class="container text-center mt-5">
        <div class="row d-inline-flex w-auto justify-content-around align-items-center">
            <div class="col-md-8 col-12">
                <div class="row justify-content-around">
                    <div class="col-2">
                        <div class="row gap-3">
                            <div class="col-12 text-nowrap fw-semibold botton-text-gesture" id="botton-left-title"
                                style="font-size: 20px;">
                                {{ $t('messages.bottomList[0][0]') }}
                            </div>
                            <div class="col-12 text-nowrap botton-text-gesture" id="botton-left-text">
                                <router-link to="/about">
                                    {{ $t('messages.bottomList[0][1]') }}
                                </router-link>
                            </div>
                            <div class="col-12 text-nowrap botton-text-gesture" id="botton-left-text">{{
                                $t('messages.bottomList[0][2]') }}
                            </div>
                            <div class="col-12 text-nowrap botton-text-gesture" id="botton-left-text">{{
                                $t('messages.bottomList[0][3]') }}
                            </div>
                            <div class="col-12 text-nowrap botton-text-gesture" id="botton-left-text">{{
                                $t('messages.bottomList[0][4]') }}
                            </div>
                            <div class="col-12 text-nowrap botton-text-gesture" id="botton-left-text">{{
                                $t('messages.bottomList[0][5]') }}
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="row gap-3">
                            <div class="col-12 text-nowrap fw-semibold botton-text-gesture" id="botton-left-title"
                                style="font-size: 20px;">
                                {{ $t('messages.bottomList[1][0]') }}
                            </div>
                            <div class="col-12 text-nowrap botton-text-gesture" id="botton-left-text">{{
                                $t('messages.bottomList[1][1]') }}
                            </div>
                            <div class="col-12 text-nowrap botton-text-gesture" id="botton-left-text">{{
                                $t('messages.bottomList[1][2]') }}
                            </div>
                            <div class="col-12 text-nowrap botton-text-gesture" id="botton-left-text">{{
                                $t('messages.bottomList[1][3]') }}
                            </div>
                            <div class="col-12 text-nowrap botton-text-gesture" id="botton-left-text">{{
                                $t('messages.bottomList[1][4]') }}
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="row gap-3">
                            <div class="col-12 text-nowrap fw-semibold botton-text-gesture" id="botton-left-title"
                                style="font-size: 20px;">
                                {{ $t('messages.bottomList[2][0]') }}
                            </div>
                            <div class="col-12 text-nowrap botton-text-gesture" id="botton-left-text">{{
                                $t('messages.bottomList[2][1]') }}
                            </div>
                            <div class="col-12 text-nowrap botton-text-gesture" id="botton-left-text">{{
                                $t('messages.bottomList[2][2]') }}
                            </div>
                            <div class="col-12 text-nowrap botton-text-gesture" id="botton-left-text">{{
                                $t('messages.bottomList[2][3]') }}
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="row gap-3">
                            <div class="col-12 text-nowrap fw-semibold botton-text-gesture" id="botton-left-title"
                                style="font-size: 20px;">
                                {{ $t('messages.bottomList[3][0]') }}
                            </div>
                            <div class="col-12 text-nowrap botton-text-gesture" id="botton-left-text">{{
                                $t('messages.bottomList[3][1]') }}
                            </div>
                            <div class="col-12 text-nowrap botton-text-gesture" id="botton-left-text">{{
                                $t('messages.bottomList[3][2]') }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-12 mt-4 mt-sm-0">
                <div class="row">
                    <div class="col-12">
                        <div class="row justify-content-around">
                            <div class="col-2 position-relative common-mouse-box main-img-box">
                                <!-- 二维码图片 -->
                                <div
                                    class="position-absolute start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-light opacity-0 hover-opacity-100 transition-code">
                                    <img src="../assets/images/index/You Tube@2x.png" class="img-fluid" alt="二维码">
                                </div>
                                <img src="../assets/images/index/fb@2x.png" class="img-fluid h-100 w-100"
                                    style="object-fit: fill" alt="">
                            </div>
                            <div class="col-2 common-mouse-box">
                                <img src="../assets/images/index/yutube@2x.png" class="img-fluid h-100 w-100"
                                    style="object-fit: fill" alt="">
                            </div>
                            <div class="col-2 common-mouse-box">
                                <img src="../assets/images/index/IG@2x.png" class="img-fluid h-100 w-100"
                                    style="object-fit: fill" alt="">
                            </div>
                            <div class="col-2 common-mouse-box">
                                <img src="../assets/images/index/email@2x.png" class="img-fluid h-100 w-100"
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
.common-mouse-box,
.botton-text-gesture,
#button-box {
    cursor: pointer;
}

.hover-opacity-100 {
    top: -120%;
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

#header-left-icon {
    width: 55px;
    height: 38px;
}

#header-right-icon {
    width: 27px;
    height: 27px;
    margin-right: .4em;
}

#button-box {
    width: 96px;
    height: 38px;
    border-radius: 6px;
    line-height: 38px;

    .button-text {
        color: #000000;
    }
}

#botton-left-text {
    font-size: 14px;
    a:hover {
        color: #FF9000;
    }
}

/* 下拉框样式 */
#select-header-box,
#navbar-header-box {

    /* 鼠标悬停时显示有色底部边框 */
    .nav-link.hover-border-primary:hover {
        border-bottom: 2px solid #FF9000 !important;
    }

    /* 初始状态无边框（可选） */
    .nav-link.border-transparent {
        border-bottom: 2px solid transparent !important;
    }

    /* 下拉框的位置设置 */
    .dropdown-menu-center {
        left: 50% !important;
        transform: translateX(-50%) !important;
    }

    .dropdown-toggle::after {
        /* 隐藏下拉图标 */
        display: none !important;
    }

    .nav-item.dropdown:hover .dropdown-menu {
        display: block;
        /* 显示 dropdown-menu */
    }

    /* 调整 dropdown-menu 的位置 */
    .dropdown-menu {
        position: absolute;
        left: 50%;
        transform: translateX(-50%) !important;
        right: auto !important;
        margin-top: 0;
        /* 移除默认的 margin */
    }

    .dropdown-menu .dropdown-item:active {
        /* 背景颜色 */
        background-color: #FF9000;
    }
}

#all-type-icon {
    width: 14px;
    height: 14px;
}

#form-box {
    width: 25em;
}

#input-select-box {
    width: 25%;
}

#input-form-box {
    width: 60%;
}

@media (min-width: 400px) {
    #botton-left-title {
        font-size: 14px !important;
    }

    #botton-left-text {
        font-size: 12px;
    }
}

@media (max-width: 420px) {
    #input-select-box {
        width: 20%;
    }

    #input-form-box {
        width: 30%;
    }

    #form-box {
        width: 22em;
    }
}

@media (max-width: 400px) {
    #botton-left-title {
        font-size: 12px !important;
    }

    #botton-left-text {
        font-size: 10px;
    }
}

@media (min-width: 990px) and (max-width: 1250px) {
    #form-box {
        display: none;
    }
}
</style>

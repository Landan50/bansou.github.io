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

//滚动到一定的距离头部固定
const fixedTop = () => {
    const navbar = document.querySelector('.mainNav');
    const offset = 100; // 滚动到100px后固定导航栏
    // console.log(navbar.clientHeight);
    const carousel = document.querySelector('.carousel-box-wrap');
    // console.log(carousel.clientHeight);
    console.log(navbar.clientHeight + carousel.clientHeight);
    console.log(window.scrollY);

    if (window.scrollY > navbar.clientHeight + carousel.clientHeight) {
        navbar.classList.add('fixed-top');
    } else {
        navbar.classList.remove('fixed-top');
    }
}

// onMounted(() => {
//     // document.addEventListener('scroll', fixedTop);
// })

</script>

<template>
    <!-- <RouterLink :to="{name:'hello', params:{id: 1, title: '你好'}}" active-class="page-router-active">跳转到Hello页面</RouterLink> -->
    <!-- <RouterLink to="/hello" active-class="page-router-active">跳转到Hello页面</RouterLink> -->
    <!-- sticky-top控制滚动到导航底部就可以固定在顶部 -->

    <!-- 一级导航栏 -->
    <nav class="navbar navbar-expand-lg" id="navbar-header-box" style="background-color: #FEB250;">
        <div class="container-fluid justify-content-lg-around">
            <img src="../assets/images/index/logo@2x.png" class="img-fluid" id="header-left-icon">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent1">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                    <li class="nav-item px-lg-2 py-md-1">
                        <a href="https://wa.me/85293329002" target="_blank" class="nav-header-box">
                            <img src="../assets/images/index/ServiceProvider@2x.png" class="img-fluid " alt=""
                                id="header-right-icon">
                            <span class="text align-middle">{{ $t('messages.headerSelect["member"]') }}</span>
                        </a>
                        <!-- <img src="../assets/images/index/ServiceProvider@2x.png" class="img-fluid " alt=""
                            id="header-right-icon">
                        <span class="text align-middle">{{ $t('messages.headerSelect["member"]') }}</span> -->
                    </li>
                    <li class="nav-item px-lg-2 py-md-1">
                        <a href="https://wa.me/85261619791" class="nav-header-box">
                            <img src="../assets/images/index/ServiceProvider@2x.png" class="img-fluid" alt=""
                                id="header-right-icon">
                            <span class="text align-middle">{{ $t('messages.headerSelect["service"]') }}</span>
                        </a>
                        <!-- <img src="../assets/images/index/ServiceProvider@2x.png" class="img-fluid" alt=""
                            id="header-right-icon">
                        <span class="text align-middle">{{ $t('messages.headerSelect["service"]') }}</span> -->
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <img src="../assets/images/index/member@2x.png" class="img-fluid" alt=""
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
                    <!-- <li class="nav-item ms-lg-3 mb-2 mb-lg-0" id="button-box" style="background-color: white;">
                        <span class="button-text">{{ $t('messages.headerSelect["register"]') }}</span>
                    </li> -->
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
                        <a class="nav-link dropdown-toggle no-caret" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            {{ $t('messages.subHeaderSelect[7]["title"]') }}
                        </a>
                        <!-- <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                        </ul> -->
                    </li>
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
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][0]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][1]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][2]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][3]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][4]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][5]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][6]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][7]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][8]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][9]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][10]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][11]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][12]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][13]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][14]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][15]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][16]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][17]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][18]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][19]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][20]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][21]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][22]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][23]')
                            }}</a></li>
                            <li><a class="dropdown-item" href="#">{{ $t('messages.subHeaderSelect[4]["select"][24]')
                            }}</a></li>
                        </ul>
                    </li>
                    <!-- <li class="nav-item dropdown mx-lg-3">
                        <a class="nav-link dropdown-toggle no-caret" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            {{ $t('messages.subHeaderSelect[5]["title"]') }}
                        </a>

                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                        </ul>
                    </li> -->
                    <!-- <li class="nav-item dropdown mx-lg-3">
                        <a class="nav-link dropdown-toggle no-caret" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            {{ $t('messages.subHeaderSelect[6]["title"]') }}
                        </a>

                        <router-link class="nav-link dropdown-toggle no-caret" :to="{ name: 'hello' }" target="_blank">
                            打开新窗口
                        </router-link>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                        </ul>
                    </li> -->
                </ul>
                <!-- 搜索框 -->
                <!-- <div class="search-box">
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
                </div> -->
            </div>
        </div>
    </nav>
</template>

<style scoped>
/* 固定后的样式 */
/* .fixed-top {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1030;
  animation: fadeInDown 1s linear;
} */

/* 防止页面跳动 */
/* nav:not(.fixed-top) + * {
  margin-top: 0;
}

@keyframes fadeInDown {
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
} */

.nav-header-box {
    cursor: pointer;
}

.nav-header-box:hover {
    color: #000000 !important;
}

#button-box {
    cursor: pointer;
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

@media (min-width: 990px) and (max-width: 1250px) {
    #form-box {
        display: none;
    }
}
</style>

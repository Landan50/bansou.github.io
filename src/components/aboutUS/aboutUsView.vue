<script setup>
import { ref, onMounted, onUnmounted, reactive, defineAsyncComponent } from 'vue';

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

    <div class="container-fluid pe-0 ps-0">
        <div class="about-header-box">
            <div class="header-text1 common-style-box">The Gateway to Endless Service Connections</div>
            <div class="header-text2 common-style-box">{{ $t('messages.aboutHeaders[0]') }}</div>
            <div class="header-text3 common-style-box">{{ $t('messages.aboutHeaders[1]') }}</div>
        </div>
        <div class="about-content-top d-flex align-items-center justify-content-center mt-2">
            <div class="line"></div>
            <div class="common-text-box me-2 ms-2">{{ $t('messages.aboutHeaders[2]') }}</div>
            <div class="line"></div>
        </div>
        <div class="about-title-box mt-2 mb-2">{{ $t('messages.aboutHeaders[3]') }}</div>
        <div class="about-content-box common-text-box">
            {{ $t('messages.aboutHeaders[4]') }}
        </div>
        <div class="about-info-box mt-5">
            <div class="info-common-box">
                <div class="info-left-box position-relative">
                    <div class="position-absolute info-shadow-text">MEMBER</div>
                    <div class="info-left-content">
                        <div>
                            <img src="../../assets/images/about/hy@2x.png" alt="">
                        </div>
                        <div class="mt-2 mb-2 content-title-box">{{ $t('messages.mAboutUseList1.leftList[0]') }}</div>
                        <div>{{ $t('messages.mAboutUseList1.leftList[1]') }}</div>
                        <div class="mt-1">{{ $t('messages.mAboutUseList1.leftList[2]') }}</div>
                        <div class="info-btn-box mt-3 ms-2">{{ $t('messages.mAboutUseList1.leftList[3]') }}</div>
                    </div>
                </div>
                <div class="info-right-box">
                    <div class="item-common-box">
                        <div class="info-item-box">
                            <div class="item-header-box">
                                <img src="../../assets/images/about/hy-yzs@2x.png" alt="">
                            </div>
                            <div class="item-info-box ms-1">
                                <div class="fw-bold text-start mb-1">
                                    {{ $t('messages.mAboutUseList1.rightList[0].title') }}
                                </div>
                                <div class="text-start" style="line-height: 1.8em;">
                                    {{ $t('messages.mAboutUseList1.rightList[0].content') }}
                                </div>
                            </div>
                        </div>
                        <div class="info-item-box">
                            <div class="item-header-box ms-1">
                                <img src="../../assets/images/about/hy-zngx@2x.png" style="width: 23px;height: 27px;"
                                    alt="">
                            </div>
                            <div class="item-info-box ms-2">
                                <div class="fw-bold text-start mb-1">
                                    {{ $t('messages.mAboutUseList1.rightList[1].title') }}
                                </div>
                                <div class="text-start">
                                    {{ $t('messages.mAboutUseList1.rightList[1].content') }}
                                </div>
                            </div>
                        </div>
                        <div class="info-item-box">
                            <div class="item-header-box ms-1">
                                <img src="../../assets/images/about/hy-tmpg@2x.png" style="width: 27px;height: 27px;"
                                    alt="">
                            </div>
                            <div class="item-info-box ms-2">
                                <div class="fw-bold text-start mb-1">
                                    {{ $t('messages.mAboutUseList1.rightList[2].title') }}
                                </div>
                                <div class="text-start">
                                    {{ $t('messages.mAboutUseList1.rightList[2].content') }}
                                </div>
                            </div>
                        </div>
                        <div class="info-item-box">
                            <div class="item-header-box ms-1">
                                <img src="../../assets/images/about/hy-aqbz@2x.png" style="width: 23px;height: 26px;"
                                    alt="">
                            </div>
                            <div class="item-info-box ms-2">
                                <div class="fw-bold text-start mb-1">
                                    {{ $t('messages.mAboutUseList1.rightList[3].title') }}
                                </div>
                                <div class="text-start">
                                    {{ $t('messages.mAboutUseList1.rightList[3].content') }}
                                </div>
                            </div>
                        </div>
                        <div class="info-item-box">
                            <div class="item-header-box ms-1">
                                <img src="../../assets/images/about/hy-bjgl@2x.png" style="width: 27px;height: 26px;"
                                    alt="">
                            </div>
                            <div class="item-info-box ms-2">
                                <div class="fw-bold text-start mb-1">
                                    {{ $t('messages.mAboutUseList1.rightList[4].title') }}
                                </div>
                                <div class="text-start">
                                    {{ $t('messages.mAboutUseList1.rightList[4].content') }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="info-common-box info-tow-box mt-5">
                <div class="info-left-box position-relative">
                    <div class="item-common-box">
                        <div class="info-item-box">
                            <div class="item-header-box">
                                <img src="../../assets/images/about/fws-tzyw@2x.png" style="width: 31px;height: 31px;"
                                    alt="">
                            </div>
                            <div class="item-info-box ms-1">
                                <div class="fw-bold text-start">
                                    {{ $t('messages.mAboutUseList2.leftList[0].title') }}
                                </div>
                                <div class="text-start">
                                    {{ $t('messages.mAboutUseList2.leftList[0].content') }}
                                </div>
                            </div>
                        </div>
                        <div class="info-item-box">
                            <div class="item-header-box">
                                <img src="../../assets/images/about/fws-znjz@2x.png" style="width: 32px;height: 29px;"
                                    alt="">
                            </div>
                            <div class="item-info-box ms-2">
                                <div class="fw-bold text-start">
                                    {{ $t('messages.mAboutUseList2.leftList[1].title') }}
                                </div>
                                <div class="text-start">
                                    {{ $t('messages.mAboutUseList2.leftList[1].content') }}
                                </div>
                            </div>
                        </div>
                        <div class="info-item-box">
                            <div class="item-header-box">
                                <img src="../../assets/images/about/fws-dyly@2x.png" style="width: 28px;height: 32px;"
                                    alt="">
                            </div>
                            <div class="item-info-box ms-2">
                                <div class="fw-bold text-start">
                                    {{ $t('messages.mAboutUseList2.leftList[2].title') }}
                                </div>
                                <div class="text-start">
                                    {{ $t('messages.mAboutUseList2.leftList[2].content') }}
                                </div>
                            </div>
                        </div>
                        <div class="info-item-box">
                            <div class="item-header-box">
                                <img src="../../assets/images/about/fws-gxyy@2x.png" style="width: 29px;height: 33px;"
                                    alt="">
                            </div>
                            <div class="item-info-box ms-2">
                                <div class="fw-bold text-start">
                                    {{ $t('messages.mAboutUseList2.leftList[3].title') }}
                                </div>
                                <div class="text-start">
                                    {{ $t('messages.mAboutUseList2.leftList[3].content') }}
                                </div>
                            </div>
                        </div>
                        <div class="info-item-box">
                            <div class="item-header-box">
                                <img src="../../assets/images/about/fws-ppjz@2x.png" style="width: 34px;height: 33px;"
                                    alt="">
                            </div>
                            <div class="item-info-box ms-2">
                                <div class="fw-bold text-start">
                                    {{ $t('messages.mAboutUseList2.leftList[4].title') }}
                                </div>
                                <div class="text-start">
                                    {{ $t('messages.mAboutUseList2.leftList[4].content') }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="info-right-box position-relative">
                    <div class="position-absolute info-shadow-text">PROVIDER</div>
                    <div class="info-left-content">
                        <div class="me-4">
                            <img src="../../assets/images/about/fws@2x.png" alt="">
                        </div>
                        <div class="mt-2 mb-2 content-title-box text-white">{{ $t('messages.mAboutUseList2.rightList[0]') }}</div>
                        <div class="text-white me-4">{{ $t('messages.mAboutUseList2.rightList[1]') }}</div>
                        <div class="mt-1 text-white me-3">{{ $t('messages.mAboutUseList2.rightList[2]') }}</div>
                        <div class="info-btn-box mt-3 ms-2 me-4">{{ $t('messages.mAboutUseList2.rightList[3]') }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about-relate-box d-flex align-items-center justify-content-center mt-4 mb-5">
            <div class="line"></div>
            <div class="common-text-box me-2 ms-2">聯絡幫搜</div>
            <div class="line"></div>
        </div>
    </div>

    <div class="container about-us-wrap">
        <div class="realte-way-box d-flex justify-content-around">
            <div class="way-road-box">
                <div class="mb-4">
                    <img src="../../assets/images/about/llbs-phone@2x.png" style="width: 172px;height: 161px;" alt="">
                </div>
                <div>辦公時間：09:00-18:00</div>
                <div>午休時間：14:00-15:00</div>
                <div>(＊星期六、日及公眾假期休息)</div>
            </div>
            <div class="way-road-box">
                <div class="mb-4">
                    <img src="../../assets/images/about/llbs-kf@2x.png" style="width: 169px;height: 167px;" alt="">
                </div>
                <div>立即透過「會員專線」聯絡我們:</div>
                <div>會員專線 : +852 93329002</div>
                <div>電郵 : info@bonshou.com</div>
            </div>
            <div class="way-road-box d-flex flex-column justify-content-end">
                <div class="mb-4">
                    <img src="../../assets/images/about/llbs-hz@2x.png" style="width: 227px;height: 124px;" alt="">
                </div>
                <div>立即透過「服務商專線」聯絡我們:</div>
                <div>服務商專線 : +852 61619791</div>
                <div>電郵 : info@bonshou.com</div>
            </div>
        </div>
    </div>

    <div>
        <BottomComponent />
    </div>
</template>

<style scoped>
.about-us-wrap {
    margin-bottom: 86px;
}

.about-header-box {
    width: 100%;
    height: 490px;
    background-size: cover;
    background-position: center;
    /* 居中显示，避免裁剪重要部分 */
    background-repeat: no-repeat;
    /* 防止重复 */
    background-image: url('../../assets/images/about/banner-bg@2x.png');
    position: relative;

    .common-style-box {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
    }

    .header-text1 {
        color: #FEFEFE;
        opacity: 0.27;
        font-size: 31px;
        top: 169px;
    }

    .header-text2 {
        color: #FEFEFE;
        font-size: 48px;
        font-weight: 800;
        white-space: nowrap;
        top: 182px;
    }

    .header-text3 {
        font-size: 23px;
        color: #FEFEFE;
        top: 251px;
    }
}

.about-content-top,
.about-relate-box {
    .line {
        width: 8vw;
        height: 1px;
        background: #999999;
    }
}

.common-text-box {
    color: #666666;
}

.about-content-box {
    width: 51vw;
    margin: 0 auto;
    line-height: 2em;
}

.about-title-box {
    font-weight: bold;
    font-size: 24px;
    color: #333333;
}

.about-info-box {
    width: 62.5vw;
    margin: 0 auto;

    .info-common-box {
        width: 100%;
        /* height: 433px; */
        box-sizing: border-box;
        display: flex;
        align-items: noramal;


        .info-left-box {
            flex: 0 0 36%;
            /* height: 100%; */
            background: #FFC77E;
        }

        .info-btn-box {
            /* width: calc(100% - 250px); */
            padding: 0 48px;
            height: 51px;
            background: #FFFFFF;
            line-height: 51px;
            border-radius: 26px;
        }

        .info-shadow-text {
            font-weight: bold;
            font-size: 92px;
            color: #FEFEFE;
            top: 91px;
            left: 0;
            line-height: 1em;
            opacity: 0.14;
            z-index: 1;
        }

        .info-left-content {
            display: flex;
            align-items: start;
            justify-content: start;
            position: relative;
            /* height: 100%; */
            margin-top: 69px;
            flex-direction: column;
            padding: 0 0 0 20px;
            z-index: 2;

            img {
                width: 114px;
                height: 117px;
            }

            .content-title-box {
                font-weight: bold;
                font-size: 36px;
            }
        }

        .info-right-box {
            flex: 0 0 64%;
            /* height: 100%; */
            background: #F8F0DB;
            padding: 20px 18px 0 18px;
        }

        .item-common-box {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;

            .info-item-box {
                display: flex;
                align-items: start;
                margin-bottom: 18px;

                .item-header-box {
                    img {
                        width: 34px;
                        height: 21px;
                    }
                }
            }
        }
    }
}

.info-tow-box {

    .info-left-content {
        align-items: end !important;
    }

    .info-left-box {
        flex: 0 0 64% !important;
        background: #DAF0FF !important;
        padding: 25px 18px 10px 18px !important;
    }

    .info-right-box {
        flex: 0 0 36% !important;
        background: #67C1FF !important;
        padding: 0 !important;

        .info-shadow-text {
            font-size: 80px !important;
            top: 82px !important;
        }

        .info-left-content {
            padding: 0 0 48px 0 !important;
            margin-top: 53px !important;
        }
    }
}

.realte-way-box {
    .way-road-box {
        div {
            color: #666666;
            line-height: 2em;
        }
    }
}

@media (max-width: 800px) {
    .about-header-box {

        .header-text1 {
            font-size: 25px;
        }

        .header-text2 {
            font-size: 42px;
        }

        .header-text3 {
            font-size: 17px;
        }
    }
}
</style>

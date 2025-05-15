<script setup>
import { ref, onMounted, onUnmounted, defineAsyncComponent } from 'vue'

const HeaderComponent = defineAsyncComponent(() =>
    import('@/pages/header.vue')
);

const BottomComponent = defineAsyncComponent(() =>
    import('@/pages/bottom.vue')
);

const ratingOne = ref(0);
const ratingTwo = ref(0);
const starSize = ref(40);
const paddingSize = ref(18);

onMounted(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
})

const handleResize = () => {
    const width = window.innerWidth;
    if (width < 500) {
        paddingSize.value = 12;
        starSize.value = 20;
    } else if (width < 768 && width >= 500) {
        starSize.value = 24; // 手机屏幕上的星星大小
    } else if (width < 1024) {
        starSize.value = 32; // 平板屏幕上的星星大小
    } else {
        starSize.value = 40; // 手机屏幕上的星星大小; // 桌面屏幕上的星星大小
    }
}

const handleSubmit = () => {
    const form = document.querySelector('.needs-validation');
    const starRatingOne = document.querySelector(".star-rating-one");
    const starRatingTwo = document.querySelector(".star-rating-two");

    console.log('rating', ratingOne.value);
    console.log('rating', ratingTwo.value);


    if (form.checkValidity() && ratingOne.value !== 0 && ratingTwo.value !== 0) {
        // 表单验证通过，执行提交逻辑
        console.log(form);

        // 这里可以添加API请求
        // await submitForm(formData.value);


        alert('表单提交成功!');
    } else {
        // 显示验证错误
        form.classList.add('was-validated');
        ratingOne.value > 0 ? '' : starRatingOne.classList.add('star-rating-active');
        ratingTwo.value > 0 ? '' : starRatingTwo.classList.add('star-rating-active');
    }
};

const setRatingOne = (value) => {
    const starRatingOne = document.querySelector(".star-rating-one");
    ratingOne.value = value;
    starRatingOne.classList.remove('star-rating-active');
}

const setRatingTwo = (value) => {
    const starRatingTwo = document.querySelector(".star-rating-two");
    ratingTwo.value = value;
    starRatingTwo.classList.remove('star-rating-active');
}
</script>

<template>
    <div>
        <HeaderComponent />
    </div>

    <div class="container-fluid position-relative" style="padding: 0 0 0 0;">
        <div>
            <img src="../../assets/images/feedback/banner@2x.png" class="img-fluid" alt="">
        </div>
        <div class="position-absolute top-50 feed-back-wrap">
            <div class="text-nowrap feed-back-title">
                {{ $t('messages.feedbackTitle') }}
            </div>
            <div class="text-nowrap feed-back-text mt-2">
                {{ $t('messages.feedbackText') }}
            </div>
        </div>
    </div>

    <div class="container mt-4 text-start" style="background-color: #F8F8F8;height: 1007px;">
        <form class="pt-4 needs-validation" novalidate @submit.prevent="handleSubmit">
            <div class="mb-4">
                <label for="validationDefault01" class="form-label"><span class="required-text">*</span>
                    {{ $t('messages.feedBackForm[0]') }}</label>
                <textarea class="form-control" id="validationDefault01" rows="4" aria-describedby="inputGroupPrepend"
                    required></textarea>
                <div class="invalid-feedback">
                    {{ $t('messages.feedBackFormTip[0]') }}
                </div>
            </div>
            <div class="mb-5">
                <label class="form-label"><span class="required-text">*</span>
                    {{ $t('messages.feedBackForm[1]') }}</label>
                <star-rating :max-rating="10" :show-rating="false" inactive-color="#BBBBBB" active-color="#F3B923"
                    :star-size="starSize" :padding="paddingSize" @update:rating="setRatingOne" />
                <div class="star-rating-one mt-3" style="font-size: .875em;">
                    {{ $t('messages.feedBackFormTip[1]') }}
                </div>
            </div>
            <div>
                <label class="form-label"><span class="required-text">*</span>
                    {{ $t('messages.feedBackForm[2]') }}</label>
                <star-rating :max-rating="10" :show-rating="false" inactive-color="#BBBBBB" active-color="#F3B923"
                    :star-size="starSize" :padding="paddingSize" @update:rating="setRatingTwo" />
                <div class="star-rating-two mt-3" style="font-size: .875em;">
                    {{ $t('messages.feedBackFormTip[1]') }}
                </div>
            </div>
            <button type="submit" class="btn btn-warning text-white submit-btn-box ms-1">提交</button>
        </form>
    </div>

    <div>
        <BottomComponent />
    </div>
</template>

<style scoped>
.star-rating-one,
.star-rating-two {
    display: none;
}

.star-rating-active {
    display: block;
    color: #CD201F;
}

.required-text {
    color: #CD201F;
}

.submit-btn-box {
    width: 13em;
    margin-top: 3.5em;
}

.feed-back-title {
    font-size: 48px;
    font-weight: 800;
}

.feed-back-wrap {
    left: 25%;
    transform: translateY(-50%);
}

.feed-back-text {
    font-size: 24px;
}

@media (max-width: 500px) {
    .feed-back-wrap {
        left: 5%;
    }

    .feed-back-title {
        font-size: 12px;
    }

    .feed-back-text {
        font-size: 8px;
    }
}

@media (min-width: 500px) and (max-width: 750px) {
    .feed-back-wrap {
        left: 5%;
    }

    .feed-back-title {
        font-size: 20px;
    }

    .feed-back-text {
        font-size: 10px;
    }
}

@media (min-width: 750px) and (max-width: 1200px) {
    .feed-back-wrap {
        left: 15%;
    }

    .feed-back-title {
        font-size: 26px;
    }

    .feed-back-text {
        font-size: 14px;
    }
}

@media (min-width: 1200px) and (max-width: 1700px) {
    .feed-back-wrap {
        left: 20%;
    }

    .feed-back-title {
        font-size: 36px;
    }

    .feed-back-text {
        font-size: 20px;
    }
}
</style>

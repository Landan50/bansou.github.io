<script setup>
import { defineProps, ref, onMounted, computed, nextTick } from "vue";
import { Collapse } from 'bootstrap';

const props = defineProps({
    titleList: {
        type: Array,
        default() {
            return [{ titleName: "", id: 0 }]
        }
    },
    contentList: {
        type: Object,
        default() {
            return [{ id: -1 }]
        }
    },
    type: {
        type: String,
        default: ""
    }
})

const newContentList = ref([])
const textIndex = ref(0)
let collapseInstances = []

onMounted(() => {
    newContentList.value = props.contentList;
    initCollapses();
})

const emailLink = computed(() => {
    return '<a href="mailto:info@bonshou.com" class="text-blue-500">info@bonshou.com</a>';
})

// 销毁所有折叠实例
const destroyCollapses = () => {
  collapseInstances.forEach(instance => {
    if (instance && instance._element) {
      instance.dispose(); // 彻底销毁实例
    }
  });
  collapseInstances = [];
};

// 初始化折叠面板（全部强制关闭）
const initCollapses = () => {
  nextTick(() => {
    document.querySelectorAll('.accordion-collapse').forEach(el => {
      // 创建实例并立即隐藏（确保初始状态关闭）
      const instance = new Collapse(el, { toggle: false });
      instance.hide(); // 强制关闭
      collapseInstances.push(instance);
    });
  });
};

const changeContent = (index, num) => {
    newContentList.value = [];
    destroyCollapses(); // 先销毁旧实例
    for (let i = 0; i < num; i++) {
        newContentList.value.push(
            {
                id: i + 10000,
                type: props.type + "[" + index + "]"
            }
        );
    }
    textIndex.value = index;
    initCollapses(); // 重新初始化
    // console.log(newContentList.value);
}

</script>

<template>
    <div>
        <div class="common-problem-box d-flex">
            <div class="problem-left-box">
                <div :class="textIndex === index ? 'text-start mb-3 textActive' : 'text-start mb-3'" id="list-text-box"
                    v-for="(item, index) in titleList" :key="item.id" @click="changeContent(index, item.num)">
                    ▪{{ index + 1 }}. {{ $t(`${item.titleName}`) }}
                </div>
            </div>
            <div class="problem-right-box">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item" v-for="(item, index) in newContentList" :key="item.id">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse"
                                :data-bs-target="'#' + item.id">
                                {{ $t(`messages.${item.type + '[' + [index] + ']'}.title`) }}
                            </button>
                        </h2>
                        <div :id="item.id" class="accordion-collapse collapse pt-1 collapse-content-box"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body text-start lh-base"
                                v-html="$t(`messages.${item.type + '[' + [index] + ']'}.content`, { email: emailLink })">
                            </div>
                            <!-- {{ $t(`messages.${item.title+'['+[index]+']'}.content`) }} -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.common-problem-box {
    #list-text-box {
        cursor: pointer;
    }

    .problem-left-box {
        flex: 0 0 15%;

        .textActive {
            color: #FEB250;
            position: relative;
        }

        .textActive::after {
            position: absolute;
            content: "";
            width: 5px;
            height: 22px;
            background: #FEB250;
            left: -10px;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    .problem-right-box {
        flex: 0 0 78%;
        height: 100%;

        .collapse-content-box {
            background: #F8F8F8;
        }
    }
}


/* 自定义折叠面板样式 */
.accordion-button:not(.collapsed) {
    background-color: #F8F8F8;
    /* 展开时的背景色 */
    color: #333333;
    /* 展开时的文字颜色 */
}

.accordion-button:focus {
    box-shadow: none;
    /* 移除焦点阴影 */
}

.accordion-button {
    position: relative;
    background-color: #F8F8F8;
}

.accordion-button:not(.collapsed)::after {
    background-image: url("../assets/images/common/jian@2x.png");
    position: absolute;
    width: 30px;
    height: 6px;
    right: 1em;
    top: 50%;
    background-size: 100% 100%;
    transform: translateY(-50%);
}

.accordion-button.collapsed::after {
    background-image: url("../assets/images/common/jia@2x.png");
    position: absolute;
    width: 30px;
    height: 30px;
    right: 1em;
    top: 50%;
    transform: translateY(-50%);
    background-size: 100% 100%;
}
</style>
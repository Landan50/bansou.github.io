import { useIntersectionObserver } from '@vueuse/core';
import { ref, onUnmounted } from "vue";

export function useLazyLoad() {
    const imageRefs = ref([]);

    const registerImage = (el, src) => {
        // 处理静态资源路径
        // const resolveAsset = (path) => {
        //     if (typeof path !== 'string') return path
        //     // 处理相对路径的静态资源
        //     if (path.startsWith('@/') || path.startsWith('./') || path.startsWith('../')) {
        //         return new URL(path, import.meta.url).href
        //     }
        //     return path
        // }

        // const actualSrc = typeof src === 'object' ? resolveAsset(src.src) : resolveAsset(src)
        // const placeholder = typeof src === 'object' ? resolveAsset(src.placeholder) : null

        // 设置占位图
        // if (placeholder) {
        //     el.src = placeholder
        // }

        const { stop } = useIntersectionObserver(el,
            ([{ isIntersecting }]) => {
                console.log(isIntersecting);

                if (isIntersecting) {
                    el.src = src
                    // console.log(el.src);

                    // el.classList.add('loaded')
                    stop()
                }
            },
            { rootMargin: '0px 0px 0px 0px' } //距离多久开始加载
        )

        imageRefs.value.push({ el, stop });
    }

    onUnmounted(() => {
        imageRefs.value.forEach(item => item.stop())
    })

    return { registerImage }
}

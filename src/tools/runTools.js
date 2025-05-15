const isScrolling = ref(false);
let observerLeft = null;
let stopObserving = null;

const observePrevElementInParent = debounce((currentElement, callback) => {
    const parent = currentElement.parentElement.parentElement;
    const prevElement = currentElement.previousElementSibling;
    console.log(currentElement);
    console.log(parent);
    console.log(prevElement);

    if (!prevElement) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            callback(entry.isIntersecting);
        });
    }, {
        root: parent,  // 指定父容器作为观察根
        threshold: 0.5,  // 10%可见时触发
        rootMargin: '0px'  // 无额外边距
    });

    observer.observe(prevElement);
    console.log(observerList.value.includes(observer));

    observerList.value.push(observer)

    // 返回observer以便后续取消观察
    // return observer;
}, 200);

const observePrevElementInParent1 = debounce((currentElement, callback) => {
    const parent = currentElement.parentElement.parentElement;
    const nextElement = currentElement.nextElementSibling;
    // console.log(currentElement);
    // console.log(parent);
    // console.log(prevElement);

    if (!nextElement) return;

    observerLeft = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            callback(entry.isIntersecting);
        });
    }, {
        root: parent,  // 指定父容器作为观察根
        threshold: 0.5,  // 10%可见时触发
        rootMargin: '0px'  // 无额外边距
    });

    observerLeft.observe(nextElement);
    // console.log('observer', observer);
    // console.log(observerList.value.includes(observer));

    // observerList.value.push(observer)
    // console.log('observerList', observerList.value);

    // 返回observer以便后续取消观察
    // return observer;
}, 200);

const createSliderObserver = (currentElement, callback) => {
    const prevElement = currentElement.previousElementSibling;
    const nextElement = currentElement.nextElementSibling;
    const parent = currentElement.parentElement.parentElement;
    let observer = null;

    // 创建防抖回调
    const debouncedCallback = debounce(callback, 100);

    // 初始化观察器
    function initObserver() {
        // 先取消之前的观察
        if (observer) {
            observer.disconnect();
        }

        observer = new IntersectionObserver((entries) => {
            console.log('entries', entries);

            entries.forEach(entry => {
                console.log('entry.target', entry.target);

                if (entry.target === prevElement) {
                    console.log('prevElement entry.isIntersecting', entry.isIntersecting);

                    debouncedCallback({
                        prevIsVisible: entry.isIntersecting,
                        nextIsVisible: false
                    });
                } else if (entry.target === nextElement) {
                    console.log('nextElement entry.isIntersecting', entry.isIntersecting);
                    debouncedCallback({
                        prevIsVisible: false,
                        nextIsVisible: entry.isIntersecting
                    });
                }
            });
        }, {
            root: parent,
            threshold: 0.1,
            rootMargin: '0px'  // 无额外边距
        });

        if (prevElement) observer.observe(prevElement);
        if (nextElement) observer.observe(nextElement);
    }

    // 初始化
    initObserver();

    // 窗口大小变化时重新初始化
    //   const handleResize = () => {
    //     initObserver();
    //   };
    //   window.addEventListener('resize', handleResize);

    // 返回清理函数
    return () => {
        if (observer) observer.disconnect();
        // window.removeEventListener('resize', handleResize);
    };
}

const leftClick = debounce(() => {
    const imgAll = document.querySelectorAll("#img-container");
    const run = document.querySelector('#run-container');

    // observePrevElementInParent(imgAll[clickIndex.value], (isVisible) => {
    //     console.log('上一个元素在父容器中的可见状态变化:', isVisible);
    //     if (isScrolling.value) return;
    //     if (currentOffset.value < 0 && !isVisible) {
    //         currentOffset.value += imgAll[0].clientWidth;
    //         isScrolling.value = true;
    //         run.style.transform = `translateX(${currentOffset.value}px)`;
    //         setTimeout(() => {
    //             isScrolling.value = false;
    //             observer.unobserve(imgAll[clickIndex.value].previousElementSibling);
    //         }, 200);
    //     }
    // });

    stopObserving = createSliderObserver(imgAll[clickIndex.value], ({ prevIsVisible, nextIsVisible }) => {
        if (isScrolling.value) return;
        console.log('上一个元素可见:', prevIsVisible, '下一个元素可见:', nextIsVisible);

        if (currentOffset.value < 0 && !prevIsVisible) {
            currentOffset.value += imgAll[0].clientWidth;
            isScrolling.value = true;
            run.style.transform = `translateX(${currentOffset.value}px)`;
            setTimeout(() => {
                isScrolling.value = false;
            }, 200);
        }
        clickIndex.value = clickIndex.value <= 0 ? 0 : clickIndex.value - 1;
    });
}, 300)


//防抖
const debounce = (func, delay) => {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}
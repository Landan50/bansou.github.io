import { debounce } from 'lodash-es';

export function createResizeObserverManager() {
    const observerMap = new Map(); // 存储元素与对应的 observer

    // 监听单个元素
    function observeElement(element, callback) {
        if (!element || observerMap.has(element)) return;

        // 为每个元素创建独立的防抖函数
        const debouncedCallback = debounce((entries) => {
            // 过滤出当前元素的entry
            const filtered = entries.filter(entry => entry.target === element);
            if (filtered.length) callback(filtered);
        }, 200);

        const observer = new ResizeObserver(debouncedCallback);
        observer.observe(element);
        observerMap.set(element, { observer, debouncedCallback });
    }

    // 监听多个元素
    function observeElements(elements, callback) {
        elements.forEach(element => observeElement(element, callback));
    }

    // 取消监听单个元素
    function unobserveElement(element) {
        const record = observerMap.get(element);
        // console.log(record);
        
        if (record) {
            record.debouncedCallback.cancel();
            record.observer.unobserve(element);
            record.observer.disconnect();
            observerMap.delete(element);
        }
    }

    // 取消监听多个元素
    function unobserveElements(elements) {
        elements.forEach(element => unobserveElement(element));
    }

    // 取消所有监听
    function unobserveAll() {
        observerMap.forEach((item, element) => {
            item.debouncedCallback.cancel();
            item.observer.unobserve(element);
            item.observer.disconnect();
        });
        observerMap.clear();
    }

    return {
        observeElement,
        observeElements,
        unobserveElement,
        unobserveElements,
        unobserveAll
    };
}
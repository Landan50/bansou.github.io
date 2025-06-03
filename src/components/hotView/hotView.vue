<script setup>
import { defineAsyncComponent } from 'vue';

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

    <div>
        <router-view></router-view>
    </div>

    <div>
        <BottomComponent />
    </div>
</template>

<style scoped></style>
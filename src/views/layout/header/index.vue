<script setup lang="ts">
import { ref, reactive, toRefs, computed } from 'vue'
import { layoutStore } from '@/stores/layout'
import { ArrowDown } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { useFullscreen } from '@vueuse/core'
const { toggle, isFullscreen } = useFullscreen()
const router = useRouter();
const current = computed(() => {
    return router.currentRoute.value
})
console.log('current', current)
const store = layoutStore();
const show = ref(true)
const change = function () {
    show.value = !show.value;
    store.changeisCollapse();
}
const state = reactive({
    circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
})
const { circleUrl } = toRefs(state)

const exit = function () {
    router.push('/login')
}
</script>
<template>
    <div class="headers">
        <div class="left">
            <div class="icon">
                <el-icon size="30" v-if="show" @click="change">
                    <Fold />
                </el-icon>
                <el-icon size="30" v-else @click="change">
                    <Expand />
                </el-icon>
            </div>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>{{ current.meta.title }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="right">
            <el-icon class="pointer" @click="toggle">
                <FullScreen />
            </el-icon>
            <el-icon class="pointer">
                <Message />
            </el-icon>
            <el-avatar class="pointer" :size="30" :src="circleUrl" />
            <el-dropdown class="pointer">
                <span class="el-dropdown-link">
                    设置
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>设置账号</el-dropdown-item>
                        <el-dropdown-item>更改头像</el-dropdown-item>
                        <el-dropdown-item @click="exit">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>
<style lang="less" scoped>
.headers {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .left {
        display: flex;
        align-items: center;

        .icon {
            cursor: pointer;
            margin-right: 10px;
            margin-top: 6px;
        }

        .example-showcase {
            .el-dropdown-link {
                cursor: pointer;
                color: var(--el-color-primary);
                display: flex;
                align-items: center;
            }
        }
    }

    .right {
        display: flex;
        padding-right: 10px;
        width: 140px;
        justify-content: space-between;
        align-items: center;

        .el-icon--right {
            display: none;
        }
    }
}
</style>
<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
import { layoutStore } from '@/stores/layout'
import { useRouter } from 'vue-router'
const router = useRouter();
const store = layoutStore();
const menus: any = computed(() => {
    let menu = router.options.routes.filter((item) => item.children);
    return menu[0].children
})
const defaultActive = ref('')
// ---------------------------------
const isCollapse = computed(() => {
    return store.isCollapse;
})
const handleOpen = (key: string, keyPath: string[]) => {
}
const handleClose = (key: string, keyPath: string[]) => {
}
onMounted(() => {
    defaultActive.value = location.pathname
})
</script>
<template>
    <el-menu background-color="#545c64" text-color="#fff" :default-active="defaultActive" router
        class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
        <template v-for="(item, index) in menus">
            <el-sub-menu :key="index" :index="item.path" v-if="item.children?.length > 0">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>{{ item.meta.title }}</span>
                </template>
                <el-menu-item :index="items.path" v-for="items in item.children">{{ items.meta.title }}</el-menu-item>
            </el-sub-menu>
            <el-menu-item v-else :index="item.path">
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <span slot="title">{{ item.meta.title }}</span>
            </el-menu-item>
        </template>
    </el-menu>
</template>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    border: none;
}
.el-menu--collapse{
    border: none;
}
.el-menu-item.is-active {
    background-color: rgb(231, 235, 240) !important;
}
</style>
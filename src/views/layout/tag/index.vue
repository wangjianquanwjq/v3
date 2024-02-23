<template>
    <div class="tabs">
        <el-scrollbar class="scroll-container">
            <el-tag cla size="large" v-for="(tag, index) in tagList" :key="tag.path" class="pointer" :closable="tag.path !== '/home'"
                :type="tag.path == defaultUrl ? '' : 'info'" @click="handleJump(tag)" @close="handleClose(tag, index)">
                {{ tag?.meta?.title }}
            </el-tag>
        </el-scrollbar>
    </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useTagStore } from '@/stores/layout'

const route = useRoute()
const router = useRouter()
const tagStore = useTagStore()
const { tagList } = storeToRefs(tagStore)

// 高亮当前路由导航的标签页
const defaultUrl = ref('/home')
watch(route, (newVal, oldVal) => {
    defaultUrl.value = newVal.path

}, { deep: true, immediate: true })

// 跳转路由
const handleJump = (tag) => {
    // 重复点击标签，不跳转
    if (route.path === tag.path) return
    router.push(tag.path)
}

// 关闭标签
const handleClose = (tag, i) => {
    // store 删除
    tagStore.delTag(tag)
    // 1.删除非当前模块，正常删除
    if (route.path !== tag.path) return
    // 2.删除当前模块
    if (i === tagList.value.length) {
        // 2.1当前模块属于最后一个模块，删除后需要高亮前一个模块
        handleJump(tagList.value[i - 1])
    } else {
        // 2.2当前模块属于中间模块模块，删除后需要高亮后一个模块
        handleJump(tagList.value[i])
    }
}
</script>
<style lang="less" scoped>
.tabs {
    height: 50px;
    padding: 8px 10px 2px 10px;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px #c8c8c8;
}
</style>
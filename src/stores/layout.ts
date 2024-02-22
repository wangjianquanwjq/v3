import { defineStore } from 'pinia'
// 切换左侧菜单的 展开收缩
export const layoutStore = defineStore('layoutStore', {
    state: () => {
        return { isCollapse: false }
    },
    // 也可以定义为
    // state: () => ({ count: 0 })
    actions: {
        changeisCollapse() {
            this.isCollapse=!this.isCollapse
        },
    },
})

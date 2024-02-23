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
            this.isCollapse = !this.isCollapse
        },
    },
})
export const useTagStore = defineStore('tag', {
    state: () => ({
        tagList: [
            // 初始化默认展示【首页】标签导航
            {
                path: '/home',
                name: 'home',
                meta: { title: '首页' }
            }
        ]
    }),
    getters: {
        tagListGetter: state => state.tagList
    },
    actions: {
        addTag(item:any) {
            this.tagList.push(item)
        },
        delTag(item:any) {
            // 找出要删除的tag的索引值
            const i = this.tagList.findIndex(v => v.path === item.path)
            this.tagList.splice(i, 1)
        }
    },
    // 持久化
    // persist: {
    //     enabled: true, // 开启
    //     strategies: [
    //         {
    //             key: 'tagList',
    //             storage: sessionStorage
    //         }
    //     ]

    // }
})
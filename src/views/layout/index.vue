<script setup lang="ts">
import Aside from './aside/index.vue'
import Header from './header/index.vue'
</script>
<template>
    <div class="common-layout">
        <el-container>
            <el-aside style="width:fit-content;" class="aside">
                <Aside></Aside>
            </el-aside>
            <el-container>
                <el-header class="header">
                    <Header></Header>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<style scoped>
.aside {
    height: 100vh;
    background-color: #545c64;
}

.header {
    background-color: #fff;
    border-bottom: 1px solid #c9c6c6;
    box-sizing: border-box;
    height: 56px;
    box-shadow: 0px 4px 4px #c8c8c8;
}
</style>
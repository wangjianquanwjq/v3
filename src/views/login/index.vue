<script setup lang="ts">
import { ref, } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()//路由
const loginButFun = () => {
  router.push({
    path: '/home'
  })
}
</script>

<template>
  <h3 @click="loginButFun">登录</h3>
</template>

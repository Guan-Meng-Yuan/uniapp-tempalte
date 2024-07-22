<script setup lang="ts">
import { useToast } from 'wot-design-uni'
import api from '@/pages/index/api'

const toast = useToast()
// #ifdef APP-IOS || APP-ANDROID || APP-PLUS || APP-NVUE

// const p = uni.requireNativePlugin('CorsSdk')
// #endif

async function testReq() {
  return await api.test(toast)
}
</script>

<template>
  <div text-30rpx>
    测试
  </div>
  <wd-button @click="testReq">
    测试按钮
  </wd-button>
</template>

<style scoped>

</style>

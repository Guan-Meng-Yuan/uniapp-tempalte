<script setup lang="ts">
import { useToast } from 'wot-design-uni'
import { request } from '@/utils/http'

const toast = useToast()
const p = uni.requireNativePlugin('CorsSdk')
console.log(p.test())
async function testReq() {
  const res = await request(toast, '/test')
  console.log(res)
}
</script>

<template>
  <div text-30rpx>
    测试
  </div>
  <wd-button @click="testReq" />
</template>

<style scoped>

</style>

<script setup lang="ts">
const props = defineProps({
  index: {
    type: Number,
    default: 0,
  },
})

const items = [
  { value: 0, path: '/pages/home/index', isButton: false, title: '首页', icon: 'home' },
  { value: 1, isButton: true, click: () => scan(), title: '点我触发', icon: 'scan' },
  { value: 2, path: '/pages/me/index', isButton: false, title: '我的', icon: 'user' },
]

function scan() {
  console.log('helloWorld')
}

function onTabbarChange({ value }: { value: number }) {
  if (items[value].isButton) {
    // @ts-expect-error 别检查
    items[value].click()
    return
  }
  if (props.index === value) {
    return
  }
  uni.switchTab({
    url: items[value].path as string,
  })
}
</script>

<template>
  <wd-tabbar :model-value="index" placeholder safe-area-inset-bottom fixed @change="onTabbarChange">
    <wd-tabbar-item v-for="item in items" :key="item.value" :title="item.title" :icon="item.icon" />
  </wd-tabbar>
</template>

<style scoped>
.scan-item {
    font-size: 50rpx !important;
}
</style>

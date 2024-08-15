<script lang="ts" setup>
import { setNavColor } from '@/utils'

onLoad(() => {
  setNavColor()
})
</script>

<template>
  <div>首页</div>
  <tabbar :index="0" />
</template>

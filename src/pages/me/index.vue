<script setup lang="ts">
import { setNavColor } from '@/utils'

onLoad(() => {
  setNavColor()
})
</script>

<template>
  <div>我的</div>
  <tabbar :index="2" />
</template>

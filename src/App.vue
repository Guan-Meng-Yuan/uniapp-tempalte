<script setup lang="ts">
import { useMessage } from 'wot-design-uni/components/wd-message-box'

onLaunch(() => {

})
const whiteList = [
  '/pages/home/index',
  '/pages/login/index',
]
const message = useMessage()
uni.addInterceptor('navigateTo', {
  invoke: (args) => {
    if (!whiteList.includes(args.url) && !uni.getStorageSync('TOKEN')) {
      message.confirm({
        title: '提示',
        msg: '未登录,请先登录',
        confirmButtonText: '去登录',
      }).then(() => {
        uni.navigateTo({ url: '/pages/login/index' })
      })
      return false
    }
  },
})
uni.addInterceptor('switchTab', {
  invoke: (args) => {
    if (!whiteList.includes(args.url) && !uni.getStorageSync('TOKEN')) {
      message.confirm({
        title: '提示',
        msg: '未登录,请先登录',
        confirmButtonText: '去登录',
      }).then(() => {
        uni.navigateTo({ url: '/pages/login/index' })
      })
      return false
    }
  },
})
</script>

<style></style>

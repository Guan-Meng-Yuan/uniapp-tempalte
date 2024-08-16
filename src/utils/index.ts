import type { Message } from 'wot-design-uni/components/wd-message-box/types'
import type { Toast } from 'wot-design-uni/components/wd-toast/types'

export function setNavColor() {
  // #ifdef MP-ALIPAY
  // @ts-expect-error 无此类
  my.setNavigationBar({
    frontColor: '#000000',
    backgroundColor: '#f8f8f8',
  })
  // #endif
}

export function whetherTheUserLogsIn(message: Message) {
  const token = uni.getStorageSync('TOKEN')
  if (!token) {
    message.confirm({
      title: '提示',
      msg: '您当前未登录,本服务为商户专用服务,未登录无法使用',
      confirmButtonText: '去登录',
    }).then(() => {
      uni.navigateTo({
        url: '/pages/login/index',
      })
    })
  }
}

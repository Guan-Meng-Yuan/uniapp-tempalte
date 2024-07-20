import type { Toast } from 'wot-design-uni/components/wd-toast/types'

async function request(toast: Toast, url: string, method: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT' = 'GET') {
  try {
    return await uni.request({
      url,
      method,
      header: {
        Authorization: `token`,
      },
    })
  }
  catch (err) {
    toast.error('网络异常')
  }
}

export {
  request,
}

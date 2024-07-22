import type { Toast } from 'wot-design-uni/components/wd-toast/types'

class defHttp {
  private static async callApi<T>(toast: Toast, url: string, method: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT' = 'GET', needLoading: boolean = false, loadingMessage = '加载中') {
    const httpUrl = import.meta.env.VITE_HTTP_URL
    try {
      if (needLoading) {
        toast.loading(loadingMessage)
      }
      const res = await uni.request({
        url: `${httpUrl}${url}`,
        method,
        header: {
          Authorization: `token`,
        },
      })
      const result = res.data as Res<T>
      return result.result
    }
    catch (err: any) {
      toast.error(err.data.tips || '网络异常')
    }
    finally {
      if (needLoading) {
        toast.close()
      }
    }
  }

  static async get<T>(toast: Toast, url: string, needLoading: boolean = false, loadingMessage = '加载中') {
    return defHttp.callApi<T>(toast, url, 'GET', needLoading, loadingMessage)
  }

  static async post<T>(toast: Toast, url: string, needLoading: boolean = false, loadingMessage = '加载中') {
    return defHttp.callApi<T>(toast, url, 'POST', needLoading, loadingMessage)
  }

  static async delete<T>(toast: Toast, url: string, needLoading: boolean = false, loadingMessage = '加载中') {
    return defHttp.callApi<T>(toast, url, 'DELETE', needLoading, loadingMessage)
  }

  static async put<T>(toast: Toast, url: string, needLoading: boolean = false, loadingMessage = '加载中') {
    return defHttp.callApi<T>(toast, url, 'PUT', needLoading, loadingMessage)
  }
}

export { defHttp }

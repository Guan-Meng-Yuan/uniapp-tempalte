class defHttp {
  private static async callApi<T>(requestOption: RequestOption = { loadingMessage: '加载中' }) {
    const httpUrl = import.meta.env.VITE_HTTP_URL
    const ClientType = uni.getSystemInfoSync().uniPlatform
    return new Promise<T>((resolve, reject) => {
      if (requestOption.needLoading) {
        requestOption.toast?.loading(requestOption.loadingMessage || {})
      }
      uni.request({
        url: `${httpUrl}${requestOption.url}`,
        method: requestOption.method,
        data: requestOption.data,
        headers: {
          Authorization: uni.getStorageSync('TOKEN') || '',
          ClientType,
        },
        success: (res) => {
          let data = res.data as Res<T>
          if (typeof data === 'string') {
            data = JSON.parse(data)
          }
          if (res.statusCode !== 200 || !data.success) {
            if (requestOption.needLoading) {
              requestOption.toast?.close()
            }
            requestOption.toast?.error({
              msg: data.tips || '网络异常',
            })
          }
          if (requestOption.needLoading) {
            requestOption.toast?.close()
          }
          resolve(data.result as T)
        },
        fail: (error) => {
          if (requestOption.needLoading) {
            requestOption.toast?.close()
          }
          requestOption.toast?.error({
            msg: '网络异常',
          })
          reject(error)
        },
      })
    })
  }

  static async get<T>(requestOption: RequestOption = { method: 'GET' }) {
    return defHttp.callApi<T>(requestOption)
  }

  static async post<T>(requestOption: RequestOption = { method: 'POST' }) {
    return defHttp.callApi<T>(requestOption)
  }

  static async delete<T>(requestOption: RequestOption = { method: 'DELETE' }) {
    return defHttp.callApi<T>(requestOption)
  }

  static async put<T>(requestOption: RequestOption = { method: 'PUT' }) {
    return defHttp.callApi<T>(requestOption)
  }
}

export { defHttp }

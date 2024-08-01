class defHttp {
  private static async callApi<T>(requestOption: RequestOption) {
    const httpUrl = import.meta.env.VITE_HTTP_URL
    const info = uni.getSystemInfoSync()
    const ClientType = info.uniPlatform
    return new Promise<T>((resolve, reject) => {
      if (requestOption.needLoading) {
        requestOption.toast?.loading(requestOption.loadingMessage || '加载中')
      }
      uni.request({
        url: `${httpUrl}/admin${requestOption.url}`,
        method: requestOption.method,
        data: requestOption.data,
        header: {
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

  static async get<T>(requestOption: RequestOption) {
    requestOption.method = 'GET'
    return defHttp.callApi<T>(requestOption)
  }

  static async post<T>(requestOption: RequestOption) {
    requestOption.method = 'POST'
    return defHttp.callApi<T>(requestOption)
  }

  static async delete<T>(requestOption: RequestOption) {
    requestOption.method = 'DELETE'
    return defHttp.callApi<T>(requestOption)
  }

  static async put<T>(requestOption: RequestOption) {
    requestOption.method = 'PUT'
    return defHttp.callApi<T>(requestOption)
  }
}

export { defHttp }

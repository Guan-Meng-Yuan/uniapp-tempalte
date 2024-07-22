export {}

declare module 'vue' {
  type Hooks = App.AppInstance & Page.PageInstance
  interface ComponentCustomOptions extends Hooks {}
}
declare global{
  interface ImportMetaEnv {
    readonly VITE_HTTP_URL: string
    // 更多环境变量...
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }

  interface Res<T> {
    result: T
    success: boolean
    message: string
    tips: string
  }
}

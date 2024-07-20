import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

import AutoImport from 'unplugin-auto-import/vite'
import Components from '@uni-helper/vite-plugin-uni-components'
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'

// https://vitejs.dev/config/
export default async () => {
  const UnoCSS = (await import('unocss/vite')).default
  return defineConfig({
    plugins: [

      UniLayouts(),
      AutoImport({
        imports: [
          'vue',
          'uni-app',
          'vue-i18n',
        ],
      }),
      UnoCSS(),
      Components({
        resolvers: [WotResolver()],
      }),
      uni(),
    ],

  })
}

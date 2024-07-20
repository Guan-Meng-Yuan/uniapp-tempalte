import { defineConfig, presetIcons, presetTypography } from 'unocss'
import { presetUni } from '@uni-helper/unocss-preset-uni'

export default defineConfig({
  presets: [
    presetUni({
    }),
    presetIcons(),
    // @ts-expect-error 本该如此
    presetTypography(),
  ],
})

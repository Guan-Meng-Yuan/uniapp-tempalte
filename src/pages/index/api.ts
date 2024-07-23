import type { Toast } from 'wot-design-uni/components/wd-toast/types'
import { defHttp } from '@/utils/http'

export default {
  test: (toast: Toast) => defHttp.get<string>({
    toast,
    url: '/test',
  }),
}

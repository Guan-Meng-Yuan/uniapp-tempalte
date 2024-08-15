export function setNavColor() {
  // #ifdef MP-ALIPAY
  // @ts-expect-error 无此类
  my.setNavigationBar({
    frontColor: '#000000',
    backgroundColor: '#f8f8f8',
  })
  // #endif
}

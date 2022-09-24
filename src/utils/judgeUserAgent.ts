export const IOS = 'IOS';
export const ANDROID = 'ANDROID';
export const judgeUserAgent = () => {
  const u = navigator.userAgent;
  const browser = {
    versions: (function getApp() {
      const u = navigator.userAgent;
      // const app = navigator.appVersion;
      return {
        trident: u.indexOf('Trident') > -1, // IE 内核
        presto: u.indexOf('Presto') > -1, // opera 内核
        webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), // 是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios 终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android 终端或者 uc 浏览器
        iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, // 是否为 iPhone 或者 QQ HD 浏览器
        iPad: u.indexOf('iPad') > -1, // 是否 iPad
        webApp: u.indexOf('Safari') === -1, // 是否 web 应该程序，没有头部与底部
      };
    })(),
    language: navigator.language.toLowerCase(),
  };
  if (
    browser.versions.ios ||
    browser.versions.iPhone ||
    browser.versions.iPad
  ) {
    return IOS;
  } else if (browser.versions.android) {
    return ANDROID;
  } else {
    //
  }
};

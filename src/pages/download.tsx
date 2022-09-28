import React, { useEffect } from 'react';
import { IOS_URL, ANDROID_URL } from '../constants/URL';
import { handleNavigate } from '../utils/navigate';

const download = () => {
  useEffect(() => {
    const browser = {
      versions: (function getApp() {
        const u = navigator.userAgent;
        // const app = navigator.appVersion;
        return {
          trident: u.indexOf('Trident') > -1, // IE内核
          presto: u.indexOf('Presto') > -1, // opera内核
          webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
          gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
          mobile:
            !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), // 是否为移动终端
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
          android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
          iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, // 是否为iPhone或者QQHD浏览器
          iPad: u.indexOf('iPad') > -1, // 是否iPad
          webApp: u.indexOf('Safari') === -1, // 是否web应该程序，没有头部与底部
        };
      })(),
      language: navigator.language.toLowerCase(),
    };

    if (
      browser.versions.ios ||
      browser.versions.iPhone ||
      browser.versions.iPad
    ) {
      handleNavigate(IOS_URL);
    } else if (browser.versions.android) {
      handleNavigate(ANDROID_URL);
    } else {
      console.error('error userAgent');
      // navigate('/');
    }
  }, []);

  return <>loading</>;
};

export default download;

# kakao-sdk
Kakao Cordova SDK Plugin Wrapper (카카오 계정 연동 플러그인 Wrapper)

link: https://github.com/raccoondev85/cordova-plugin-kakao-sdk

Kakao Cordova SDK Plugin (카카오 코르도바 SDK 플러그인)

Version is updated to 2.0.0

All functions in KakaoLink SDK are included now.
(see https://developers.kakao.com/docs/ios/kakaotalk-link)

README will be updated soon for HOW-TO.

## Development Environment and ETC
|type|version
|---|---
|ionic (Ionic CLI)|3.19.1
|cordova (Cordova CLI)|8.0.0
|Cordova Platforms Android|6.4.0
|Cordova Platforms IOS|4.5.4
|Ionic Framework|ionic-angular 3.9.2
|KakaoOpenSDK.framework(ios)|1.7.0
|com.kakao.sdk:kakaotalk(android)|1.10.1
|com.kakao.sdk:kakaolink(android)|1.10.1


## How to install
install cordova plugin
```
// KAKAO_APP_KEY: the app key that you got assigned as a native key in the kakao development console
$ cordova plugin add cordova-plugin-kakao-sdk --variable KAKAO_APP_KEY=YOUR_KAKAO_APP_KEY
```

install wrapper for kakao cordova sdk plugin to interface
```
$ npm install --save kakao-sdk
```

then import __KakaoCordovaSDK__ module into app.module.ts
```
import { KakaoCordovaSDK } from 'kakao-sdk';

@NgModule({
  providers: [
    KakaoCordovaSDK
  ]
})
```
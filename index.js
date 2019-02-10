import { Injectable } from '@angular/core';
import { cordova, IonicNativePlugin } from '@ionic-native/core';

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KakaoCordovaSDK = /** @class */ (function(_super) {
    __extends(KakaoCordovaSDK, _super);
    function KakaoCordovaSDK() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    KakaoCordovaSDK.prototype.login = function(loginOptions) {
        return cordova(this, 'login', {}, arguments);
    };
    KakaoCordovaSDK.prototype.logout = function () {
        return cordova(this, 'logout', {}, arguments);
    };
    KakaoCordovaSDK.prototype.unlinkApp = function () {
        return cordova(this, 'unlinkApp', {}, arguments);
    };
    KakaoCordovaSDK.prototype.getAccessToken = function () {
        return cordova(this, 'getAccessToken', {}, arguments);
    };
    KakaoCordovaSDK.prototype.requestMe = function () {
        return cordova(this, 'requestMe', {}, arguments);
    };
    KakaoCordovaSDK.prototype.updateScopes = function (targetScopes) {
        return cordova(this, 'updateScopes', {}, arguments);
    };
    KakaoCordovaSDK.prototype.checkScopeStatus = function (targetScopes) {
        return cordova(this, 'checkScopeStatus', {}, arguments);
    };
    KakaoCordovaSDK.prototype.requestSendMemo = function (builder) {
        return cordova(this, 'requestSendMemo', {}, arguments);
    };
    KakaoCordovaSDK.prototype.addPlusFriend = function (params) {
        return cordova(this, 'addPlusFriend', {}, arguments);
    };
    KakaoCordovaSDK.prototype.chatPlusFriend = function (params) {
        return cordova(this, 'chatPlusFriend', {}, arguments);
    };
    KakaoCordovaSDK.prototype.chatPlusFriendUrl = function (params) {
        return cordova(this, 'chatPlusFriendUrl', {}, arguments);
    };
    KakaoCordovaSDK.prototype.sendLinkFeed = function (feedTemplate) {
        return cordova(this, 'sendLinkFeed', {}, arguments);
    };
    KakaoCordovaSDK.prototype.sendLinkList = function (listTemplate) {
        return cordova(this, 'sendLinkList', {}, arguments);
    };
    KakaoCordovaSDK.prototype.sendLinkLocation = function (locationTemplate) {
        return cordova(this, 'sendLinkLocation', {}, arguments);
    };
    KakaoCordovaSDK.prototype.sendLinkCommerce = function (listTemplate) {
        return cordova(this, 'sendLinkCommerce', {}, arguments);
    };
    KakaoCordovaSDK.prototype.sendLinkText = function (textTemplate) {
        return cordova(this, 'sendLinkText', {}, arguments);
    };
    KakaoCordovaSDK.prototype.sendLinkScrap = function (scrapTemplate) {
        return cordova(this, 'sendLinkScrap', {}, arguments);
    };
    KakaoCordovaSDK.prototype.sendLinkCustom = function (customTemplate) {
        return cordova(this, 'sendLinkCustom', {}, arguments);
    };
    KakaoCordovaSDK.prototype.uploadImage = function (uploadImageConfig) {
        return cordova(this, 'uploadImage', {}, arguments);
    };
    KakaoCordovaSDK.prototype.deleteUploadedImage = function (deleteImageConfig) {
        return cordova(this, 'deleteUploadedImage', {}, arguments);
    };
    KakaoCordovaSDK.prototype.postStory = function (postStoryConfig) {
        return cordova(this, 'postStory', {}, arguments);
    };
    KakaoCordovaSDK.pluginName = 'Kakao Cordova SDK Plugin';
    KakaoCordovaSDK.plugin = 'cordova-plugin-kakao-sdk';
    KakaoCordovaSDK.pluginRef = 'KakaoCordovaSDK';
    KakaoCordovaSDK.repo = 'https://github.com/raccoondev85/cordova-plugin-kakao-sdk';
    KakaoCordovaSDK.platforms = ['Android', 'iOS'];
    KakaoCordovaSDK = __decorate([
        Injectable()
    ], KakaoCordovaSDK);
    return KakaoCordovaSDK;
})(IonicNativePlugin);
export { KakaoCordovaSDK };

export var AuthTypes;
(function(AuthTypes) {
    AuthTypes[(AuthTypes['AuthTypeTalk'] = 1)] = 'AuthTypeTalk';
    AuthTypes[(AuthTypes['AuthTypeStory'] = 2)] = 'AuthTypeStory';
    AuthTypes[(AuthTypes['AuthTypeAccount'] = 3)] = 'AuthTypeAccount';
})(AuthTypes || (AuthTypes = {}));
export var ScrapType;
(function(ScrapType) {
    ScrapType[(ScrapType['ScrapTypeNone'] = 0)] = 'ScrapTypeNone';
    ScrapType[(ScrapType['ScrapTypeWebsite'] = 1)] = 'ScrapTypeWebsite';
    ScrapType[(ScrapType['ScrapTypeVideo'] = 2)] = 'ScrapTypeVideo';
    ScrapType[(ScrapType['ScrapTypeMusic'] = 3)] = 'ScrapTypeMusic';
    ScrapType[(ScrapType['ScrapTypeBook'] = 4)] = 'ScrapTypeBook';
    ScrapType[(ScrapType['ScrapTypeArticle'] = 5)] = 'ScrapTypeArticle';
    ScrapType[(ScrapType['ScrapTypeProfile'] = 6)] = 'ScrapTypeProfile';
})(ScrapType || (ScrapType = {}));
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
var KakaoCordovaSDK = (function (_super) {
    __extends(KakaoCordovaSDK, _super);
    function KakaoCordovaSDK() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KakaoCordovaSDK.prototype.login = function (loginOptions) {
        return;
    };
    KakaoCordovaSDK.prototype.logout = function () {
        return;
    };
    KakaoCordovaSDK.prototype.unlinkApp = function () {
        return;
    };
    KakaoCordovaSDK.prototype.getAccessToken = function () {
        return;
    };
    KakaoCordovaSDK.prototype.requestMe = function () {
        return;
    };
    KakaoCordovaSDK.prototype.sendLinkFeed = function (feedTemplate) {
        return;
    };
    KakaoCordovaSDK.prototype.sendLinkList = function (listTemplate) {
        return;
    };
    KakaoCordovaSDK.prototype.sendLinkLocation = function (locationTemplate) {
        return;
    };
    KakaoCordovaSDK.prototype.sendLinkCommerce = function (listTemplate) {
        return;
    };
    KakaoCordovaSDK.prototype.sendLinkText = function (textTemplate) {
        return;
    };
    KakaoCordovaSDK.prototype.sendLinkScrap = function (scrapTemplate) {
        return;
    };
    KakaoCordovaSDK.prototype.sendLinkCustom = function (customTemplate) {
        return;
    };
    KakaoCordovaSDK.prototype.uploadImage = function (uploadImageConfig) {
        return;
    };
    KakaoCordovaSDK.prototype.deleteUploadedImage = function (deleteImageConfig) {
        return;
    };
    KakaoCordovaSDK.prototype.postStory = function (postStoryConfig) {
        return;
    };
    KakaoCordovaSDK.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    KakaoCordovaSDK.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], KakaoCordovaSDK.prototype, "login", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], KakaoCordovaSDK.prototype, "logout", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], KakaoCordovaSDK.prototype, "unlinkApp", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], KakaoCordovaSDK.prototype, "getAccessToken", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], KakaoCordovaSDK.prototype, "requestMe", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], KakaoCordovaSDK.prototype, "sendLinkFeed", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], KakaoCordovaSDK.prototype, "sendLinkList", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], KakaoCordovaSDK.prototype, "sendLinkLocation", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], KakaoCordovaSDK.prototype, "sendLinkCommerce", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], KakaoCordovaSDK.prototype, "sendLinkText", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], KakaoCordovaSDK.prototype, "sendLinkScrap", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], KakaoCordovaSDK.prototype, "sendLinkCustom", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], KakaoCordovaSDK.prototype, "uploadImage", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], KakaoCordovaSDK.prototype, "deleteUploadedImage", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], KakaoCordovaSDK.prototype, "postStory", null);
    KakaoCordovaSDK = __decorate([
        Plugin({
            pluginName: 'Kakao Cordova SDK Plugin',
            plugin: 'cordova-plugin-kakao-sdk',
            pluginRef: 'KakaoCordovaSDK',
            repo: 'https://github.com/raccoondev85/cordova-plugin-kakao-sdk',
            platforms: ['Android', 'iOS'],
        })
    ], KakaoCordovaSDK);
    return KakaoCordovaSDK;
}(IonicNativePlugin));
export { KakaoCordovaSDK };
export var AuthTypes;
(function (AuthTypes) {
    AuthTypes[AuthTypes["AuthTypeTalk"] = 1] = "AuthTypeTalk";
    AuthTypes[AuthTypes["AuthTypeStory"] = 2] = "AuthTypeStory";
    AuthTypes[AuthTypes["AuthTypeAccount"] = 3] = "AuthTypeAccount";
})(AuthTypes || (AuthTypes = {}));
export var ScrapType;
(function (ScrapType) {
    ScrapType[ScrapType["ScrapTypeNone"] = 0] = "ScrapTypeNone";
    ScrapType[ScrapType["ScrapTypeWebsite"] = 1] = "ScrapTypeWebsite";
    ScrapType[ScrapType["ScrapTypeVideo"] = 2] = "ScrapTypeVideo";
    ScrapType[ScrapType["ScrapTypeMusic"] = 3] = "ScrapTypeMusic";
    ScrapType[ScrapType["ScrapTypeBook"] = 4] = "ScrapTypeBook";
    ScrapType[ScrapType["ScrapTypeArticle"] = 5] = "ScrapTypeArticle";
    ScrapType[ScrapType["ScrapTypeProfile"] = 6] = "ScrapTypeProfile";
})(ScrapType || (ScrapType = {}));
//# sourceMappingURL=index.js.map
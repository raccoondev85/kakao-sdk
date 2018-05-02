import { IonicNativePlugin } from '@ionic-native/core';
export declare class KakaoCordovaSDK extends IonicNativePlugin {
    login(loginOptions?: any): Promise<any>;
    logout(): Promise<any>;
    unlinkApp(): Promise<any>;
    getAccessToken(): Promise<string>;
    requestMe(): Promise<string>;
    sendLinkFeed(feedTemplate: KLFeedTemplate): Promise<string>;
    sendLinkList(listTemplate: KLListTemplate): Promise<string>;
    sendLinkLocation(locationTemplate: KLLocationTemplate): Promise<string>;
    sendLinkCommerce(listTemplate: KLCommerceTemplate): Promise<string>;
    sendLinkText(textTemplate: KLTextTemplate): Promise<string>;
    sendLinkScrap(scrapTemplate: KLScrapTemplate): Promise<string>;
    sendLinkCustom(customTemplate: KLCustomTemplate): Promise<string>;
    uploadImage(uploadImageConfig: KLUploadImageConfig): Promise<string>;
    deleteUploadedImage(deleteImageConfig: KLDeleteImageConfig): Promise<string>;
    postStory(postStoryConfig: KLPostStoryConfig): Promise<string>;
}
export declare enum ScrapType {
    ScrapTypeNone = 0,
    ScrapTypeWebsite,
    ScrapTypeVideo,
    ScrapTypeMusic,
    ScrapTypeBook,
    ScrapTypeArticle,
    ScrapTypeProfile,
}
export interface KLPostStoryUrlInfo {
    title: string;
    desc?: string;
    imageURLs?: string[];
    type?: ScrapType;
}
export interface KLPostStoryConfig {
    post: string;
    appid?: string;
    appver: string;
    appname?: string;
    urlinfo?: KLPostStoryUrlInfo;
}
export interface KLDeleteImageConfig {
    url: string;
}
export interface KLUploadImageConfig {
    fileOrUrl: 'file' | 'url';
    url?: string;
}
export interface KLCustomTemplate {
    templateId: string;
    title?: string;
    description?: string;
}
export interface KLScrapTemplate {
    url: string;
}
export interface KLTextTemplate {
    text: string;
    link: KLLinkObject;
    buttonTitle?: string;
    buttons?: KLButtonObject[];
}
export interface KLCommerceTemplate {
    content: KLContentObject;
    commerce: KLCommerceObject;
    buttonTitle?: string;
    buttons?: KLButtonObject[];
}
export interface KLLocationTemplate {
    address: string;
    content: KLContentObject;
    addressTitle?: string;
    social?: KLSocialObject;
    buttonTitle?: string;
    buttons?: KLButtonObject[];
}
export interface KLListTemplate {
    headerTitle: string;
    headerLink: KLLinkObject;
    contents: KLContentObject[];
    buttonTitle?: string;
    buttons?: KLButtonObject[];
}
export interface KLFeedTemplate {
    content: KLContentObject;
    social?: KLSocialObject;
    buttonTitle?: string;
    buttons?: KLButtonObject[];
}
export interface KLContentObject {
    title: string;
    link: KLLinkObject;
    imageURL: string;
    desc?: string;
    imageWidth?: string;
    imageHeight?: string;
}
export interface KLLinkObject {
    webURL?: string;
    mobileWebURL?: string;
    androidExecutionParams?: string;
    iosExecutionParams?: string;
}
export interface KLSocialObject {
    likeCount?: number;
    commentCount?: number;
    sharedCount?: number;
    viewCount?: number;
    subscriberCount?: number;
}
export interface KLButtonObject {
    title: string;
    link: KLLinkObject;
}
export interface KLCommerceObject {
    regularPrice: number;
    discountPrice?: number;
    discountRate?: number;
    fixedDiscountPrice?: number;
}
export declare enum AuthTypes {
    AuthTypeTalk = 1,
    AuthTypeStory,
    AuthTypeAccount,
}

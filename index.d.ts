import { IonicNativePlugin } from '@ionic-native/core';
export declare class KakaoCordovaSDK extends IonicNativePlugin {
    login(loginOptions?: any): Promise<any>;
    logout(): Promise<any>;
    unlinkApp(): Promise<any>;
    getAccessToken(): Promise<string>;
}
export declare enum AuthTypes {
    AuthTypeTalk = 1,
    AuthTypeStory = 2,
    AuthTypeAccount = 3,
}

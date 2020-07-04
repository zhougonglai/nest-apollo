
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class LoginByPwdInput {
    countryCode: number;
    pwdEncry: string;
    type: string;
    username: string;
}

export class User {
    ageScope?: string;
    birthday?: string;
    cityCode?: number;
    cityId?: number;
    cityName?: string;
    countryCode?: number;
    countyId?: number;
    createTime?: string;
    dbId?: number;
    email?: string;
    gameId?: number;
    isDelete?: boolean;
    nickName: string;
    nnNumber: string;
    page?: number;
    pageSize?: number;
    password?: string;
    provinceCode?: number;
    provinceId?: number;
    provinceName?: string;
    pwdEncry?: string;
    salt?: string;
    sex?: string;
    signature?: string;
    smsCode?: string;
    smsCodeKey?: string;
    srcChannel?: string;
    status?: string;
    telNum?: string;
    token: string;
    updaeTime?: string;
    userId: string;
    userType?: string;
    userUrl?: string;
    userUrlNn?: string;
    username?: string;
}

export abstract class IQuery {
    abstract loginByPwd(loginByPwdInput?: LoginByPwdInput): User | Promise<User>;
}

import Joi from 'joi';
import { ObjectSchema } from 'joi';

import { IBaseDto } from "../i.base.dto";
import { RequestQueryExtractor } from '../request.query.extractor';

export interface ISignupUserDto {
    userId : string,
    email : string,
    password : string,
    passwordCheck : string
    token : string
};

export class SignupUserDto extends RequestQueryExtractor<string> implements IBaseDto, ISignupUserDto {
    userId : string;
    email : string;
    password : string;
    passwordCheck : string;
    token : string;

    constructor({
        userId,
        email,
        password,
        passwordCheck,
        token
    } : {
        userId : string;
        email : string;
        password : string;
        passwordCheck : string;
        token : string
    }) {
        super();

        this.userId = userId;
        this.email = email;
        this.password = password;
        this.passwordCheck = passwordCheck;
        this.token = token;
    };

    getJoiInstance(): ObjectSchema<SignupUserDto> {
        return Joi.object<SignupUserDto>({
            userId : Joi.string().trim().min(2).max(20)
            .message("User의 ID는 자유롭게 입력이 가능하나 2글자 이상, 20자 미만이여야 합니다.").required(),
            email : Joi.string().trim()
            .message("Email의 dot. 은 자유롭게 입력이 가능하나 기본적으로 xxxx@yyyyy.zzz 형식이어야 합니다.").required(),
            password : Joi.string().trim().min(8).max(16).regex(/[!@#]{1,}/)
            .regex(/[^[!@#]|[^\w\d]]|[ㄱ-ㅎㅏ-ㅣ가-힣]/)
            .message("비밀번호는 8자리 이상 16자리 이하의 영문, 숫자 조합입니다. (특수문자 !@# 는 1개 가 반드시 포함되어야 합니다.)").required()
        })
    }
}
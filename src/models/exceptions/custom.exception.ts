import { TERROR_CODE } from "../../constants/_.loader";

export type TCustomException = Error;

export class CustomException implements TCustomException {
    name : string;
    message  : string;
    statusCode : number;
    errorCode : TERROR_CODE;
    errorResult : object

    constructor(message : string, errorCode? : TERROR_CODE, errorResult? : object){
        this.name = "CustomException";
        this.message = message;
        this.statusCode = 500;
        this.errorCode = errorCode ?? "UnKnown";
        this.errorResult = errorResult ?? {};
    }
};

export class ValidationException extends CustomException {

};

export class BadRequestException extends CustomException {
    name : string;
    statusCode : number;

    constructor(message : string, errorCode? : TERROR_CODE, errorResult? : object){
        super(message, errorCode, errorResult);

        this.name = "BadRequestException";
        this.statusCode = 401;
    }
}
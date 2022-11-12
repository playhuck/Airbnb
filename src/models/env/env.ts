
export interface IJwt {
    ACCESS_EXPIRED_IN : string,
    REPRESH_EXPIRED_IN : string,
    VERIFY_EXPIRED_IN : string,

    HASH : string,

    JWT_SECRET_KEY : string
};

export interface IMysql {
    HOST : string,
    USER : string,
    PORT : string,
    DATABASE : string,
    PASSWORD : string,
    CONNECTION_LIMIT : string
}

export interface IAws {
    AWS_ACCESS_KEY : string,
    AWS_SECRET_ACCESS_KEY : string,
    AWS_REGION : string
}
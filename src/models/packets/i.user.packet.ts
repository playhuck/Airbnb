import { RowDataPacket } from "mysql2/promise";

export interface IUserPacket extends RowDataPacket {
    userId : string,
    nickname : string,
    email : string,
    password : string
};

export interface IUserRefreshTokenPacket extends RowDataPacket {
    userId : string,
    refreshToken : string
};

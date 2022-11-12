

export interface IUserDto {
    userId : string,
    nickname : string,
    email : string,
    password : string
};

export class UserDto implements IUserDto {
    userId : string;
    nickname : string;
    email : string;
    password : string;

    constructor(userDto : {
        userId : string;
        nickname : string;
        email : string;
        password : string;
    }) {
        this.userId = userDto.userId;
        this.nickname = userDto.nickname;
        this.email = userDto.email;
        this.password = userDto.password;
    }
};
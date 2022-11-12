import { FieldPacket, PoolConnection, ResultSetHeader, RowDataPacket } from "mysql2/promise";

import {
    IUserPacket,
    IUserRefreshTokenPacket
} from "../../models/_.loader";

export class AuthRepository {

    public userExistanceWhether = async (
        conn : PoolConnection, userId : string
    ) : Promise<IUserPacket | null> => {
        const userExistance = await conn.query(`SELECT * FROM user WHERE userId=?`, [userId]);
        return userExistance[0]
    }
}
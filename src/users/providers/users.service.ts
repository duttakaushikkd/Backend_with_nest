import { Injectable } from "@nestjs/common";

/** Class to provide user service */
@Injectable()
export class UsersService{

    /** This is a get service command */
    public getUsersService():string{
        return 'This is a service';
    }
}
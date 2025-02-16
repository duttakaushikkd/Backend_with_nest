import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService{

    public getUsersService():string{
        return 'This is a service';
    }
}
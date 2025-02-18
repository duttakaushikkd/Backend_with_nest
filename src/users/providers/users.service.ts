import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user.entity";
import { Repository } from "typeorm";
import { CreateUseDTO } from "../dtos/create-user.dto";

/** Class to provide user service */
@Injectable()
export class UsersService{

    constructor(

        @InjectRepository(User)
        private usersRepository: Repository<User>
    ){}

    /** This is a get service command */
    public getUsersService():string{
        return 'This is a service';
    }

    public async createUser(createUserDTO: CreateUseDTO): Promise<User>{
        const newUser = this.usersRepository.create(createUserDTO);
        return await this.usersRepository.save(newUser);
    }
}
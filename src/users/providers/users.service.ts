import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user.entity";
import { Repository } from "typeorm";
import { CreateUseDTO } from "../dtos/create-user.dto";
import { ConfigService } from "@nestjs/config";

/** Class to provide user service */
@Injectable()
export class UsersService{

    constructor(

        @InjectRepository(User)
        private usersRepository: Repository<User>,

        private readonly configService: ConfigService



    ){}

    /** This is a get service command */
    public getUsersService():string{
        return 'This is a service';
        // const environment = this.configService.get('S3_BUCKET');
        // console.log(environment)
    }

    public async createUser(createUserDTO: CreateUseDTO): Promise<User>{
        const newUser = this.usersRepository.create(createUserDTO);
        return await this.usersRepository.save(newUser);
    }

    public getEnvironment(){
        // const environment = process.env.NODE_ENV;
        console.log(this.configService.get('S3_BUCKET'));
        return this.configService.get('S3_BUCKET');
    }
}
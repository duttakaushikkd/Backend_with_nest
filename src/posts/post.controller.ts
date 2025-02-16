import { Controller, Get } from "@nestjs/common";
import { PostService } from "./providers/post.service";
import { UsersService } from "src/users/providers/users.service";
import { ApiTags } from "@nestjs/swagger";

@Controller('posts')
@ApiTags('Posts')
export class PostController {

    constructor(private readonly postService:PostService, private readonly userService:UsersService){}

     @Get()
     public getPosts(){
         return 'This action returns all posts';
     }

     @Get('service')
     public getPostsService(){
         return this.postService.getPosts();
     }

     @Get('users')
        public getUsers(){
            return this.userService.getUsersService();
        }



     
}
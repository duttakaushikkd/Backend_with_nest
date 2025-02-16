import { Injectable } from "@nestjs/common";

@Injectable()
export class PostService {


    getPosts(): string {
        return 'This action returns all service posts';
    }
}
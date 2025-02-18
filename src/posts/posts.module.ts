import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './providers/post.service';
import { UsersService } from 'src/users/providers/users.service';
import { UsersModule } from '../users/users.module';

@Module({
    controllers:[PostController],
    providers:[PostService],
    imports:[UsersModule],
})
export class PostsModule {
}

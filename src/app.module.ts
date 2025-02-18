import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';

@Module({
  imports: [UsersModule, PostsModule, AuthModule,  TypeOrmModule.forRootAsync({imports:[], inject:[],
                                                        useFactory:()=>({type: 'postgres', entities:[User],host: 'localhost', port: 5432, username  : 'postgres', password: 'root', database: 'nestjs-intro', synchronize: true})})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

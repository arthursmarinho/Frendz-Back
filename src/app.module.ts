import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsService } from './posts/posts.service';
import { PostsModule } from './posts/posts.module';
import { PostController } from './posts/posts.controller';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [PostsModule, UserModule],
  controllers: [AppController, PostController, UserController],
  providers: [AppService, PostsService, UserService],
})
export class AppModule {}

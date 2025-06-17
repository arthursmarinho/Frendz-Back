import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsService } from './posts/posts.service';
import { PostsModule } from './posts/posts.module';
import { PostController } from './posts/posts.controller';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { ChatController } from './chat/chat.controller';
import { ChatService } from './chat/chat.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PostsModule, UserModule, PrismaModule],
  controllers: [AppController, PostController, UserController, ChatController],
  providers: [AppService, PostsService, UserService, ChatService],
})
export class AppModule {}

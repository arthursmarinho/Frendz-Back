import {
  Body,
  Controller,
  Post,
  Get,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostsService) {}

  @Post()
  create(@Body() createUserDto: CreatePostDto) {
    return this.postService.createPost(createUserDto);
  }

  @Get()
  list() {
    return this.postService.listPosts();
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.postService.deletePost(id);
  }
}

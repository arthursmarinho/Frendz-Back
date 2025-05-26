import { Body, Controller, Post, Get, Req, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { FirebaseAuthGuard } from 'lib/firebase/firebase-auth.guard';
@Controller('posts')
export class PostController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getAllPosts() {
    return this.postsService.getAllPosts();
  }

  @UseGuards(FirebaseAuthGuard)
  @Post('createpost')
  async create(@Body() createPostDto: CreatePostDto, @Req() req) {
    const userName = req.user.name || req.user.email || req.user.uid;

    return this.postsService.createPost(createPostDto);
  }
}

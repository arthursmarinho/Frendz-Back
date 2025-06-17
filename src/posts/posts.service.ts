import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Post as PostModel } from 'generated/prisma';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async createPost(dto: CreatePostDto): Promise<PostModel> {
    return this.prisma.post.create({ data: dto });
  }

  async listPosts(): Promise<PostModel[]> {
    return this.prisma.post.findMany();
  }

  async deletePost(id: string): Promise<PostModel> {
    return this.prisma.post.delete({ where: { id: String(id) } });
  }
}

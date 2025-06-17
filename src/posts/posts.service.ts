import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Post } from '@prisma/client'; // Tipo gerado automaticamente

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async createPost(dto: CreatePostDto): Promise<Post> {
    return this.prisma.post.create({ data: dto });
  }

  async listPosts(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  async deletePost(id: string): Promise<Post> {
    return this.prisma.post.delete({ where: { id } });
  }
}

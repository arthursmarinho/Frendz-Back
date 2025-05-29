// posts.service.ts
import { Injectable } from '@nestjs/common';
import { db } from 'lib/firebase/firebase';
import { CreatePostDto } from './dto/create-post.dto';
import { Timestamp } from 'firebase-admin/firestore';

@Injectable()
export class PostsService {
  async createPost(dto: CreatePostDto) {
    const docRef = await db.collection('posts').add({
      postTitle: dto.postTitle,
      userName: dto.userName,
      userPhoto: dto.userPhoto,
      userUid: dto.userUid,
      createdAt: Timestamp.now(),
    });

    return { id: docRef.id };
  }

  async getAllPosts(): Promise<Post[]> {
    const snapshot = await db.collection('posts').get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Post[];
  }

  async deletePost(id: string) {
    await db.collection('posts').doc(id).delete();
    return { message: 'Post deletado com sucesso' };
  }
}

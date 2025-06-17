import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  postTitle;
  @IsString()
  userName: string;
  @IsString()
  userPhoto: string;
  @IsString()
  userUid: string;
}

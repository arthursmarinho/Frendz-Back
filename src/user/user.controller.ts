import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/me')
  async getMe(@Query('userId') userId: string) {
    return this.userService.getMe(userId);
  }
}

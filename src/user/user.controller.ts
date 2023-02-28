import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body() userData: { name: string; email: string; password: string },
  ) {
    return this.userService.createUser(userData);
  }

  @Get()
  async listUsers() {
    return this.userService.listUsers();
  }
}

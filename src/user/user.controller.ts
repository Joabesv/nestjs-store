import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    const createdUser = await this.userService.createUser(userData);
    return { id: createdUser.id, msg: 'User created successfully' };
  }

  @Get()
  async listUsers() {
    return this.userService.listUsers();
  }
}

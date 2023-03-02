import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { ListUserDTO } from './dto/UserList.dto';
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
    const users = await this.userService.listUsers();
    const listedUsers = users.map(
      (user) => new ListUserDTO(user.id, user.name),
    );

    return listedUsers;
  }
}

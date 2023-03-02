import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { UpdateUserDTO } from './dto/UpdateUser.dto';
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

  @Put('/:id')
  async updateUser(@Param('id') id: number, @Body() newData: UpdateUserDTO) {
    const updatedUser = await this.userService.update(id, newData);
    return {
      user: updatedUser,
      msg: 'User updated',
    };
  }

  @Delete('/:id')
  async removeUser(@Param('id') id: number) {
    const userToRemove = await this.userService.deleteUser(id);
    return {
      user: userToRemove,
      msg: 'removed successfully',
    };
  }
}

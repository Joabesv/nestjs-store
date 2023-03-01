import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { IsEmailUnique } from './validation/unique-email';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, PrismaService, IsEmailUnique],
})
export class UserModule {}

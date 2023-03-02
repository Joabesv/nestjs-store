import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data,
    });
  }

  async listUsers() {
    return this.prisma.user.findMany();
  }

  async existsWithEmail(email: string) {
    const userEmail = this.prisma.user.findUnique({
      where: { email },
    });

    if (!userEmail) {
      throw new Error('does not exist');
    }

    return userEmail;
  }
}

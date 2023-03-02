import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { isEmailUnique } from '../validation/unique-email';

export class UpdateUserDTO {
  @IsNotEmpty()
  @IsOptional()
  name!: string;

  @IsEmail()
  @isEmailUnique({ message: 'User with this email already exists' })
  @IsOptional()
  email!: string;

  @MinLength(6)
  @IsOptional()
  password!: string;
}

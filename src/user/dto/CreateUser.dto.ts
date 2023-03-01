import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { isEmailUnique } from '../validation/unique-email';

export class CreateUserDTO {
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  @IsNotEmpty()
  @isEmailUnique({ message: 'User with this email already exists' })
  email!: string;

  @MinLength(6)
  password!: string;
}

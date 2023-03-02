import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserService } from '../user.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsEmailUnique implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}

  async validate(email: string, validationArguments?: ValidationArguments) {
    const isUserWithEmail = await this.userService.existsWithEmail(email);
    return !isUserWithEmail;
  }
}

export const isEmailUnique = (validationOpts: ValidationOptions) => {
  return (obj: object, props: string) => {
    registerDecorator({
      target: obj.constructor,
      propertyName: props,
      options: validationOpts,
      constraints: [],
      validator: IsEmailUnique,
    });
  };
};

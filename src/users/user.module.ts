import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

@Module({
    controllers: [UsersController]//association of the controller with the module
}) //decorator
// This is a decorator that marks the class as a NestJS module
// It takes an object as an argument, which can contain properties like imports, controllers, providers, etc.
export class UserModule{
    
}
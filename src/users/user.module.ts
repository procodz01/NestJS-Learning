import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    controllers: [UsersController],//association of the controller with the module
    providers: [UserService],
    exports: [UserService], //exporting the UserService so that it can be used in other modules
    imports: [forwardRef(() => AuthModule)], //importing the AuthModule so that it can be used in this module
}) //decorator
// This is a decorator that marks the class as a NestJS module
// It takes an object as an argument, which can contain properties like imports, controllers, providers, etc.
export class UserModule{
    
}
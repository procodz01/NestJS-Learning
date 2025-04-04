import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/users/users.service';
import { UserModule } from 'src/users/user.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [forwardRef(() => UserModule)], // Importing UserModule to use UserService
  exports: [AuthService], // Exporting AuthService to be used in other modules
})
export class AuthModule {}

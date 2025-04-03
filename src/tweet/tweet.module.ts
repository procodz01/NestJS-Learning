import { Module } from '@nestjs/common';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';
import { UserModule } from 'src/users/user.module';

@Module({
  controllers: [TweetController],
  providers: [TweetService],
  imports: [UserModule] // Importing UserService to use it in TweetService
})
export class TweetModule {}

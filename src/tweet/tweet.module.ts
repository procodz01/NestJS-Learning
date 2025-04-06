import { Module } from '@nestjs/common';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';
import { UserModule } from 'src/users/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Tweet, TweetSchema } from 'src/schemas/tweet.schema';

@Module({
  controllers: [TweetController],
  providers: [TweetService],
  imports: [UserModule, MongooseModule.forFeature([{
    name: Tweet.name,
    schema: TweetSchema,
  }])] // Importing UserService to use it in TweetService
})
export class TweetModule {}

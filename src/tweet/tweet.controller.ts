import { Body, Controller, Param, Post } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { CreateTweetDto } from './dto/tweet.dto';

@Controller('tweet')
export class TweetController {
  constructor(private readonly tweetService: TweetService) {}

  @Post(':userId')
  async createTweet(
    @Param('userId') userId: string, // Get userId from route parameter
    @Body() createTweetDto: CreateTweetDto,
  ) {
    return this.tweetService.createTweet(userId, createTweetDto);
  }
}

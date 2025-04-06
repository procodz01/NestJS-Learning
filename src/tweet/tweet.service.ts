import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tweet } from 'src/schemas/tweet.schema';
import { CreateTweetDto } from './dto/tweet.dto';

@Injectable()
export class TweetService {
  constructor(
    @InjectModel(Tweet.name) private readonly tweetModel: Model<Tweet>,
  ) {}

  async createTweet(userId: string, createTweetDto: CreateTweetDto): Promise<Tweet> {
    const newTweet = new this.tweetModel({
      userId, // Save the userId from the route parameter
      tweet: createTweetDto.content, // Save the tweet content
    });
    return await newTweet.save();
  }
}

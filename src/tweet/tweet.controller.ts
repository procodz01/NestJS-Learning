import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweet')
export class TweetController {
    constructor(private tweetService: TweetService){
    }

    // @Get(':id')
    // getAllTweets(@Param('id', ParseIntPipe)  id: number){
    //     // return this.tweetService.getAllTweets(id);
    //     return this.tweetService.getAllTweets(id);


    // }
}

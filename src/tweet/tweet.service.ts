import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';

@Injectable()
export class TweetService {

    constructor(private readonly userService: UserService){

    }

    // tweets: { id: number; content: string; userId: number }[] = [
    //     { id: 1, content: 'Hello World', userId: 1 },
    //     { id: 2, content: 'Hello World 2', userId: 2 },
    //     { id: 3, content: 'Hello World 3', userId: 1 },
    //     { id: 4, content: 'Hello World 4', userId: 2 },
    //     { id: 5, content: 'Hello World 5', userId: 3 },
    // ]

    // getAllTweets(id: number){
    //     // console.log(this.tweets);
    //     // const tweet = this.tweets.filter(tweet => tweet.userId === id);
    //     // return tweet;
    //     const user = this.userService.getUserById(id);
    //     // console.log(user?.name);
    //     // const userNmae = user.name;
    //     const userTweets = this.tweets.filter(tweet => tweet.userId === id);
    //     const res = userTweets.map(tweet => {
    //         return {
    //             content: tweet.content,
    //             name: user?.name,
    //         }
    //     })
    //     return res;
    // }
}

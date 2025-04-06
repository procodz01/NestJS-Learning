import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema()
export class Tweet{
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true})
    userId: mongoose.Schema.Types.ObjectId;

    @Prop({required: true})
    tweet: string;

    
}

export const TweetSchema = SchemaFactory.createForClass(Tweet); // this will create the schema for the user model
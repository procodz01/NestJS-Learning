import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Tweet } from "./tweet.schema";

@Schema()
export class User{
    @Prop({required: true}) // this is a decorator to define the property for example required, unique, etc
    name: string;

    @Prop({unique: true,
        required: true,
    })
    email: string;

    @Prop({required: true})
    password: string;

    @Prop({required: true})
    country: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Tweet'})
    tweet: Tweet
}

export const UserSchema = SchemaFactory.createForClass(User); // this will create the schema for the user model
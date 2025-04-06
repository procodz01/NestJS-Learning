import { IsEmpty, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTweetDto{
    
    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    userId: string;
}
import { Type } from "class-transformer";
import { IsBoolean, IsOptional } from "class-validator";

export class GetUserParamDto {
    @IsOptional()//making param optional
    @IsBoolean()
    @Type(() => Boolean)//transforming the value to boolean by default it will be string if there are multiple params it will be in key value pair
    isMarried: boolean;
}
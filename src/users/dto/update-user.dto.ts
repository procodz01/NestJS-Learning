//following DRY principle, we are using PartialType to create a new class that extends the CreateUserDto class
import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";

//mapped-types is used to create a new class that extends the base class
export class UpdateUserDto extends PartialType(CreateUserDto){//partial type is used to make all the properties optional it will make all the properties of CreateUserDto optional

} 











// import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

// export class UpdateUserDto{
//     @IsOptional()
//     @IsNumber()
//     id?: number;

//     @IsOptional()
//     @IsString()
//     @MaxLength(20, {message: 'Name is too long. Max length is $constraint1 characters, but actual is $value'})
//     @MinLength(4, {message: 'Name is too short. Min length is $constraint1 characters, but actual is $value'})
//     @IsNotEmpty()
//     name?: string;

//     @IsString()
//     @IsOptional()
//     @IsEmail()
//     email?: string;

//     @IsString()
//     @IsOptional()
//     country?: string;

//     @IsBoolean()
//     @IsOptional()
//     isMarried?: boolean;

//     @IsOptional()
//     @IsString()
//     gender?: string;
// }
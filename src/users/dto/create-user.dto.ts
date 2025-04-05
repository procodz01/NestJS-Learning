import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
//Dto (Data Transfer Object) is a design pattern used to transfer data between software application subsystems or layers. In NestJS, DTOs are often used to define the shape of data that is sent over the network, such as in HTTP requests and responses. They help ensure that the data conforms to a specific structure and can be validated before being processed by the application.
//DTOs are typically defined as classes with properties that represent the data fields, and they can include validation decorators to enforce rules on the data. For example, you might use decorators like @IsString(), @IsEmail(), or @IsInt() to specify the expected types of the properties.
export class CreateUserDto{
    
    @IsString()
    @MaxLength(20, {message: 'Name is too long. Max length is $constraint1 characters, but actual is $value'})
    @MinLength(4, {message: 'Name is too short. Min length is $constraint1 characters, but actual is $value'})
    @IsNotEmpty()
    name?: string;

    @IsString()
    @IsEmail()
    email?: string;

    @MinLength(6, {message: 'Password is too short. Min length is $constraint1 characters, but actual is $value'})
    @MaxLength(20, {message: 'Password is too long. Max length is $constraint1 characters, but actual is $value'})
    @IsNotEmpty()
    password?: string; 

    @IsString()
    country?: string;

}
import { Body, Controller, DefaultValuePipe, Delete, Get, HttpException, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { GetUserParamDto } from "./dto/get-user-param.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import mongoose from "mongoose";

@Controller('users')// This decorator marks the class as a controller
//url - localhost:3000/users
export class UsersController{
    // @Get()//decorator to handle GET requests
    // getUsers(){
    //     const userService = new UserService();//getting the instance of the service
    //     return userService.getAllUsers();
    // }
    // userService : UserService;//getting the instance of the service
    constructor(private userService: UserService){// this is how we inject the service in the controller
        //getting the instance of the service
    }

    // @Get(':id')// decorator to handle GET requests with a parameter
    // getUserById(@Param('id' , ParseIntPipe) id: any){ //ParseIntPipe is used to convert the string id to a number
    //     // console.log(id); // the id will always be iread in string and type will be object type so before using it we need to convert it to the required type
    //     // const userService = new UserService();//getting the instance of the service
    //     return this.userService.getUserById(id);
    //     // +id is used to convert the string id to a number
    // }

    // @Get(':id/:name/:email')// decorator to handle GET requests with multiple parameters also optional parameter one thing to remember option para will always come in the end 
    // getUserById(@Param() params: any){
    //     console.log(params); // the params will always be iread in string and type will be object type so before using it we need to convert it to the required type
    // }

    // @Get()
    // getUserByQuery(@Query('limit', new DefaultValuePipe(10), ParseIntPipe ) limit: number, @Query('page', new DefaultValuePipe(1), ParseIntPipe ) page: number){ 
    //     //DefaultValuePipe is used to set the default value for the query parameter
    //     // decorator to handle GET requests with query parameters
    //     // console.log(query); // the query will always be iread in string and type will be object type so before using it we need to convert it to the required type
    //     //default value pipe is used to set the default value for the query parameter
    //     // if the query parameter is not present in the url then it will take the default value remember to use the pipe after the default value pipe
    //     // const userService = new UserService();
    //     // console.log(query.gender);
    //     console.log(limit, page);
    //     return this.userService.getAllUsers();
    // }

    // @Get(':isMarried')//dto for route parameter
    // //
    // getAllUser(@Param() param : GetUserParamDto){
    //     return this.userService.getAllUsers();
    // }
    //here i am using ValidationPipe in the controller but i have already set it globally in the main.ts file so no need to use it again
    // @Post()// decorator to handle POST requests
    // createUser(@Body(new ValidationPipe()) user: CreateUserDto){ //this is how we connect the dto with the controller
    //     //ValidationPipe is used to validate the data coming from the client always use new keyword before using built in pipes
    //     // const userService = new UserService();
    //     // this.userService.createUser(user);
    //     return `user successfully created`;
    // }
    // {
    //     const userService = new UserService();//getting the instance of the service
    //     userService.createUser({
    //         id: 3,
    //         name: "bob",
    //         email: "ex3@gmail.com",
    //         country: "USA",
    //         isMarried: false,
    //         gender: "female"
    //     })
    //     return `user successfully created`;
    // }
    // @Post()// decorator to handle POST requests
    // createUser(@Body() user: CreateUserDto){ //here i using global validationpipe so no need to use it again - see main.ts file i have set it globally
    //     console.log(user instanceof CreateUserDto);  //this will return true if the user is an instance of CreateUserDto
    //     //to set it dto type i have used `transform: true` property in ValidationPipe in main.ts file
    //     return `user successfully created`;
    // }

    // @Patch()
    // updateUser(@Body() body : UpdateUserDto){
    //     console.log(body);
    //     return `user successfully updated`;
    // }




    @Post('signup')
    async createUser(@Body() userDetail: CreateUserDto){
        // console.log(userDetail);
        return await this.userService.createUser(userDetail);
    }

    @Get(':id')
    async getUserById(@Param('id') id : string){
        const isValid = await mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException('Invalid Id', 400);
        const userDetail = this.userService.getUserById(id);
        return userDetail;
    }

    @Patch(':id')
    async updateUser(@Param('id') id: string, @Body() userDetail: UpdateUserDto){
        const isValid = await mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException('Invalid Id', 400);
        return await this.userService.updateData(id, userDetail);
       
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string){
        const isValid = await mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException('Invalid Id', 400);
        const deleteUser =  await this.userService.deleteUserById(id);
        if(!deleteUser) throw new HttpException('User not found', 404);
        return;
    }

}
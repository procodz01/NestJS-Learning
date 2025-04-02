import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query } from "@nestjs/common";
import { UserService } from "./users.service";

@Controller('users')// This decorator marks the class as a controller
//url - localhost:3000/users
export class UsersController{
    // @Get()//decorator to handle GET requests
    // getUsers(){
    //     const userService = new UserService();//getting the instance of the service
    //     return userService.getAllUsers();
    // }

    @Get(':id')// decorator to handle GET requests with a parameter
    getUserById(@Param('id' , ParseIntPipe) id: any){ //ParseIntPipe is used to convert the string id to a number
        // console.log(id); // the id will always be iread in string and type will be object type so before using it we need to convert it to the required type
        const userService = new UserService();//getting the instance of the service
        return userService.getUserById(id);
        // +id is used to convert the string id to a number
    }

    // @Get(':id/:name/:email')// decorator to handle GET requests with multiple parameters also optional parameter one thing to remember option para will always come in the end 
    // getUserById(@Param() params: any){
    //     console.log(params); // the params will always be iread in string and type will be object type so before using it we need to convert it to the required type
    // }

    @Get()
    getUserByQuery(@Query('limit', new DefaultValuePipe(10), ParseIntPipe ) limit: number, @Query('page', new DefaultValuePipe(1), ParseIntPipe ) page: number){ // decorator to handle GET requests with query parameters
        // console.log(query); // the query will always be iread in string and type will be object type so before using it we need to convert it to the required type
        const userService = new UserService();
        // console.log(query.gender);
        console.log(limit, page);
        return userService.getAllUsers();
    }

    @Post()// decorator to handle POST requests
    createUser(){
        const userService = new UserService();//getting the instance of the service
        userService.createUser({
            id: 3,
            name: "bob",
            email: "ex3@gmail.com",
            country: "USA",
            isMarried: false,
            gender: "female"
        })
        return `user successfully created`;
    }

}
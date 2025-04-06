import { forwardRef,  Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose"; // this is used to create the model for the user schema
import { AuthService } from "src/auth/auth.service";
import { User } from "src/schemas/user.schema";
import { CreateUserDto } from "./dto/create-user.dto";


@Injectable()
export class UserService{
    constructor(@InjectModel(User.name) private userModel: Model<User>){ // this is how we inject the model in the service
        //User.name is used to get the name of the model

    }
    async createUser(createUserDto: CreateUserDto){
        const newUser = await new this.userModel(createUserDto);
        return newUser.save();
    }

    async getUserById(id: string){            
        const user = await this.userModel.findById(id);
        return user;
    }

    async updateData(id: string, userDetail: CreateUserDto){
        const user = await this.userModel.findByIdAndUpdate(id, userDetail, {new: true});
    }

    async deleteUserById(id: string){
        return await this.userModel.findByIdAndDelete(id);
    }


}
// @Injectable()// This decorator marks the class as a service
// export class UserService{
//     constructor(@Inject(forwardRef(() => AuthService)) private readonly authService: AuthService){ }
//     users: {id: number, name: string, email: string, country: string, isMarried: boolean, gender: string, password: string}[] = [
//         {id: 1, name: "john", email: "ex@gmail.com", country: "USA", isMarried: false, gender: "male", password: "123456"},
//         {id: 2, name: "alice", email: "ex1@gmail.com", country: "USA", isMarried: true, gender: "female", password: "234567"},
//     ]

//     getAllUsers(){
//         if(this.authService.isAuthenticated){
//             return this.users;
//         }
//         return `You are not authenticated to view the users`;
//     }

//     getUserById(id: number){
//         return this.users.find(user => user.id === id);
//     }
//     createUser(user: {id: number, name: string, email: string, country: string, isMarried: boolean, gender: string, password: string}){
//         this.users.push(user);
//     }
// }
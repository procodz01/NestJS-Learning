import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";

@Injectable()// This decorator marks the class as a service
export class UserService{
    constructor(@Inject(forwardRef(() => AuthService)) private readonly authService: AuthService){ }
    users: {id: number, name: string, email: string, country: string, isMarried: boolean, gender: string, password: string}[] = [
        {id: 1, name: "john", email: "ex@gmail.com", country: "USA", isMarried: false, gender: "male", password: "123456"},
        {id: 2, name: "alice", email: "ex1@gmail.com", country: "USA", isMarried: true, gender: "female", password: "234567"},
    ]

    getAllUsers(){
        if(this.authService.isAuthenticated){
            return this.users;
        }
        return `You are not authenticated to view the users`;
    }

    getUserById(id: number){
        return this.users.find(user => user.id === id);
    }
    createUser(user: {id: number, name: string, email: string, country: string, isMarried: boolean, gender: string, password: string}){
        this.users.push(user);
    }
}
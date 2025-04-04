import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(@Inject(forwardRef(() => UserService)) private readonly userService: UserService){

    }
    isAuthenticated : boolean = false;
    login(emailId: string, password: string){
        // return `Login successful for ${emailId}`;
        const user = this.userService.users.find(user => user.email === emailId && user.password === password);
        if(user){
            this.isAuthenticated = true;
            return `Login successful for ${emailId}`;
        }
        return `Login failed for ${emailId}`;
    }
}

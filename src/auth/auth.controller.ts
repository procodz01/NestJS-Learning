import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    // constructor(private readonly authService : AuthService){

    // }
    // @Post('login')
    // login(@Body() body: {emailId: string, password: string}){
    //     console.log(body);
    //     return this.authService.login(body.emailId, body.password);
    // }
}

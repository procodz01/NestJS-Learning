import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { TweetModule } from './tweet/tweet.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    TweetModule,
    AuthModule,
    MongooseModule.forRoot('mongodb+srv://raghvendra:7MVtMX9YXVa%40DZ3@nestjs.0gswqux.mongodb.net/nestjs?retryWrites=true&w=majority', {
      // Optional but recommended configuration options
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5s if can't connect
    }),// connecting to the mongodb database
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
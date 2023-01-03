import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Answer } from './questions/entities/answer.entity';
import { Question } from './questions/entities/question.entity';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [QuestionsModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-ibrahim.alwaysdata.net',
      port: 3306,
      username: 'ibrahim',
      password: '6024973815',
      database: 'ibrahim_backend_hwp',
      entities: [Answer, Question],
      synchronize: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

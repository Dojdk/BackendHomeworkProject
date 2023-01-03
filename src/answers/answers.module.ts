import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswersController } from '../answers/answers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from '../questions/entities/question.entity';
import { Answer } from './entities/answer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Answer])],
  controllers: [AnswersController],
  providers: [AnswersService]
})
export class AnswersModule {}

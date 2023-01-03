import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) { }

  @Post()
  async questionMassInsert(@Body() data: any) {
    return await this.questionsService.questionMassInsert(data);
  }

  @Get()
  async findAll() {
    return this.questionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.questionsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: any) {
    return await this.questionsService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.questionsService.remove(+id);
  }

  @Get('checkMethod')
  async checkMethod() {
    return 'checkMethod';
  }
}

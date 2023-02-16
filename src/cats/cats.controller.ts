import { CreateCatDto } from '../dto/create-cat.dto';
import { Cat } from '../interfaces/cat.interface';
import { CatsService } from './cats.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    console.log('方法执行');
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    console.log('方法执行');
    return this.catsService.findAll();
  }
}

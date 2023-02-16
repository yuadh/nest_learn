import {
  Controller,
  Get,
  Post,
  HttpCode,
  Redirect,
  Param,
  HostParam,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './dto/create-cat.dto';
@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('findAll')
  findAll(): string {
    return 'testController123';
  }
  @Post()
  @Redirect('https://www.yuadh.com', 301)
  create() {
    return 'This action adds a new cat';
  }

  @Get(':id')
  findOne(@Param('id') params): string {
    return `This action find a new cat111 ${params}`;
  }
  @Get('host')
  getInfo(@HostParam('account') account: string) {
    return account;
  }
  // @Post()
  // async testBody(@Body() Obj: CreateCatDto) {
  //   return 'ts?';
  // }
  @Post('bd')
  async testBody(@Body() Obj: CreateCatDto) {
    console.log(Obj);
    return Obj;
  }
}

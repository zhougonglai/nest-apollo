import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as constants from './constants';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('constants', constants.default);
    return this.appService.getHello();
  }
}

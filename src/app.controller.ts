import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  pingBack(): void {
    return this.appService.pingBack();
  }

  pingFront(): void {
    return this.appService.pingFront();
  }
}

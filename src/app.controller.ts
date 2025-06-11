import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

import { ApiOperation, ApiParam } from '@nestjs/swagger';
import { ApiBody } from '@nestjs/swagger';

const postNewSum = 'New notifications job';
const postNewDes = 'Post a new notifications job';
const postNewExample = {
  "list": [ "ETH:0x123", "BNB:0x123", "MAT:0xfff" ],
  "criteria": { "t": 0.1, "changeType": "any" }
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('') // ROOT
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('jobs/new')
  @ApiOperation({ summary: postNewSum, description: postNewDes })
  @ApiBody({
    schema: {
      type: "object", properties: {}, example: postNewExample
    }
  })
  createJob() {
    return { result: 'OK' };
  }
}

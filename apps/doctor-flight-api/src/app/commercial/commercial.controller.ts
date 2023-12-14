import { Controller, Get } from '@nestjs/common';

import { CommercialService } from './commercial.service';

@Controller()
export class CommercialController {
  constructor(private readonly service: CommercialService) {}

  @Get('/commercials/food')
  getData() {
    return this.service.findAllFood();
  }
}

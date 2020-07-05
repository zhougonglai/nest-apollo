import { Module, HttpModule } from '@nestjs/common';
import { QuantService } from './quant.service';
import { QuantResolver } from './quant.resolver';

@Module({
  imports: [HttpModule],
  providers: [QuantService, QuantResolver],
})
export class QuantModule {}

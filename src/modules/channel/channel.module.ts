import { Module, HttpModule } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { ChannelResolver } from './channel.resolver';

@Module({
  imports: [HttpModule],
  providers: [ChannelService, ChannelResolver],
})
export class ChannelModule {}

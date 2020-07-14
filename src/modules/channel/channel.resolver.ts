import { Resolver, Query, Args } from '@nestjs/graphql';
import { ChannelService } from './channel.service';
import { FindGameTagsInput, GameTag } from 'src/graphql.schema';

@Resolver('Channel')
export class ChannelResolver {
  constructor(private readonly channelService: ChannelService) {}

  @Query('findGameTags')
  async findGameTags(
    @Args('findgametagsinput') findgametagsinput: FindGameTagsInput,
  ) {
    return await this.channelService
      .findGameTags(findgametagsinput)
      .then((res) => {
        console.log(res.data.retData.list);
        return res.data.retData.list;
      });
  }
}

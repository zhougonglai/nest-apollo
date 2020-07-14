import { Injectable, HttpService } from '@nestjs/common';
import { FindGameTagsInput, GameTag } from 'src/graphql.schema';
import { AxiosResponse } from 'axios';
import { NNResponse } from 'src/common/model';

@Injectable()
export class ChannelService {
  constructor(private readonly httpService: HttpService) {}

  findGameTags(
    findgametagsinput: FindGameTagsInput,
  ): Promise<AxiosResponse<NNResponse<{ list: [GameTag] }>>> {
    return this.httpService
      .get(
        'https://test-web01.nn.com/nchannel/channel/business/findGameTags/',
        {
          params: findgametagsinput,
        },
      )
      .toPromise();
  }
}

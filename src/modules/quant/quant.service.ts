import { Injectable, HttpService } from '@nestjs/common';
import { TokenInput, AllSecurities } from 'src/graphql.schema';
import { AxiosResponse } from 'axios';

@Injectable()
export class QuantService {
  constructor(private readonly httpService: HttpService) {}

  getToken(tokenInput: TokenInput): Promise<AxiosResponse<string>> {
    console.log(tokenInput);
    return this.httpService
      .post('https://dataapi.joinquant.com/apis', tokenInput)
      .toPromise();
  }

  getAllSecurities(
    allSecurities: AllSecurities,
  ): Promise<AxiosResponse<string>> {
    return this.httpService
      .post('https://dataapi.joinquant.com/apis', allSecurities)
      .toPromise();
  }
}

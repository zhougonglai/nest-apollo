import { Resolver, Query, Args } from '@nestjs/graphql';
import { QuantService } from './quant.service';
import { TokenInput, AllSecurities } from 'src/graphql.schema';

@Resolver('Quant')
export class QuantResolver {
  constructor(private readonly quantService: QuantService) {}

  @Query('getToken')
  async getToken(@Args('tokenInput') tokenInput: TokenInput) {
    return await this.quantService.getToken(tokenInput).then((res) => res.data);
  }

  @Query('getAllSecurities')
  async getAllSecurities(@Args('allSecurities') allSecurities: AllSecurities) {
    return await this.quantService
      .getAllSecurities(allSecurities)
      .then((res) => res.data);
  }
}

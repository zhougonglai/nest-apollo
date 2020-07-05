import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query('loginById')
  async loginById(@Args('id') id: number) {
    return await this.userService.loginById(id).then((res) => res.data.data);
  }
}

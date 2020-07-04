import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { LoginInput } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query('loginByPwd')
  async loginByPwd(@Args() loginInput: LoginInput) {
    const { data } = await this.userService.loginByPwd(loginInput).toPromise();
    console.log(data);
    return data;
  }
}

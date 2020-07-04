import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { User } from 'src/graphql.schema';
import { NNResponse } from 'src/common/model';

// countryCode: 86
// pwdEncry: "4297f44b13955235245b2497399d7a93"
// region_code: ""
// type: "phone"
// username: 15271871141
export class LoginInput {
  countryCode: number;
  pwdEncry: string;
  type: string;
  username: number;
}

@Injectable()
export class UserService {
  constructor(private readonly httpService: HttpService) {}

  loginByPwd(form: LoginInput): Observable<AxiosResponse<NNResponse<User>>> {
    return this.httpService.post(
      'https://test-web01.nn.com/u-nnpc/loginByPwd',
      form,
    );
  }
}

import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { User } from 'src/graphql.schema';
import { NNResponse } from 'src/common/model';

@Injectable()
export class UserService {
  constructor(private readonly httpService: HttpService) {}

  loginById(id: number): Promise<AxiosResponse<NNResponse<User>>> {
    return this.httpService
      .get(`https://reqres.in/api/users/${id}`)
      .toPromise();
  }
}

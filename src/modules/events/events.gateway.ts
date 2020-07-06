import {
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
  MessageBody,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

class Res {
  a: number;
  b: number;
  c: number;
}

@WebSocketGateway(8080)
export class EventsGateway {
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): Observable<WsResponse> {
    return from([1, 2, 3]).pipe(
      map((item) => ({ event: 'events', data: item })),
    );
  }

  @SubscribeMessage('events')
  handleEvents(@MessageBody() data: Res) {
    console.log(data.a);
    return data;
  }
}

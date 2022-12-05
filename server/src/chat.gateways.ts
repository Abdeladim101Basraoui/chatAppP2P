import { Logger } from '@nestjs/common';
import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway({ namespace: 'chat', cors: true })
export class chatGateway {
  private logger = new Logger('chatGateway');
  
  @WebSocketServer()
  server;

  @SubscribeMessage('message')
  handelMessage(client: any, payload: any) {
    this.logger.log('client id: ' + client.id);
    this.logger.log('the message ', JSON.stringify(payload));
    //
    this.server.emit('message', {client:this.server, data: payload});

  }
}

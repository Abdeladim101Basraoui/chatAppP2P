import { Module } from '@nestjs/common';
import { chatGateway } from './chat.gateways';

@Module({
  imports: [],
  controllers: [],
  providers: [chatGateway],
})
export class ChatModule {}

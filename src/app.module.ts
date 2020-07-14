import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuantModule } from './modules/quant/quant.module';
import { EventsModule } from './modules/events/events.module';
import { ChannelModule } from './modules/channel/channel.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql', './**/*.gql'],
      installSubscriptionHandlers: true,
    }),
    QuantModule,
    EventsModule,
    ChannelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

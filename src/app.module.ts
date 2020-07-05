import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { join } from 'path';
import { QuantModule } from './modules/quant/quant.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql', './**/*.gql'],
      installSubscriptionHandlers: true,
    }),
    UserModule,
    QuantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

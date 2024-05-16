import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HuggingfaceModule } from './huggingface/huggingface.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    HuggingfaceModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

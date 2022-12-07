import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JornalModule } from './jornal/jornal.module';

@Module({
  imports: [JornalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

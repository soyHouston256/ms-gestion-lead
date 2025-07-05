import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LeadModule } from './lead/lead.module';

@Module({
  imports: [LeadModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

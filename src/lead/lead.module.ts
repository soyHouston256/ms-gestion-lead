import { Module } from '@nestjs/common';
import { LeadService } from './lead.service';
import { LeadController } from './lead.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [LeadController],
  providers: [LeadService, PrismaClient],
  exports: [LeadService],
})
export class LeadModule {}

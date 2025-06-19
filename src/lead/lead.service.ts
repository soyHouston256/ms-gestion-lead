import { Injectable } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class LeadService {
  constructor(private readonly prisma: PrismaClient) {}
  async create(createLeadDto: CreateLeadDto) {
    const lead = await this.prisma.lead.create({
      data: {
        name: createLeadDto.name,
        lastname: createLeadDto.lastname,
        documentType: createLeadDto.documentType,
        documentNumber: createLeadDto.documentNumber,
        phone: createLeadDto.phone,
        email: createLeadDto.email,
      },
    });
    return lead;
  }

  async findAll() {
    return this.prisma.lead.findMany();
  }

  async findOne(id: number) {
    return this.prisma.lead.findUniqueOrThrow({
      where: { id },
    });
  }

  async update(id: number, updateLeadDto: UpdateLeadDto) {
    return this.prisma.lead.update({
      where: { id },
      data: updateLeadDto,
    });
  }

  remove(id: number) {
    return this.prisma.lead.delete({
      where: { id },
    });
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LeadService } from './lead.service';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';

@Controller('')
export class LeadController {
  constructor(private readonly leadService: LeadService) {}

  @Post()
  async create(@Body() createLeadDto: CreateLeadDto) {
    try {
      const data = await this.leadService.create(createLeadDto);
      return { data, success: true, errorMessage: null };
    } catch (error) {
      return { success: false, errorMessage: error.message };
    }
  }

  @Get()
  async findAll() {
    try {
      const data = await this.leadService.findAll();
      return { data, success: true, errorMessage: null };
    } catch (error) {
      return { success: false, errorMessage: error.message };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const data = await this.leadService.findOne(+id);
      return { data, success: true, errorMessage: null };
    } catch (error) {
      return { success: false, errorMessage: error.message };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateLeadDto: UpdateLeadDto) {
    try {
      const data = await this.leadService.update(+id, updateLeadDto);
      return { data, success: true, errorMessage: null };
    } catch (error) {
      return { success: false, errorMessage: error.message };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.leadService.remove(+id);
      return { success: true, errorMessage: null };
    } catch (error) {
      return { success: false, errorMessage: error.message };
    }
  }
  @Get('health')
  health(): { status: string } {
    return { status: 'ok' };
  }
}

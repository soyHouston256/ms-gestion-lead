import { PartialType } from '@nestjs/mapped-types';
import { CreateLeadDto } from './create-lead.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { DocumentTypeEnum } from '../utils/enums';

export class UpdateLeadDto extends PartialType(CreateLeadDto) {
  @ApiPropertyOptional({ example: 'Juan' })
  name?: string;

  @ApiPropertyOptional({ example: 'Pérez' })
  lastname?: string;

  @ApiPropertyOptional({
    example: DocumentTypeEnum.DNI,
    enum: DocumentTypeEnum,
  })
  documentType?: DocumentTypeEnum;

  @ApiPropertyOptional({ example: '12345678' })
  documentNumber?: string;

  @ApiPropertyOptional({ example: '987654321' })
  phone?: string;

  @ApiPropertyOptional({ example: 'juan.perez@email.com' })
  email?: string;
}

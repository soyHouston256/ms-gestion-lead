import { IsString, IsEmail, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { DocumentTypeEnum } from '../utils/enums';

export class CreateLeadDto {
  @ApiProperty({ example: 'Juan' })
  @IsString()
  @Length(1, 100)
  name: string;

  @ApiProperty({ example: 'Pérez' })
  @IsString()
  @Length(1, 100)
  lastname: string;

  @ApiProperty({ example: DocumentTypeEnum.DNI, enum: DocumentTypeEnum })
  @IsString()
  @Length(1, 50)
  documentType: DocumentTypeEnum;

  @ApiProperty({ example: '12345678' })
  @IsString()
  @Length(1, 50)
  documentNumber: string;

  @ApiProperty({ example: '987654321' })
  @IsString()
  @Length(7, 20)
  phone: string;

  @ApiProperty({ example: 'juan.perez@email.com' })
  @IsEmail()
  email: string;
}

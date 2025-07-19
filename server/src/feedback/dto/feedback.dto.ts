import { IsString, IsNotEmpty, IsPhoneNumber, IsOptional, IsIn } from 'class-validator';

export class CreateFeedbackDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsIn(['phone', 'whatsapp', 'telegram', 'email'])
  communicationMethod: string;

  @IsString()
  @IsNotEmpty()
  carDescription: string;

  @IsOptional()
  @IsString()
  email?: string;
}

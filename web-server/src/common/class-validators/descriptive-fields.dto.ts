import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import {
  LONG_STRING_MAX_LEN,
  SHORT_STRING_MAX_LEN,
} from 'src/common/constants/rules';

export class DescriptionFieldDto {
  @MaxLength(SHORT_STRING_MAX_LEN)
  @IsString()
  @IsNotEmpty()
  title: string;

  @MaxLength(LONG_STRING_MAX_LEN)
  @IsString()
  @IsNotEmpty()
  description: string;
}

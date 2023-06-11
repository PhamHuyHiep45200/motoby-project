import { ApiProperty } from '@nestjs/swagger';

export class CreateMotoDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  producer: string;

  @ApiProperty()
  yearOfManufacture: Date;

  @ApiProperty()
  listThumbnail: string;

  @ApiProperty()
  color: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  licensePates: string;

  @ApiProperty()
  rentCost: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  categoryId: number;
}

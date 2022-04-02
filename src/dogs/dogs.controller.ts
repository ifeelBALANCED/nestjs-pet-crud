import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DogDto } from '../dogs/dto/dog.dto';
import { DogService } from '../dogs/dogs.service';
import { ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { DogEntity } from '../dogs/entities/dogs.entity';
import { DeleteResult } from 'typeorm';

@ApiTags('dogs')
@Controller('dogs')
export class DogsController {
  constructor(private readonly dogService: DogService) {}

  @Post()
  @ApiBody({
    type: DogDto,
  })
  async create(@Body() dogDto: DogDto) {
    return await this.dogService.createDog(dogDto);
  }

  @Get()
  @ApiOkResponse({ type: DogEntity })
  findAll() {
    return this.dogService.findAll();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  @ApiOkResponse({ type: DogEntity })
  findOne(@Param('id') id: string) {
    return this.dogService.findOneDog(id);
  }

  @Put(':id')
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  @ApiBody({
    type: DogDto,
    description: 'Object with 3 keys: name, age, breed',
  })
  @ApiOkResponse({ type: DogEntity })
  async update(@Param('id') id: string, @Body() dogDto: DogDto) {
    return await this.dogService.updateDog(id, dogDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  @ApiOkResponse({ type: DeleteResult })
  async remove(@Param('id') id: string) {
    return await this.dogService.removeDog(id);
  }
}

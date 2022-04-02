import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogEntity } from './entities/dogs.entity';
import { DogService } from './dogs.service';

@Module({
  imports: [TypeOrmModule.forFeature([DogEntity])],
  controllers: [DogsController],
  providers: [DogService],
})
export class DogsModule {}

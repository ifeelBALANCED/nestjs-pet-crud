import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogsModule } from './dogs/dogs.module';
import ormConfig from '@app/ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), DogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

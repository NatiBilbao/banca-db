import { Module } from '@nestjs/common';
import { AdvisorsService } from './advisors.service';
import { AdvisorsController } from './advisors.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Advisor } from './advisors.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Advisor])],
  providers: [AdvisorsService],
  controllers: [AdvisorsController]
})
export class AdvisorsModule {}

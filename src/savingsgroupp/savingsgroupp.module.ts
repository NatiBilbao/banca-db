import { Module } from '@nestjs/common';
import { SavingGroupController } from './savingsgroupp.controller';
import { SavingsgroupService } from './savingsgroupp.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Group } from './savingsgroup.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Group])],
  controllers: [SavingGroupController],
  providers: [SavingsgroupService]
})
export class SavingsgrouppModule {}
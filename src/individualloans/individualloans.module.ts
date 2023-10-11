import { Module } from '@nestjs/common';
import { IndividualloansService } from './individualloans.service';
import { IndividualloansController } from './individualloans.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import {IndividualLoan} from './individualloans.entity';


@Module({
  imports: [TypeOrmModule.forFeature([IndividualLoan])],
  providers: [IndividualloansService],
  controllers: [IndividualloansController]
})
export class IndividualloansModule {}

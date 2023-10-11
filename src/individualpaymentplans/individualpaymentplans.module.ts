import { Module } from '@nestjs/common';
import { IndividualpaymentplansController } from './individualpaymentplans.controller';
import { IndividualpaymentplansService } from './individualpaymentplans.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { IndividualPaymentPlans } from './individualpaymentplans.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IndividualPaymentPlans])],
  controllers: [IndividualpaymentplansController],
  providers: [IndividualpaymentplansService]
})
export class IndividualpaymentplansModule {}

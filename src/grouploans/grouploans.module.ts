import { Module } from '@nestjs/common';
import { GrouploansController} from './grouploans.controller';
import { GrouploansService } from './grouploans.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { GroupLoan } from './grouploans.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GroupLoan])],
  controllers: [GrouploansController],
  providers: [GrouploansService]
})
export class GrouploansModule {}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MembersModule } from './members/members.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SavingsgrouppModule } from './savingsgroupp/savingsgroupp.module';
import { GrouploansModule } from './grouploans/grouploans.module';
import { IndividualloansModule } from './individualloans/individualloans.module';
import { IndividualpaymentplansModule } from './individualpaymentplans/individualpaymentplans.module';
import { AdvisorsModule } from './advisors/advisors.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'hola1234',
      database: 'banca1',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    MembersModule,
    SavingsgrouppModule,
    GrouploansModule,
    IndividualloansModule,
    IndividualpaymentplansModule,
    AdvisorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

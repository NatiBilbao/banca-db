import { Controller, Post, Body, Get, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import {  CreateIndividualPaymentPlanDto } from './dto/create-individualpaymentplans.dto';
import { IndividualpaymentplansService } from './individualpaymentplans.service';
import { IndividualPaymentPlans } from './individualpaymentplans.entity';
import { UpdateIndividualPaymentPlanDto } from './dto/update-individualpaymentplans.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Individual Payment Plans')
@Controller('individualpaymentplans')
export class IndividualpaymentplansController {

    constructor(private individualloanService: IndividualpaymentplansService){}

    @Get()
    getIndipayplans(): Promise<IndividualPaymentPlans[]>{
        return this.individualloanService.getIndiplans();
    }

    @Get(':id')
    getIndipayplan(@Param('id', ParseIntPipe) id: number){
        return this.individualloanService.getIndiplan(id);
    }

    @Post()
    createIndipayplan(@Body() newindiplan: CreateIndividualPaymentPlanDto){
       return this.individualloanService.createindividualplan(newindiplan)
    }

    @Delete(':id')
    deleteIndipayplan(@Param('id', ParseIntPipe) id: number){
        return this.individualloanService.deleteIndiplan(id)
    }

    @Patch(':id')
    updateIndipayplan(@Param('id', ParseIntPipe) id:number, @Body() indiloan: UpdateIndividualPaymentPlanDto){
        return this.individualloanService.updateIndiplan(id, indiloan)
    } 
}

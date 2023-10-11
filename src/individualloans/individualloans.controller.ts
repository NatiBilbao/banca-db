import { Controller, Post, Body, Get, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { CreateIndividualLoanDto } from './dto/create-individualloans.dto';
import { IndividualloansService } from './individualloans.service';
import { IndividualLoan } from './individualloans.entity';
import { UpdateIndividualLoanDto } from './dto/update-individualloans.dto';

@Controller('individualloans')
export class IndividualloansController {
    constructor(private individualloanService: IndividualloansService){}

    @Get()
    getIndividualloans(): Promise<IndividualLoan[]>{
        return this.individualloanService.getIndiloans();
    }

    @Get(':id')
    getIndividualloan(@Param('id', ParseIntPipe) id: number){
        return this.individualloanService.getIndiloan(id);
    }

    @Post()
    createIndividualloan(@Body() newindiloan: CreateIndividualLoanDto){
       return this.individualloanService.createindividualLoan(newindiloan)
    }

    @Delete(':id')
    deleteIndividualloan(@Param('id', ParseIntPipe) id: number){
        return this.individualloanService.deleteIndiloan(id)
    }

    @Patch(':id')
    updateIndividualloan(@Param('id', ParseIntPipe) id:number, @Body() indiloan: UpdateIndividualLoanDto){
        return this.individualloanService.updateIndiloan(id, indiloan)
    } 

}

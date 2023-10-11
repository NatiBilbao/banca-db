import { Controller, Post, Body, Get, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { CreateGroupLoansDto } from './dto/create-grouploans.dto';
import { GrouploansService } from './grouploans.service';
import { GroupLoan } from './grouploans.entity';
import {UpdateGroupLoansDto } from './dto/update-grouploans.dto';

@Controller('grouploan')
export class GrouploansController {
    constructor(private grouploanService: GrouploansService){}

    @Get()
    getGroupLoans(): Promise<GroupLoan[]>{
        return this.grouploanService.getGroupLoans();
    }

    @Get(':id')
    getGroupLoan(@Param('id', ParseIntPipe) id: number){
        return this.grouploanService.getGroupLoan(id);
    }

    @Post()
    createGroupLoan(@Body() newGroupLoan: CreateGroupLoansDto){
       return this.grouploanService.createGroupLoan(newGroupLoan)
    }

    @Delete(':id')
    deleteGroupLoan(@Param('id', ParseIntPipe) id: number){
        return this.grouploanService.deleteGroupLoan(id)
    }

    @Patch(':id')
    updateGroupLoan(@Param('id', ParseIntPipe) id:number, @Body() group: UpdateGroupLoansDto){
        return this.grouploanService.updateMember(id, group)
    } 

}
 
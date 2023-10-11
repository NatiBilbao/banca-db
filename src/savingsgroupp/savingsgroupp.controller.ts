import { Controller, Post, Body, Get, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { CreateSavingGroupDto } from './dto/create-savingsgroup.dto';
import { SavingsgroupService } from './savingsgroupp.service';
import { Group } from './savingsgroup.entity';
import { UpdateSavingGroupDto } from './dto/update-savingsgroup.dto';

@Controller('group')
export class SavingGroupController {
    constructor(private groupService: SavingsgroupService){}

    @Get()
    getGroups(): Promise<Group[]>{
        return this.groupService.getGroups();
    }

    @Get(':id')
    getGroup(@Param('id', ParseIntPipe) id: number){
        return this.groupService.getGroup(id);
    }

    @Post()
    createGroup(@Body() newGroup: CreateSavingGroupDto){
       return this.groupService.createGroup(newGroup)
    }

    @Delete(':id')
    deleteGroup(@Param('id', ParseIntPipe) id: number){
        return this.groupService.deleteGroup(id)
    }

    @Patch(':id')
    updateGroup(@Param('id', ParseIntPipe) id:number, @Body() group: UpdateSavingGroupDto){
        return this.groupService.updateGroup(id, group)
    } 

}
 
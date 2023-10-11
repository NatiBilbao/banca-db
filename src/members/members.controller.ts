import { Controller, Post, Body, Get, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { MembersService } from './members.service';
import { Member } from './member.entity';
import { UpdateMemberDto } from './dto/update-member.dto';

@Controller('member')
export class MembersController {
    constructor(private memberService: MembersService){}

    @Get()
    getMembers(): Promise<Member[]>{
        return this.memberService.getMembers();
    }

    @Get(':id')
    getMember(@Param('id', ParseIntPipe) id: number){
        return this.memberService.getMember(id);
    }

    @Post()
    createMember(@Body() newMember: CreateMemberDto){
       return this.memberService.createMember(newMember)
    }

    @Delete(':id')
    deleteMember(@Param('id', ParseIntPipe) id: number){
        return this.memberService.deleteMember(id)
    }

    @Patch(':id')
    updateMember(@Param('id', ParseIntPipe) id:number, @Body() member: UpdateMemberDto){
        return this.memberService.updateMember(id, member)
    } 

}
 
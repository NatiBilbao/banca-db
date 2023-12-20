import { Controller, Post, Body, Get, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { CreateAdvisorsDto } from './dto/create-advisors.dto';
import { AdvisorsService } from './advisors.service';
import { Advisor } from './advisors.entity';
import { UpdateAdvisorsDto } from './dto/update-advisors.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Advisors')
@Controller('advisors')
export class AdvisorsController {

    constructor(private advisorService: AdvisorsService){}

    @Get()
    getAdvisors(): Promise<Advisor[]>{
        return this.advisorService.getAdvisors();
    }

    @Get(':id')
    getAdvisor(@Param('id', ParseIntPipe) id: number){
        return this.advisorService.getAdvisor(id);
    }

    @Post()
    createAdvisor(@Body() newAdvisor: CreateAdvisorsDto){
       return this.advisorService.createAdvisor(newAdvisor)
    }

    @Delete(':id')
    deleteAdvisor(@Param('id', ParseIntPipe) id: number){
        return this.advisorService.deleteAdvisor(id)
    }

    @Patch(':id')
    updateAdvisor(@Param('id', ParseIntPipe) id:number, @Body() advisor: UpdateAdvisorsDto){
        return this.advisorService.updateAdvisor(id, advisor)
    } 
}

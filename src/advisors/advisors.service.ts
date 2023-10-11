import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {  Advisor } from './advisors.entity';
import { Repository } from 'typeorm';
import {  CreateAdvisorsDto } from './dto/create-advisors.dto'
import { UpdateAdvisorsDto } from './dto/update-advisors.dto'

@Injectable()
export class AdvisorsService {

    constructor(@InjectRepository(Advisor) private advisorRepository: Repository<Advisor>){}


    async createAdvisor(advisor: CreateAdvisorsDto){

        const advisorFound = await this.advisorRepository.findOne({
            where: {
                advisor_CI: advisor.advisor_CI
            }
        })

        if (advisorFound){
            return new HttpException('El consejero ya existe', HttpStatus.CONFLICT)
        }

        const newAdvisor = this.advisorRepository.create(advisor) 
        return this.advisorRepository.save(newAdvisor)
    }

    getAdvisors(){
        return this.advisorRepository.find()
    }

    async getAdvisor(id: number){
        const advisorFound = await this.advisorRepository.findOne({
            where:{
                id
            }
        })

        if (!advisorFound){
            return new HttpException('Consejero no encontrado', HttpStatus.NOT_FOUND)
        }

        return advisorFound
    }

    async deleteAdvisor(id: number){
        const advisorFound = await this.advisorRepository.findOne({where: {id}})

        if (!advisorFound){
            return new HttpException('Consejero no encontrado', HttpStatus.NOT_FOUND)
        }

        return this.advisorRepository.delete({id})
    }

    async updateAdvisor(id:  number, advisor: UpdateAdvisorsDto){
        const advisorFound = await this.advisorRepository.findOne({where: {id}})

        if (!advisorFound){
            return new HttpException('Consejero no encontrado', HttpStatus.NOT_FOUND)
        }

        const updateAdvisor = Object.assign(advisorFound, advisor)
        return this.advisorRepository.save(updateAdvisor)

    }
    
}

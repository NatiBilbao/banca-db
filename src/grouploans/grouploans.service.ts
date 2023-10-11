import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupLoan } from './grouploans.entity';
import { Repository } from 'typeorm';
import {  CreateGroupLoansDto } from './dto/create-grouploans.dto'
import {  UpdateGroupLoansDto } from './dto/update-grouploans.dto'


@Injectable()
export class GrouploansService {

    constructor(@InjectRepository(GroupLoan) private grouploanRepository: Repository<GroupLoan>){}


    async createGroupLoan(grouploan: CreateGroupLoansDto){

        const newGrouploan = this.grouploanRepository.create(grouploan) 
        return this.grouploanRepository.save(newGrouploan)
    }

    getGroupLoans(){
        return this.grouploanRepository.find()
    }

    async getGroupLoan(id: number){
        const groupLoanFound = await this.grouploanRepository.findOne({
            where:{
                id
            }
        })

        if (!groupLoanFound){
            return new HttpException('Grupo de prestamos no encontrado', HttpStatus.NOT_FOUND)
        }

        return groupLoanFound
    }

    async deleteGroupLoan(id: number){
        const grouploanFound = await this.grouploanRepository.findOne({where: {id}})

        if (!grouploanFound){
            return new HttpException('Grupo de prestamos no encontrado', HttpStatus.NOT_FOUND)
        }

        return this.grouploanRepository.delete({id})
    }

    async updateMember(id:  number, grouploan: UpdateGroupLoansDto){
        const groupLoanFoud = await this.grouploanRepository.findOne({where: {id}})

        if (!groupLoanFoud){
            return new HttpException('Grupo de prestamos no encontrado', HttpStatus.NOT_FOUND)
        }

        const updateGroupLoans = Object.assign(groupLoanFoud, grouploan)
        return this.grouploanRepository.save(updateGroupLoans)

    }
    
}

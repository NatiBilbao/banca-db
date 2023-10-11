import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IndividualLoan } from './individualloans.entity';
import { Repository } from 'typeorm';
import { CreateIndividualLoanDto } from './dto/create-individualloans.dto'
import { UpdateIndividualLoanDto } from './dto/update-individualloans.dto'

@Injectable()
export class IndividualloansService {

    constructor(@InjectRepository(IndividualLoan) private indiviLoanRepository: Repository<IndividualLoan>){}


    async createindividualLoan(indiloan: CreateIndividualLoanDto){

        const indiloanFound = await this.indiviLoanRepository.findOne({
            where: {
                member_id: indiloan.member_id
            }
        })

        if (indiloanFound){
            return new HttpException('El prestamo ya existe', HttpStatus.CONFLICT)
        }

        const newIndiloan = this.indiviLoanRepository.create(indiloan) 
        return this.indiviLoanRepository.save(newIndiloan)
    }

    getIndiloans(){
        return this.indiviLoanRepository.find()
    }

    async getIndiloan(id: number){
        const indiloanFound = await this.indiviLoanRepository.findOne({
            where:{
                id
            }
        })

        if (!indiloanFound){
            return new HttpException('Prestamo no encontrado', HttpStatus.NOT_FOUND)
        }

        return indiloanFound
    }

    async deleteIndiloan(id: number){
        const indiloanFound = await this.indiviLoanRepository.findOne({where: {id}})

        if (!indiloanFound){
            return new HttpException('Prestamo no encontrado', HttpStatus.NOT_FOUND)
        }

        return this.indiviLoanRepository.delete({id})
    }

    async updateIndiloan(id:  number, indiloan: UpdateIndividualLoanDto){
        const indiloanFound = await this.indiviLoanRepository.findOne({where: {id}})

        if (!indiloanFound){
            return new HttpException('Prestamo no encontrado', HttpStatus.NOT_FOUND)
        }

        const updateIndiloan = Object.assign(indiloanFound, indiloan)
        return this.indiviLoanRepository.save(updateIndiloan)

    }
    
}

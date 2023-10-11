import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IndividualPaymentPlans } from './individualpaymentplans.entity';
import { Repository } from 'typeorm';
import { CreateIndividualPaymentPlanDto } from './dto/create-individualpaymentplans.dto'
import { UpdateIndividualPaymentPlanDto } from './dto/update-individualpaymentplans.dto'
@Injectable()
export class IndividualpaymentplansService {

    constructor(@InjectRepository(IndividualPaymentPlans) private indiviplanRepository: Repository<IndividualPaymentPlans>){}


    async createindividualplan(indiplan: CreateIndividualPaymentPlanDto){

        const newIndiplan = this.indiviplanRepository.create(indiplan) 
        return this.indiviplanRepository.save(newIndiplan)
    }

    getIndiplans(){
        return this.indiviplanRepository.find()
    }

    async getIndiplan(id: number){
        const indiplanFound = await this.indiviplanRepository.findOne({
            where:{
                id
            }
        })

        if (!indiplanFound){
            return new HttpException('Plan de pago no encontrado', HttpStatus.NOT_FOUND)
        }

        return indiplanFound
    }

    async deleteIndiplan(id: number){
        const indiplanFound = await this.indiviplanRepository.findOne({where: {id}})

        if (!indiplanFound){
            return new HttpException('Plan de pago  no encontrado', HttpStatus.NOT_FOUND)
        }

        return this.indiviplanRepository.delete({id})
    }

    async updateIndiplan(id:  number, indiplan: UpdateIndividualPaymentPlanDto){
        const indiplanFound = await this.indiviplanRepository.findOne({where: {id}})

        if (!indiplanFound){
            return new HttpException('Plan de pago  no encontrado', HttpStatus.NOT_FOUND)
        }

        const updateIndiplan = Object.assign(indiplanFound, indiplan)
        return this.indiviplanRepository.save(updateIndiplan)

    }
}

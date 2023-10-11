import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './member.entity';
import { Repository } from 'typeorm';
import { CreateMemberDto } from './dto/create-member.dto'
import { UpdateMemberDto } from './dto/update-member.dto'


@Injectable()
export class MembersService {

    constructor(@InjectRepository(Member) private memberRepository: Repository<Member>){}


    async createMember(member: CreateMemberDto){

        const memberFound = await this.memberRepository.findOne({
            where: {
                CI: member.CI
            }
        })

        if (memberFound){
            return new HttpException('El miembro ya existe', HttpStatus.CONFLICT)
        }

        const newMember = this.memberRepository.create(member) 
        return this.memberRepository.save(newMember)
    }

    getMembers(){
        return this.memberRepository.find()
    }

    async getMember(id: number){
        const memberFound = await this.memberRepository.findOne({
            where:{
                id
            }
        })

        if (!memberFound){
            return new HttpException('Miembro no encontrado', HttpStatus.NOT_FOUND)
        }

        return memberFound
    }

    async deleteMember(id: number){
        const memberFound = await this.memberRepository.findOne({where: {id}})

        if (!memberFound){
            return new HttpException('Miembro no encontrado', HttpStatus.NOT_FOUND)
        }

        return this.memberRepository.delete({id})
    }

    async updateMember(id:  number, member: UpdateMemberDto){
        const memberFound = await this.memberRepository.findOne({where: {id}})

        if (!memberFound){
            return new HttpException('Miembro no encontrado', HttpStatus.NOT_FOUND)
        }

        const updateMember = Object.assign(memberFound, member)
        return this.memberRepository.save(updateMember)

    }
    
}

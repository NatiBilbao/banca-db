import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './savingsgroup.entity';
import { Repository } from 'typeorm';
import { CreateSavingGroupDto } from './dto/create-savingsgroup.dto'
import { UpdateSavingGroupDto  } from './dto/update-savingsgroup.dto'


@Injectable()
export class SavingsgroupService {

    constructor(@InjectRepository(Group) private groupRepository: Repository<Group>){}


    async createGroup(group: CreateSavingGroupDto){

        const groupFound = await this.groupRepository.findOne({
            where: {
                group_name: group.group_name
            }
        })

        if (groupFound){
            return new HttpException('El grupo ya existe', HttpStatus.CONFLICT)
        }

        const newGroup = this.groupRepository.create(group) 
        return this.groupRepository.save(newGroup)
    }

    getGroups(){
        return this.groupRepository.find()
    }

    async getGroup(id: number){
        const groupFound = await this.groupRepository.findOne({
            where:{
                id
            }
        })

        if (!groupFound){
            return new HttpException('Grupo no encontrado', HttpStatus.NOT_FOUND)
        }

        return groupFound
    }

    async deleteGroup(id: number){
        const groupFound = await this.groupRepository.findOne({where: {id}})

        if (!groupFound){
            return new HttpException('Grupo no encontrado', HttpStatus.NOT_FOUND)
        }

        return this.groupRepository.delete({id})
    }

    async updateGroup(id:  number, group: UpdateSavingGroupDto ){
        const groupFound = await this.groupRepository.findOne({where: {id}})

        if (!groupFound){
            return new HttpException('Grupo no encontrado', HttpStatus.NOT_FOUND)
        }

        const updateGroup = Object.assign(groupFound, group)
        return this.groupRepository.save(updateGroup)

    }
    
}

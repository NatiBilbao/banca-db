import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity({name: 'miembros' })
export class Member{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 50 })
    first_name: string;
  
    @Column({ type: 'varchar', length: 50 })
    last_name: string;

    @Column({})
    CI: number;
  
    @Column({ type: 'varchar', length: 100 })
    occupation: string;
  
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    salary: number;
  
    @Column({ type: 'varchar', length: 20 })
    marital_status: string;
  
    @Column({ type: 'int' })
    number_of_children: number;
  
    @Column({ type: 'varchar', length: 15 })
    phone_number: string;
  
    @Column({ type: 'varchar', length: 100 })
    address: string;
  
    @Column({ type: 'varchar', length: 100 })
    email: string;
  
    @Column({ type: 'date' })
    birthdate: string;
  
    @Column({ type: 'varchar', length: 10 })
    gender: string;
  
    @Column({ type: 'date' })
    registration_date: string;
    
}
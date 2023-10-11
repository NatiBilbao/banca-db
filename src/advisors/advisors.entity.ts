import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'consejero'})
export class Advisor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({}) 
  advisor_CI: number;

  @Column({ type: 'varchar', length: 50 })
  advisor_name: string;

  @Column({ type: 'varchar', length: 50 })
  advisor_last_name: string;
}
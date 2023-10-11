import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity({name: 'grupos' })
export class Group{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  group_name: string;

  @Column({ type: 'date' })
  creation_date: string;

  @Column({ type: 'int' })
  leader_id: number;

  @Column({ type: 'int' })
  secretary_id: number;

  @Column({ type: 'int' })
  treasurer_id: number;
}
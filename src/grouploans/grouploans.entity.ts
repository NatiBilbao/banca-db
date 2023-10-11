import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity({name: 'grupospresta' })
export class GroupLoan{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  group_id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  loan_amount: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  interest_rate: number;

  @Column({ type: 'date' })
  start_date: string;

  @Column({ type: 'date' })
  end_date: string;

  @Column({ type: 'varchar', length: 20 })
  status: string;

  @Column({ type: 'int' })
  advisor_id: number;
}
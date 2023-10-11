import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity({name: 'pagoindividual'})
export class IndividualLoan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  member_id: number;

  @Column({ type: 'int' })
  group_loan_id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  individual_loan_amount: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  individual_interest_rate: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  remaining_balance: number;
}
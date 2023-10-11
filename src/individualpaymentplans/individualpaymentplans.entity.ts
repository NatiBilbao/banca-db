import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity({name:'planpagoindividual'})
export class IndividualPaymentPlans {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  individual_loan_id: number;

  @Column({ type: 'int' })
  installment_number: number;

  @Column({ type: 'date' })
  due_date: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total_amount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  capital_amount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  interest_amount: number;

  @Column({ type: 'date' })
  payment_date: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount_paid: number;

  @Column({ type: 'boolean' })
  is_on_time: boolean;
}
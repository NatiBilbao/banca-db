export class CreateIndividualPaymentPlanDto {
    individual_loan_id: number;
    installment_number: number;
    due_date: string;
    total_amount: number;
    capital_amount: number;
    interest_amount: number;
    payment_date: string;
    amount_paid: number;
    is_on_time: boolean;
}
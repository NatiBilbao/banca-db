export class CreateGroupLoansDto{
    group_id: number;
    loan_amount: number;
    interest_rate: number;
    start_date: string;
    end_date: string;
    status: string;
    advisor_id: number;
}
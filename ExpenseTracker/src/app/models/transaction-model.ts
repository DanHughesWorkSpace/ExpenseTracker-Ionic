export interface TransactionDto {
    id?: number,
    user_Id?: number,
    description?: string,
    amount?: number,
    type?: string,
    transaction_Category_Id?: number,
    dateCreated?: string
}

export type Transaction = Required<TransactionDto>
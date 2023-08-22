export interface TransactionDto {
  id?: number | null;
  user_Id?: number;
  description?: string;
  amount?: number;
  type?: string;
  transaction_Category_Id?: number;
  date_sCreated?: string;
}

export type Transaction = Required<TransactionDto>;

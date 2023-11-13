import { Transaction } from "./Transaction";

export type TransactionContextData = {
  transactions: Transaction[];
  createTransaction(transaction: Partial<Transaction>): Promise<void>;
};

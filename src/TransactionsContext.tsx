import { createContext, useEffect, useState } from "react";
import { Transaction } from "./types/Transaction";
import { api } from "./services/api";
import { TransactionsProviderProps } from "./types/TransactionsProviderProps";
import { TransactionContextData } from "./types/TransactionsContextData";

export const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionProvider(props: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transaction: Partial<Transaction>) {
    const response = await api.post("/transactions", {
      ...transaction,
      date: new Date(),
    });
    const { addedTransaction } = response.data;

    setTransactions([...transactions, addedTransaction]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {props.children}
    </TransactionContext.Provider>
  );
}


import { createContext, useEffect, useState, ReactNode } from "react";

import { api } from '../services/api'


interface Transaction {
    id: number;
    title: string;
    value: number;
    type: 'income' | 'outcome';
    category: string;
    createdAt: Date;
}
interface TransactionInput {
    title: string;
    value: number;
    type: string;
    category: string;
}
interface TransactionProviderProps {
    children: ReactNode;
}
interface TransactionContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;
}
export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])
    function createTransaction(transaction: TransactionInput) {
        api.post('/transactions', transaction)
            .then(response => setTransactions([...transactions, response.data.transaction]))
    }
    return (
        <TransactionContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
};